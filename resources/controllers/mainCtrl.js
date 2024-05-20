(function (app) {
  app.controller('mainCtrl', function ($rootScope, $scope, $http, t, $location, $timeout) {
    var q = {
      show: false,
      listView: false,
      previews: [],
      preview: {},
      hide_preview: false
    },
      interval,
      previewData = {};

    q.models = [];

    previewData = {};
      models();
    function models() {
      $http.post('/t/ap/stream/ph&models', {
        "is_web": "Y",
        "filial_id": 100
      }, {
        headers: {
          "filial_id": 100
        }
      }).then(function (result) {
        var idx = 0;
        _.each(result.data, function (x, i) {
          var min_price = _.reduce(x.modifications, (memo, m) => Math.min(memo || m.price, m.price), null);
          x.min_price = min_price
          q.models.push(_.extend({
            photo_sha666: x.photo_sha666,
            chosen: i % 4 == 3
          }, _.pick(x, 'model_id', 'name', 'def_photo', 'min_price', 'chosen')));

          let ph = x;
          let pv = previewData[x.name.toLowerCase()];

          if (true) {
            let img = imageUrl(ph.photo_sha, 100, 20)
            if(x.model_id == 446) {
              img = "https://telegra.ph/file/0f3c57be9e90a9282ac54.jpg"
              q.previews.push({
                model_id: x.model_id,
                name: x.name,
                img: img,
                mini_img: imageUrl(ph.photo_sha, 100, 20),
                color: 'white',
                btn: 'light',
                index: idx++
              });
            }
            else if(x.model_id == 443) {
              img= "https://telegra.ph/file/653c22b71ddc8cc781bb1.jpg"
              q.previews.push({
                model_id: x.model_id,
                name: x.name,
                img: img,
                mini_img: imageUrl(ph.photo_sha, 100, 20),
                color: 'white',
                btn: 'light',
                index: idx++
              });
            }
            else if(x.model_id == 444) {
              img= "https://telegra.ph/file/a361219422c0f073183cf.jpg"
              q.previews.push({
                model_id: x.model_id,
                name: x.name,
                img: img,
                mini_img: imageUrl(ph.photo_sha, 100, 20),
                color: 'white',
                btn: 'light',
                index: idx++
              });
            }
            
          }
        });
        q.models.sort((a, b) => (b.model_id == 516) - (a.model_id == 516))

        q.previews = _.sortBy(q.previews, 'index');
        q.preview = _.first(q.previews);
        q.preview.length > 1 && enablePreviewInterval();
      }).finally(() => {
        q.show = true;
      });
    }

    function enablePreviewInterval() {
      interval = setInterval(() => {
        let idx = q.preview.index == q.previews.length - 1 ? 0 : q.preview.index + 1;
        q.preview = _.findWhere(q.previews, { index: idx });
        $('.preview-img').css('opacity', 0);
        $('.preview-img.mask').css('opacity', 1);
        $scope.$digest();
      }, 10000);
    }

    function activatePreview(pr) {
      clearInterval(interval);
      q.preview = pr;
      $('.preview-img').css('opacity', 0);
      $('.preview-img.mask').css('opacity', 1);
      enablePreviewInterval();
    }

    function selectModel(model_id) {
      $location.path('car');
      $location.search({ model_id });
    }

    function alert(result) {
      window.alert(result.data);
    }

    function carBackground(model) {
      return {
        backgroundImage: `url(${model.def_photo})`
      }
    }

    function loaded() {
      $('.preview-img').css('opacity', 1);
      $('.preview-img.mask').css('opacity', 0);
    }

    $scope.$on('$destroy', function () {
      clearInterval(interval);
    });

    $scope.q = q;
    $scope.loaded = loaded;
    $scope.bNumber = bNumber;
    $scope.selectModel = selectModel;
    $scope.carBackground = carBackground;
    $scope.activatePreview = activatePreview;
  });
})(app);
