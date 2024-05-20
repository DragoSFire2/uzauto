

(function(app) {
    app.controller('orderInfo2Ctrl', function($scope, $http, $timeout, $location, t) {
        riot.compile(function() {
            var tag = riot.mount('order_info2')[0];
            tag.setGlobal($scope, $http, $timeout, $location, t);
        })
    });
  })(app);
  