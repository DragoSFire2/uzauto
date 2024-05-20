(function(app) {
  app.controller('orderInfoCtrl', function($scope, $http, $timeout, $location, t) {
      riot.compile(function() {
          var tag = riot.mount('order_info')[0];
          tag.setGlobal($scope, $http, $timeout, $location, t);
      })
  });
})(app);
