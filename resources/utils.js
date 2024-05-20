function bNumber(num) {
  var s = (num || 0).toString(),
      rx = /(-?\d+)(\d{3})/;
  while (rx.test(s)) {
    s = s.replace(rx, '$1 $2');
  }
  return s;
}

function imageUrl(photo_sha, div = 4, min = 400) {
  const VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (div == 0) {
    if (VIEWPORT_WIDTH > 800) return photo_sha ? `/b/core/m$load_image?sha=${photo_sha}` : 'resources/img/no_image.png';
    else div = 1;
  }
  var size = Math.max(Math.round(VIEWPORT_WIDTH / div), min);
  return photo_sha ? `/b/core/m$load_image?sha=${photo_sha}&width=${size}&height=${size}` : 'resources/img/no_image.png';
}

function borderColor(hex_value, light, dark) {
  if (hex_value) {
    var val = _.reduce([1, 3, 5], function(s, x){
      return s + parseInt(hex_value.substr(x, 2), 16);
    }, 0);

    if (val > 600) {
      return dark || '#ccc';
    } else {
      return light || hex_value;
    }
  } else {
    return dark || '#ccc';
  }
}