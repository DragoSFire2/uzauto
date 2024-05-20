(function(app) {
  app.controller('dealerListCtrl', function($scope, $http, t, $location,  $rootScope) {
    var q = {
      regions: [{
        region: '',
        name: ' '
      }],
      dealers: [],
      search: {}
    };
    q.search.region = "r_"

    $http.post('/t/ap/stream/ph&dealers', { filial_id: '100' }).then(function(result) {
      let regions = []
      for (let d of result.data) {
        regions.push(d.dealers[0].region)
      }
      regions = _.uniq(regions)
      q.regions = []
      if($rootScope.a.lang.lang_code == "ru") {
        regn = [
            [
                "1",
                "город Ташкент"
            ],
            [
                "2",
                "Андижанская область"
            ],
            [
                "3",
                "Бухарская область"
            ],
            [
                "4",
                "Джизакская область"
            ],
            [
                "5",
                "Кашкадарьинская область"
            ],
            [
                "6",
                "Навоийская область"
            ],
            [
                "7",
                "Наманганская область"
            ],
            [
                "8",
                "Самаркандская область"
            ],
            [
                "9",
                "Сурхандарьинская область"
            ],
            [
                "10",
                "Сырдарьинская область"
            ],
            [
                "11",
                "Ташкентская область"
            ],
            [
                "12",
                "Ферганская область"
            ],
            [
                "13",
                "Хорезмская область"
            ],
            [
                "14",
                "Республика Каракалпакстан"
            ],
        ]
    } else {
        regn = [
            [
                "1",
                "Тошкент шахар"
            ],
            [
                "2",
                "Андижон вилояти"
            ],
            [
                "3",
                "Бухоро вилояти"
            ],
            [
                "4",
                "Жиззах вилояти"
            ],
            [
                "5",
                "Қашкадарё вилояти"
            ],
            [
                "6",
                "Навои вилояти"
            ],
            [
                "7",
                "Наманган вилояти"
            ],
            [
                "8",
                "Самарканд вилояти"
            ],
            [
                "9",
                "Сурхондарё вилояти"
            ],
            [
                "10",
                "Сирдарё вилояти"
            ],
            [
                "11",
                "Тошкент вилояти"
            ],
            [
                "12",
                "Фарғона вилояти"
            ],
            [
                "13",
                "Хоразм вилояти"
            ],
            [
                "14",
                "Қорақалпоғистон Республикаси"
            ]
        ]
    }
      for (let r of regions) {
        for (let rr of regn) {
          if (r == rr[0]) {
            q.regions.push({
              region: `r_${r}_r`,
              name: rr[1]
            })
          }
        }
      }

      
      _.each(result.data, function(r) {
        if (r.dealers.length > 0) {
          //q.regions.push(_.pick(r, 'region_id', 'name'));

          _.each(r.dealers, function(d) {
            d.rating = 5
            var x = {};

            x.phones = _.chain(d.phone_number?.split(';'))
            .map(function(ph) { return ph.split(','); })
            .flatten()
            .map(ph => ph.trim())
            .value();

            let full = Math.floor(d.rating);
            x.rating_stars = _.map(_.range(5), function(rt) {
              return rt < full ? 'fa fa-star' : rt == full && !!d.rating.substr(2) ? 'fa fa-star-half-alt' : 'far fa-star';
            });

            x.region = `r_${d.region}_r`;
            q.dealers.push(_.extend(_.pick(d, 'dealer_id', 'region', 'name', 'rating', 'rating_stars', 'address', 'phones'), x));
          });
        }
      });
    });

    function openDealer(dealer_id) {
     
    }

    $scope.tSearch = t('Search...');
    $scope.tRegionSearch = t('Select region...');

    $scope.q = q;
    $scope.openDealer = openDealer;
  });
})(app);