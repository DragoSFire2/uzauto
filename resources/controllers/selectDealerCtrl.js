(function (app) {
    app.controller('selectDealerCtrl', function ($scope, $http, $timeout, t, $rootScope, $location) {
        var param = $location.search();
        var q = {
            regions: [{
                region: '',
                name: ' '
            }],
            dealers: [],
            search: {}
        };
        q.captcha_url = ``
        q.search.region_id = param.region_id;
        q.search.region = "------"
        $http.post('/t/ap/stream/ph&dealers', { filial_id: '100' }).then(function (result) {
            let regions = []
            for (let d of result.data) {
                regions.push(d.dealers[0].region)
            }
            regions = _.uniq(regions)
            q.regions = []
            let regn
            console.log($rootScope.a)
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
            console.log(regn)
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
            //console.log(JSON.stringify(q.regions))
            _.each(result.data, function (r) {
                if (r.dealers.length > 0) {

                    _.each(r.dealers, function (d) {
                        d.rating = 5
                        var x = {};

                        x.phones = _.chain(d.phone_number?.split(';'))
                            .map(function (ph) { return ph.split(','); })
                            .flatten()
                            .map(ph => ph.trim())
                            .value();

                        let full = Math.floor(d.rating);
                        x.rating_stars = _.map(_.range(5), function (rt) {
                            return rt < full ? 'fa fa-star' : rt == full && !!d.rating.substr(2) ? 'fa fa-star-half-alt' : 'far fa-star';
                        });
                        x.region = `r_${d.region}_r`;
                        q.dealers.push(_.extend(_.pick(d, 'dealer_id', 'name', 'rating', 'rating_stars', 'address', 'phones'), x));
                    });
                }
            });
            let prm = _.pick(param, 'modification_id', 'color_id')
            prm.filial_id = 100

            // $http.post('/b/ap/stream/ph&dealer_stocks', prm).then(function (result) {
            //     q.stocks = result.data || [];
            //     _.each(q.dealers, function (x) {
            //         x.stock = _.findWhere(q.stocks, { dealer_id: x.dealer_id })?.stock || 0;
            //     });
            // });
        });
        function updateCaptcha() {
            q.captcha_url = `/t/captcha?token=${localStorage.getItem("rtoken")}&t=${+new Date()}`
        }
        function openCaptcha(dealer_id) {
            q.captcha = ""
            updateCaptcha()
            q.dealer_id = dealer_id
            $('#captchaModal').modal('show')
        }
        function selectDealer() {
            $('#captchaModal').modal('hide')

            if (!$rootScope.a.user.user_id) {
                return $scope.enterByOneId()
            }


            let dealer_id = q.dealer_id
            let captcha = q.captcha
            var data = _.pick(param, 'modification_id', 'color_id');
            if (window.confirm(t('Do you want to submit?'))) {
                $http.post('/t/ap/stream/ph$order_save_', { ...data, dealer_id, captcha }, {
                    headers: {
                        "oauth2_token": localStorage.getItem("token")
                    }
                }).then((result) => {
                    $location.path("account");
                    // $http.get('/backend/sap?id=' + result.data.id).then((result_data) => {
                    //     $location.path("account");
                    // }, alert);
                }, (err) => {
                    console.log(err.data)
                    if (err.data.includes("nepravilno")) {
                        alert("Проверочный код содержит ошибку")
                    } else if (err.data.includes("zapolnena")) {
                        alert("Проверочный код не заполнен")
                    } else {
                        alert(err.data)
                    }
                });
            }
        }

        $scope.tSearch = t('Search...');
        $scope.tRegionSearch = t('Select region...');

        $scope.a = $rootScope.a;
        $scope.q = q;
        $scope.updateCaptcha = updateCaptcha
        $scope.selectDealer = selectDealer;
        $scope.openCaptcha = openCaptcha
    });
})(app);
