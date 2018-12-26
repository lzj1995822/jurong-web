// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
var glob = require('glob')
// var utils = require('../build/utils.js');

// 打包脚本配置
var build = {
  env: require('./prod.env'),
  // index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report
};

// 获取所有入口主页面
var modules = getEntries('src/modules/**/*.html');

// 配置所有入口文件
for (var pathname in modules) {
  build[pathname] = path.resolve(__dirname, '../dist/' + pathname + '.html');
 }

module.exports = {
  build: build,
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

// 获取入口html文件
function getEntries (globPath) {
  var entries = {},
    basename

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    /*if (path.extname(entry) == '.js') {
      basename = basename.split('_')[0];
    }*/
    entries[basename] = entry;
  })
  return entries;
}
