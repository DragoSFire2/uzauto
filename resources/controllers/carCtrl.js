(function (app) {
  app.controller('carCtrl', function ($scope, $http, $timeout, t, $rootScope, $location) {
    var param = $location.search();
    var d = {};
    d.model_id = param.model_id
    var data;
    //d.slider = "slider/index.html?model=" + d.model_id + "&v2"
    d.slider = ""
    var carouselElem = document.getElementById('carCarouselControls'),
      carousel = new bootstrap.Carousel(carouselElem);


    data = {};


    $http.post('/t/ap/stream/ph&models_all_v2', {
      "is_web": "Y",
      "filial_id": 100
    }).then(function (result) {
      result = {
        data: result.data.find(e => e.model_id == param.model_id)
      }
      //d.stocks = d.stocks.find(e => e.model_id == param.model_id).data
      d.model_id = param.model_id
      for (let m of result.data.modifications) {
        //  let mods = d.stocks.filter(e => e.modification_id == m.modification_id)
        // m.colors = result.data.colors.map(a =>
        //   Object
        //     .assign({}, a))
        for (let cc of m.colors) {
          //cc.stock = st.stock
          //cc.expect_date = st.expect_date
          cc.price = m.price
        }
      }
      if (result.data) {
        _.extend(d, result.data);
        _.each(d.modifications, (m) => {
          makeGallery(m, data[d.name.toLowerCase()]);
          _.each(m.colors, (c) => {
            c.border_color = borderColor(c.hex_value);
            c.check_color = borderColor(c.hex_value, '#fff', '#000');
            c.photo_src = c.photo_sha666//imageUrl(c.photo_sha, 0);
            c.quant = calcQuant(c);
            //c.quant = 500 
          });
        });
        setModification();
        changeModification(true);
      }
    });



    function setModification() {
      let mod = _.findWhere(d.modifications, { modification_id: String(param.modification_id) })

      if (mod) {
        d.modification = mod;
      } else {
        let idx = _.findIndex(d.modifications, { producing: 'Y' });
        d.modification = idx > -1 ? d.modifications[idx] : _.first(d.modifications);
      }
      ItcSlider.createInstances()
      d.modification.imgs = Object.assign({}, d.modification.colors)
      // d.modification.imgs = [{
      //   photo_src: imageUrl('614ae806eb77aef9b0adbf44fe011b9f2ce40567c498b41ec6485d5f5394833f', 2)
      // }]
    }

    function photo(item, sha, div) {
      return {
        ...item,
        sha,
        src: imageUrl(sha, div),
      }
    }

    function makeGallery(m, data) {
      if (_.isEmpty(data)) data = {};
      let ext = data.exterior_info || [];
      m.exterior_color = data.exteriorColor || '#212529';
      m.description_color = data.descriptionColor || '#212529';
      m.show_exterior = false;
      //m.main_exterior = photo(_.first(ext), _.first(m.exterior), 1);
      //m.last_exterior = photo(_.last(ext), _.last(m.exterior), 1);
      m.main_exterior = {
        sha: '',
        src: '',
      }
      m.last_exterior = {
        sha: '',
        src: '',
      }
      m.exterior = [{
        sha: '',
        src: '',
      }]
      let int = data.interior_info || [];
      m.show_interior = true;
      m.interior = m.options_obj.map(e => ({ text: e.description, header: e.name, src: imageUrl(e.imagesha, 2) }))

      m.interior_first = m.options_obj.map(e => {

        return { text: e.description, header: e.name, src: imageUrl(e.imagesha, 2) }
      })
      m.interior_last = [];
      delete m.interior;
      if (!data.descriptionColor || data.descriptionColor != 'white' || !m.last_exterior?.sha)
        m.description_btn = 'dark';
      else
        m.description_btn = 'light';

    }

    function stockQuant(c) {
      return _.reduce(c.stock_data, function (m, n) {
        if (!d.region_id || d.region_id == n.region_id) return m + parseInt(n.stock || 0);
        else return m;
      }, 0);
    }

    function calcQuant(c) {
      return function () {
        let stock = stockQuant(c);
        if (stock > 0) return stock + ' ' + t('pcs.');
        else return t('queue') + ': ' + c.queue_no;
      }
    }

    function buyDisabled() {
      return d.modification?.producing == 'N' && d.color && !stockQuant(d.color);
    }

    function buy() {
      if (!$rootScope.a.user.user_id) {
        return $scope.enterByOneId()
      }
      $location.path('selectDealer');
      $location.search({
        model_id: d.model_id,
        modification_id: d.modification.modification_id,
        color_id: d.color.color_id
      });
    }

    function inter() {

    }

    function changeModification(init) {
      if (init) {
        var colIdx = _.findIndex(d.modification.colors, { color_id: String(param.color_id) });
        if (colIdx > -1) {
          $timeout(() => {
            selectColor(colIdx);
          });
        } else d.color = _.first(d.modification?.colors);
      } else {
        d.color = _.first(d.modification?.colors);
      }
      d.modification.imgs = Object.assign({}, d.modification.colors)
      d.details = d.modification?.details;
      // let dd = _.chunk(d.modification.descriptions.split("\n"), 2)
      // //d.slider = "slider/index.html?model=" + d.model_id + "&v3&mod_id=" + d.modification.modification_id
      // let text = `<table  class="table table-bordered table-responsive"  style="width:100%">`
      // for (let dd1 of dd) {
      //   let dd2 = ``
      //   for (let t of dd1) {
      //     dd2 = dd2 + `<td width=50%>${t.replace(/\•/g, '').trim()}</td>`
      //   }
      //   text = text + `<tr>` + dd2 + `</tr>`
      // }
      // text = text + `</table>`
      let text = ""
      d.details = {
        acceleration: d.modification.acceleration,
        descriptions: text,
        fuel_consumption: d.modification.fuel_consumption,
        horsepower: d.modification.horsepower,
        transmission: d.modification.transmission,
      }
    }

    function selectColor(idx) {
      carousel.to(idx);
    }

    carouselElem.addEventListener('slide.bs.carousel', function (ev) {
      d.color = d.modification.colors[ev.to];

      if (!$scope.$$phase) $scope.$digest();
    });

    $scope.tSearchRegion = t('Select region...');

    $scope.d = d;
    $scope.buy = buy;
    $scope.bNumber = bNumber;
    $scope.selectColor = selectColor;
    $scope.buyDisabled = buyDisabled;
    $scope.changeModification = changeModification;
  });
})(app);