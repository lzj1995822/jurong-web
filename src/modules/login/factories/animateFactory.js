module.exports = {
  start: function (canvasW, canvasH) {
    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      lineColor = 'rgba(255, 255, 255, 1)',  // 线条颜色值
      pointColor = 'rgba(255, 255, 255, 1)',  // 线条颜色值
      extendDis = 5,   // 可超出的画布边界
      lineDis = 100,    // 连线距离
      warea = {x: null, y: null},   // 鼠标活动时，获取鼠标坐标
      dots = [],        // 粒子
      x,                // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
      y,
      xa,
      ya,
      wh,
      i,
      RAF = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

    lineDis *= lineDis;
    canvas.width = canvasW;
    canvas.height = canvasH;

    window.onmousemove = function (e) {
      e = e || window.event;
      warea.x = e.clientX - canvas.offsetLeft + document.body.scrollLeft;
      warea.y = e.clientY - canvas.offsetTop + document.body.scrollTop;
    };
    window.onmouseout = function (e) {
      warea.x = null;
      warea.y = null;
    };
    // 添加粒子
    for (i = 0; i < 100; i++) {
      x = Math.random() * (canvas.width + 2 * extendDis) - extendDis;
      y = Math.random() * (canvas.height + 2 * extendDis) - extendDis;
      xa = (Math.random() * 2 - 1) / 5;
      ya = (Math.random() * 2 - 1) / 5;
      wh = Math.ceil(Math.random() * 2);
      dots.push({
        x: x,
        y: y,
        xa: xa,
        ya: ya,
        w: wh,
        h: wh
      });
    }

    /**
     * 每一帧循环的逻辑
     */
    function animate () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubDrawLine([warea].concat(dots));
      RAF(animate);
    }

    /**
     * 逐个对比连线
     * @param ndots
     */
    function bubDrawLine (ndots) {
      var ndot,
        i,
        xc,
        yc,
        dis,
        ratio;
      dots.forEach(function (dot) {
        move(dot);
        // 循环比对粒子间的距离
        for (i = 0; i < ndots.length; i++) {
          ndot = ndots[i];
          if (dot === ndot || ndot.x === null || ndot.y === null) continue;
          xc = dot.x - ndot.x;
          yc = dot.y - ndot.y;
          // 如果x轴距离或y轴距离大于max,则不计算粒子距离
          if (xc > ndot.max || yc > lineDis) continue;
          // 两个粒子之间的距离
          dis = xc * xc + yc * yc;
          // 如果粒子距离超过max,则不做处理
          if (dis > lineDis) continue;
          // 距离比
          ratio;
          // 如果是鼠标，则让粒子向鼠标的位置移动
          if (ndot === warea && dis < 20000) {
            dot.x -= xc * 0.01;
            dot.y -= yc * 0.01;
          }
          // 计算距离比
          ratio = (lineDis - dis) / lineDis;
          // 粒子间连线
          ctx.beginPath();
          ctx.lineWidth = ratio / 2;
          ctx.strokeStyle = lineColor;
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(ndot.x, ndot.y);
          ctx.stroke();
        }
        // 将已经计算过的粒子从数组中删除
        ndots.splice(ndots.indexOf(dot), 1);
      });
    }

    /**
     * 粒子移动
     * @param dot
     */
    function move (dot) {
      dot.x += dot.xa;
      dot.y += dot.ya;
      // 遇到边界将加速度反向
      dot.xa *= (dot.x > (canvas.width + extendDis) || dot.x < -extendDis) ? -1 : 1;
      dot.ya *= (dot.y > (canvas.height + extendDis) || dot.y < -extendDis) ? -1 : 1;
      // 绘制点
      ctx.beginPath();
      ctx.fillStyle = pointColor;
      // ctx.fillRect(dot.x - 0.5, dot.y - 0.5, dot.w, dot.h);
      ctx.arc(dot.x - 0.5, dot.y - 0.5, dot.w, 0, Math.PI * 2, false);
      ctx.fill();
    }

    // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
    setTimeout(function () {
      animate();
    }, 100);
  }
};
