angular
  .module('appRoutes', ["ui.router"])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    _.each(['main', 'car', 'selectDealer', 'order', 'dealerList', 'dealer', 'extended', 'account', 'orderInfo'], function (p) {

      if (p == "orderInfo") {
        $stateProvider.state({
          name: 'orderInfo',
          url: '/orderinfo/:id/guid/:guid',
          templateUrl: 'resources/html/order_info.html',
          controller: 'orderInfoCtrl'
        })
        $stateProvider.state({
          name: 'orderInfo2',
          url: '/orderinfo2/:id',
          templateUrl: 'resources/html/order_info2.html',
          controller: 'orderInfo2Ctrl'
        })
      } else {
        $stateProvider.state({
          name: p,
          url: '/' + p,
          templateUrl: `resources/html/${p}.html`,
          controller: p + 'Ctrl'
        });
      }
    });


    $urlRouterProvider.otherwise('/main');
  }]);
