class UrlSearchParams {

  append (key, value) {
    this[key] = value;
  }

  toString () {
    var i, str = '';
    for (i in this) {
      str += (str ? '&' : '') + i + '=' + this[i];
    }
    return str;
  }

}

export default UrlSearchParams;
