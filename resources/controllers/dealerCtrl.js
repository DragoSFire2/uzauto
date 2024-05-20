(function (app) {
  app.controller('dealerCtrl', function ($scope, $http, $timeout, t, $rootScope, $location) {
    var param = $location.search(),
      d = {},
      dealerMap = L.map('dealerMap').setView([41.2995, 69.2401], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(dealerMap);

    var icon = {
      shadowUrl: 'map_module/marker-shadow.png',
      shadowAnchor: [1, 8],
      popupAnchor: [11, 5]
    },
      blueIcon = new L.Icon(_.extend(icon, {
        iconUrl: 'map_module/marker4.png'
      }));


    $http.post('/t/ap/stream/ph&dealers', { filial_id: '100' }).then(function (result) {
      if (result.data) {
        //_.extend(d, result.data);
        let dd = _.find(result.data, e => e.dealer_id == param.dealer_id)
        //d =
        _.extend(d,  dd.dealers[0])
        if (d.lat_lng) {
          var latlng = d.lat_lng.split(',');

          if (latlng.length == 2) {
            L.marker(latlng, { icon: blueIcon }).addTo(dealerMap);
            dealerMap.setView(latlng, 14);
          }
        }
      }
    });

    $scope.d = d;
  });
})(app);