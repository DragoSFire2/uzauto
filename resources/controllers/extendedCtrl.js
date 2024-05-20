(function (app) {
  app.controller('extendedCtrl', function ($scope, $http, t, $location, $rootScope) {
    var q = {};
    if($rootScope.a.lang.lang_code == "ru") {
      q.regions = [{ "region_id": "2", "name": "Андижанская область" }, { "region_id": "12", "name": "Ферганская область" }, { "region_id": "7", "name": "Наманганская область" }, { "region_id": "5", "name": "Кашкадарьинская область" }, { "region_id": "10", "name": "Сырдарьинская область" }, { "region_id": "11", "name": "Ташкентская область" }, { "region_id": "8", "name": "Самаркандская область" }, { "region_id": "13", "name": "Хорезмская область" }, { "region_id": "1", "name": "город Ташкент" }, { "region_id": "14", "name": "Республика Каракалпакстан" }, { "region_id": "6", "name": "Навоийская область" }, { "region_id": "3", "name": "Бухарская область" }, { "region_id": "9", "name": "Сурхандарьинская область" }, { "region_id": "4", "name": "Джизакская область" }]

    } else {
      q.regions = [{ "region_id": "2", "name": "Андижон вилояти" }, { "region_id": "12", "name": "Фарғона вилояти" }, { "region_id": "7", "name": "Наманган вилояти" }, { "region_id": "5", "name": "Қашкадарё вилояти" }, { "region_id": "10", "name": "Сирдарё вилояти" }, { "region_id": "11", "name": "Тошкент вилояти" }, { "region_id": "8", "name": "Самарканд вилояти" }, { "region_id": "13", "name": "Хоразм вилояти" }, { "region_id": "1", "name": "Тошкент шахар" }, { "region_id": "14", "name": "Қорақалпоғистон Республикаси" }, { "region_id": "6", "name": "Навои вилояти" }, { "region_id": "3", "name": "Бухоро вилояти" }, { "region_id": "9", "name": "Сурхондарё вилояти" }, { "region_id": "4", "name": "Жиззах вилояти" }]

    }
   
    $http.post('/t/ap/stock_list&models_all_post', {
      filial_id: 100
    }).then(function (result) {
      if (result.data) {
        q.models = result.data;
        _.each(q.models, function (x) {
          x.def_photo = x.photo_sha666//imageUrl(x.photo_sha);
          _.each(x.modifications, (mod) => {
            _.each(mod.colors, (c) => {
              c.border_color = borderColor(c.hex_value);
              c.quant = calcQuant(c);
            });
          });
        });
      }
    });

    function calcQuant(c) {
      return function () {
        var stock = _.reduce(c.stock_data, function (m, n) {
          if (!q.region_id || q.region_id == n.region_id) return m + parseInt(n.stock || 0);
          else return m;
        }, 0);
        if (stock > 0) return t('stock') + ': ' + stock + ' ' + t('pcs.');
        else return t('queue') + ': ' + c.queue_no;
      }
    }

    function selectItem(mod, color) {
      q.modification_id = mod.modification_id;
      q.color_id = color.color_id;
    }

    function selectModel(model_id) {
      $location.path('car');
      $location.search(_.extend({ model_id }, _.pick(q, 'modification_id', 'color_id')));
    }

    $scope.tRegionSearch = t('Select region...');

    $scope.q = q;
    $scope.selectItem = selectItem;
    $scope.selectModel = selectModel;
  });
})(app);