(function(app) {
  app.controller('orderCtrl', function($rootScope, $scope, $http, $timeout, t, $rootScope, $location, $window) {
    var param = $location.search();
    var d = pickData(param) || {};

    $scope.$watch('a.user.user_id', function(v) {
      if (v) {
        getOrder();
      }
    });

    function getOrder() {
      $http.post('/b/ap/stream/ph$get_order', _.pick(param, 'modification_id', 'color_id', 'dealer_id')).then(function(result) {
        if (result.data) {
          _.extend(d, result.data);
          d.photo_src = imageUrl(d.photo_sha, 1);
        }
      }, () => {
        //alert({ data: t('Unable to retrieve data. Try reloading the page and reauthenticating') });
      });
    }

    function pickData(v) {
      return _.pick(v, 'modification_id', 'color_id', 'dealer_id');
    }

    function alert(result) {
      window.alert(result.data);
    }

    function buy() {
      if (window.confirm(t('Do you want to submit?'))) {
        $http.post('/b/ap/stream/ph$order_save', pickData(d)).then(() => {
          $location.path("account");
        }, alert);
      }
    }

    function cancel() {
      $window.history.back();
    }

    $scope.d = d;
    $scope.buy = buy;
    $scope.bNumber = bNumber;
    $scope.cancel = cancel;
    $scope.a = $rootScope.a;
  });
})(app);