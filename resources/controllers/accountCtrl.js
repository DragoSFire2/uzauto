(function (app) {
  app.controller('accountCtrl', function ($scope, $http, t, $state, $timeout, $rootScope) {
    var d = {
      orders: [],
      messages: [],
      inn: ""
    },
      modal;

    var initModal = _.once(function () {
      var elem = document.getElementById('cancelModal');
      modal = new bootstrap.Modal(elem);
      elem.addEventListener('shown.bs.modal', function () {
        $(modal.find('.form-control').first()).focus();
      });
    });

    $scope.$watch('a.user.user_id', function (v) {
      if (v) {
        initLoad();
      }
    });

    function initLoad() {
      $http.post('/b/ap/stream/ph$account_model', {}, {
        headers: {
          "oauth2_token": localStorage.getItem("token")
        }
      }).then(function (result) {
        var r = result.data;
        d.sms_confirm = r.order_confirm_avail == 'Y';
        d.inn_sha = r.inn_sha;


        d.passport_sha = r.passport_sha;
        d.reconfirm_time = r.reconfirm_time;
      });
      if ($rootScope.a.user.inn) {
        d.inn = $rootScope.a.user.inn
      }
      if ($rootScope.a.user.natural_client.pin) {
        d.inn = `${d.inn} / ${$rootScope.a.user.natural_client.pin}`
      }
      $http.post('/b/ap/stream/ph$load_orders', {}, {
        headers: {
          "oauth2_token": localStorage.getItem("token")
        }
      }).then(function (result) {

        d.orders = _.map(result.data, function (x) {
          x.price = bNumber(x.price);
          let status
          // (N)ew, (Q)ueued, (P)lanned, (W)aiting, (B)inding, (C)ompleted, (A)rrived, (R)eserved
          x.status_name = x.state_html.replace(/<[^>]*>?/gm, '')
          //x.status_name = status
          x.paid_amount = bNumber(x.paid_amount);
          x.remain_amount = bNumber(x.remain_amount);
          x.photo_src = imageUrl(x.photo_sha);
          console.log(x)
          _.each(x.messages, (m) => d.messages.push({
            order_code: x.code,
            public_text: m.public_text,
            created_on: m.created_on
          }));
          return x;
        });
        d.no_orders = !d.orders.length;
      }, () => {
        alert({ data: t('Unable to retrieve data. Try reloading the page and reauthenticating') });
      });
    }

    function confirm(msg, success) {
      if (window.confirm(msg)) {
        success();
      }
    }

    function reload() {
      $state.reload();
    }

    function alert(result) {
      window.alert(result.data);
    }

    function logout() {
      confirm(t('Do you want to sign out?'), $rootScope.a.logout);
    }

    function pickHeaders() {
      return _.pick($rootScope.a, 'project_code', 'filial_id');
    }

    function generateContract(item) {
      $.ajax({
        url: "/uzavto_contract/generate",
        data: { contract_code: item.contract_code },
        headers: {
          "oauth2_token": localStorage.getItem("token")
        }
      }).then(reload);
    }

    function getContract(item) {
      window.open(`/backend/download-order?id=${item.contract_code}&token=${localStorage.getItem("token")}`);
    }

    function cancelOrder(item) {
      alert("Отмена недоступна")
    }

    $scope.tPriorityOrder = t('Priority order');

    $scope.d = d;
    $scope.a = $rootScope.a;
    $scope.logout = logout;
    $scope.getContract = getContract;
    $scope.cancelOrder = cancelOrder;
    $scope.generateContract = generateContract;
  });
})(app);
