app.factory('Http', function($http, Upload) {
  function post(path, data) {
    var file = [],
    param = loop(data || {});

    function loop(d) {
      if (d instanceof File) {
        file.push(d);
        return '\0' + (file.length - 1);
      }
      if (_.isArray(d)) {
        return _.map(d, loop)
      } else if (_.isObject(d)) {
        return _.mapObject(d, loop);
      } else if (_.isString(d)) {
        return d.replace('\0', '');
      } else {
        return d;
      }
    }

    if (file.length) {
      return Upload.upload({
        url: path,
        fields: {
          param: param
        },
        file: file,
        headers: {
          'BiruniUpload': 'param',
        }
      });
    } else {
      return $http.post(path, param);
    }
  }

  return {
    post: post
  };
});