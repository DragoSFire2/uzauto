riot.tag2('news', '<svg width="0" height="0" display="none"> <symbol id="arrow_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 15 15"> <path d="M13 6.121v2H0v-2h13z" fill="#001E50"></path> <path d="M13.95 5.657l1.414 1.414-7.071 7.071-1.414-1.414 7.07-7.071z" fill="#001E50"></path> <path d="M15.364 7.071L13.95 8.485l-7.071-7.07L8.293 0l7.071 7.071z" fill="#001E50"></path> </symbol> </svg> <div class="container"> <div class="filter_line filter_line_year"> <span each="{item, i in data.year}" class="filter_item filter_item_year filter_item_year_font" onclick="{clickYear}" riot-value="{item.name}">{item.name}</span> </div> <div class="filter_line filter_line_month"> <span each="{item, i in object.month}" class="filter_item filter_item_month filter_item_month_font" onclick="{clickMonth}" riot-value="{item.num}">{lang[\'month\'][lang_code][item.num]}</span> </div> <div class="news_container"> <div class="news_item" each="{item, i in object.news}" if="{selectedMonth == item.month || selectedMonth == \'\'}"> <div class="news_item_img col-sm-11"> <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}"> <img src="/img/mainSlidebg.jpg"> </a> </div> <div class="news_item_card col-sm-11"> <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}"> <span class="news_item_publish">{translate[lang_code][\'published\']} {item.date}</span> </a> <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}"> <span class="news_item_title">{item.title}</span> </a> <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}"> <span class="news_item_readmore"> {translate[lang_code][\'read_more\']} <svg class="news_item_readmore_arrow"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_right"></use> </svg> </span> </a> </div> </div> </div> </div>', 'news { } news .filter_line,[data-is="news"] .filter_line{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; justify-content: flex-start; -webkit-justify-content: flex-start; border-bottom: 1px solid #dee1e3; } news .filter_line_year,[data-is="news"] .filter_line_year{ margin-top: 20px; margin-bottom: 20px; } news .filter_item,[data-is="news"] .filter_item{ color: #001e50; cursor: pointer; border-bottom: 2px solid transparent; } news .filter_item:hover,[data-is="news"] .filter_item:hover{ color: #0040c5; } news .filter_line .selected,[data-is="news"] .filter_line .selected{ border-bottom: 2px solid #001e50; } news .filter_item_year,[data-is="news"] .filter_item_year{ margin-right: 20px; padding: 17px 15px; } news .filter_item_year_font,[data-is="news"] .filter_item_year_font{ font-size: 24px; font-family: var(--font-family-head); } news .filter_item_month,[data-is="news"] .filter_item_month{ margin-right: 5px; padding: 14px 10px; } news .filter_item_month_font,[data-is="news"] .filter_item_month_font{ font-size: 17px; font-family: var(--font-family-head); } news .cont,[data-is="news"] .cont{ } news .news_container,[data-is="news"] .news_container{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; -webkit-flex-direction: column; justify-content: flex-start; -webkit-justify-content: flex-start; } news .news_item,[data-is="news"] .news_item{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; padding-top: 40px; padding-bottom: 40px; justify-content: space-between; -webkit-justify-content: space-between; } news .news_item_image,[data-is="news"] .news_item_image{ } news .news_item_card,[data-is="news"] .news_item_card{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; -webkit-flex-direction: column; } news .news_item_publish,[data-is="news"] .news_item_publish{ font-weight: 700; font-size: 20px; } news .news_item_title,[data-is="news"] .news_item_title{ font-weight: 700; font-size: 42px; } news .news_item_readmore,[data-is="news"] .news_item_readmore{ font-weight: 700; font-size: 20px; } news .news_item_readmore:hover,[data-is="news"] .news_item_readmore:hover{ } news .news_item_readmore_arrow,[data-is="news"] .news_item_readmore_arrow{ width: 16px; height: 15px; } news .news_item_readmore_link,[data-is="news"] .news_item_readmore_link{ color: #001e50; text-decoration: none; } news .news_item_readmore_link:hover,[data-is="news"] .news_item_readmore_link:hover{ color: #0040c5; text-decoration: none; } news .news_item_readmore_link,[data-is="news"] .news_item_readmore_link{ margin-bottom: 20px; }', '', function (opts) {
    var self = this;
    self.bTest = false;
    self.lang_code = 'ru';
    self.object = {
        month: []
    };
    self.selectedMonth = "";
    self.news = [];
    self.data = {
        year: []
    };
    self.translate = {
        "ru": {
            "published": "Новость от"
            , "read_more": "Читать полностью"
        }
        , "en": {
            "published": "Published"
            , "read_more": "Read more"
        }
        , "uz": {
            "published": "Yangiliklar"
            , "read_more": "To'loq o'qish"
        }
    }
    self.lang = {
        "month": {
            "ru": {
                "01": "Январь"
                , "02": "Февраль"
                , "03": "Март"
                , "04": "Апрель"
                , "05": "Май"
                , "06": "Июнь"
                , "07": "Июль"
                , "08": "Август"
                , "09": "Сентябрь"
                , "10": "Октябрь"
                , "11": "Ноябрь"
                , "12": "Декабрь"
            }
            , "en": {
                "01": "January"
                , "02": "February"
                , "03": "March"
                , "04": "April"
                , "05": "May"
                , "06": "June"
                , "07": "July"
                , "08": "August"
                , "09": "September"
                , "10": "October"
                , "11": "November"
                , "12": "December"
            }
            , "uz": {
                "01": "Yanvar"
                , "02": "Fevral"
                , "03": "Mart"
                , "04": "Aprel"
                , "05": "May"
                , "06": "Iyun"
                , "07": "Iyul"
                , "08": "Avgust"
                , "09": "Sentyabr"
                , "10": "Oktyabr"
                , "11": "Noyabr"
                , "12": "Dekabr"
            }
        }
    }

    this.on('before-mount', function () {

    });

    this.on('mount', function () {

    });

    this.on('update', function () {

    });

    this.on('unmount', function () {

    });

    this.clickYear = function (e) {
        this.selectYear(e.target);
        self.object = this.getYearObj(e.target.value);
        self.selectedMonth = '';
        this.update({ object: this.object, selectedMonth: this.selectedMonth });
    }

    this.clickMonth = function (e) {

        this.selectMonth(e.target);
        self.selectedMonth = e.target.value;
        this.update({ selectedMonth: self.selectedMonth });

    }

    this.selectYear = function (target) {
        var get = self.root.querySelectorAll('.filter_line_year .filter_item');
        if (!isNull(get)) {
            get.forEach(function callback(currentValue, index, array) {
                currentValue.classList.remove("selected");
            });
        }
        target.classList.add("selected");
    }

    this.selectMonth = function (target) {
        var get = self.root.querySelectorAll('.filter_line_month .filter_item');
        if (!isNull(get)) {
            get.forEach(function callback(currentValue, index, array) {
                currentValue.classList.remove("selected");
            });
        }
        target.classList.add("selected");
    }

    this.selectYearFirst = function () {
        var get = self.root.querySelectorAll('.filter_line_year .filter_item');
        if (!isNull(get)) {
            this.selectYear(get[0]);
            self.object = this.getYearObj(get[0].value);
            this.update({ object: this.object });
        }
    }

    this.getYearObj = function (value) {
        var result = {
            month: []
            , news: []
        };
        for (var i = 0; i < this.data.year.length; i++) {
            var year = this.data.year[i];
            if (year.name == value) {
                result.month = year.month;
                break;
            }
        }
        for (var i = 0; i < result.month.length; i++) {
            if (!isNull(result.month[i].item)) {
                for (var j = 0; j < result.month[i].item.length; j++) {
                    var news = result.month[i].item[j];
                    news.month = result.month[i].name;
                    result.news.push(news);
                }
            }
        }
        return result;
    }

    this.prepareData = function (array) {
        var result = [];
        var yearObjs = {};
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            var yearObj = {};
            if (isNull(yearObjs[item.year])) {
                yearObj.name = item.year;
                yearObj.month = [];
                yearObj.monthObjs = {};
                yearObjs[item.year] = yearObj;
                result.push(yearObj);
            } else {
                yearObj = yearObjs[item.year];
            }
            var monthObj = {};
            if (isNull(yearObj.monthObjs[item.month])) {
                monthObj.num = item.month;
                monthObj.name = item.month;
                monthObj.item = [];
                yearObj.monthObjs[item.month] = monthObj;
                yearObj.month.push(monthObj);

            } else {
                monthObj = yearObj.monthObjs[item.month];
            }
            monthObj.item.push({
                id: item.id
                , title: item.title
                , month: item.month
                , text: item.text
                , date: item.date
            });
        }
        return result;
    }

    this.setGlobal = function (scope, http, timeout, location, t) {
        var arr = [
            {
                id: 1
                , title: "ЛЕГКИЕ КОММЕРЧЕСКИЕ АВТОМОБИЛИ VOLKSWAGEN CADDY В УЗБЕКИСТАНЕ"
                , month: "01"
                , year: 2000
            }
            , {
                id: 2
                , title: "Президентом Республики Узбекистан подписано постановление «О мерах по реализации проекта по организации в Республике Узбекистан производства легких коммерческих автомобилей «Фольксваген»"
                , month: "02"
                , year: 2000
            }
            , {
                id: 3
                , title: "ЛЕГКИЕ КОММЕРЧЕСКИЕ АВТОМОБИЛИ VOLKSWAGEN CADDY В УЗБЕКИСТАНЕ"
                , month: "02"
                , year: 2000

            }
            , {
                id: 4
                , title: "title4"
                , month: "11"
                , year: 2001

            }
            , {
                id: 5
                , title: "title5"
                , month: "12"
                , year: 2001

            }
            , {
                id: 6
                , title: "title6"
                , month: "01"
                , year: 1998

            }
        ];
        self.lang_code = scope.a.lang.lang_code;
        self.update({ lang_code: self.lang_code });
        if (self.bTest) {
            self.data.year = self.prepareData(arr);
            self.update({ data: this.data });
            self.selectYearFirst();
        } else {
            http.post('b/ap/stream/ph&get_news', { is_web: 'Y', lang_code: scope.a.lang.lang_code }).then(function (result) {
                self.data.year = self.prepareData(result.data);
                self.update({ data: self.data });
                self.selectYearFirst();
            });
        }
    }

    this.clickLink = function () {
        window.scrollTo(0, 0);
    }
});
riot.tag2('news_single', '<div class="container"> <div class="news_single_item"> <div class="news_single_title"> <span class="news_single_title_font">{object.title}</span> </div> <div class="news_single_date"> <span class="news_single_date_font">{object.date}</span> </div> <div class="news_single_text"> <span class="news_single_text_font" ref="text"></span> </div> </div> </div>', 'news_single .news_single_item,[data-is="news_single"] .news_single_item{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; -webkit-flex-direction: column; padding-top: 40px; padding-bottom: 40px; } news_single .news_single_title,[data-is="news_single"] .news_single_title{ margin-bottom: 50px; } news_single .news_single_title_font,[data-is="news_single"] .news_single_title_font{ font-size: 60px; font-family: var(--font-family-head); } news_single .news_single_date,[data-is="news_single"] .news_single_date{ margin-bottom: 20px; } news_single .news_single_date_font,[data-is="news_single"] .news_single_date_font{ font-size: 20px; font-family: var(--font-family-head); } news_single .news_single_text_font,[data-is="news_single"] .news_single_text_font{ font-size: 16px; font-family: var(--font-family-text); } @media only screen and (max-width: 767px) { news_single .news_single_title,[data-is="news_single"] .news_single_title{ margin-bottom: 40px; } news_single .news_single_title_font,[data-is="news_single"] .news_single_title_font{ font-size: 32px; } news_single .news_single_date_font,[data-is="news_single"] .news_single_date_font{ font-size: 16px; } }', '', function (opts) {
    var self = this;
    self.object = {};

    this.on('before-mount', function () {

    });

    this.on('mount', function () {

    });

    this.on('update', function () {

    });

    this.on('unmount', function () {

    });

    this.setGlobal = function (scope, http, timeout, location, t) {
        self.bTest = false;
        var obj = {
            id: 1
            , title: "title"
            , text: "<a>text</a>"
            , month: 1
            , year: 2000
            , date: "10.12.2000"
        }

        if (self.bTest) {
            self.object = obj;
            self.update({ object: this.object });
            self.refs.text.innerHTML = self.object.text;
        } else {
            var idNews = (location.$$path.replace("/news/", ""));
            http.post('b/ap/stream/ph&get_news_by_id', { is_web: 'Y', lang_code: scope.a.lang.lang_code, news_id: idNews }).then(function (result) {
                self.object = result.data;
                self.update({ object: self.object });
                self.refs.text.innerHTML = self.object.text;
            });
        }
    }

    this.clickLink = function () {
        window.scrollTo(0, 0);
    }
});

riot.tag2('order_info', `
<body class='h-auto'>
<div id='report-header' class='sticky-top'>
<div class='b-head-lines'>
<div class='b-head-line' style='background-color: #A2228D;'></div>
<div class='b-head-line' style='background-color: #525096;'></div>
<div class='b-head-line' style='background-color: #0095D9;'></div>
<div class='b-head-line' style='background-color: #8ED8F8;'></div>
<div class='b-head-line' style='background-color: #A7CE3A;'></div>
<div class='b-head-line' style='background-color: #D2E388;'></div>
<div class='b-head-line' style='background-color: #FFCA00;'></div>
<div class='b-head-line' style='background-color: #ED7822;'></div>
</div>
</div>
<div class='container-fluid' id='report-content'>
<div class='row'>
<table cellspacing='0' cellpadding='0' class='bsr-table'><col width='16'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='23'/>
<col width='30'/>
<col width='30'/>
<tr style='height:18px;'>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
</tr>
<tr style='height:19px;'>
<td class='bsr-27' colspan=24>Диққат !</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-27' colspan=24>Автотранспорт воситаси (тиркама) сотиб олинган кундан бошлаб 10 кун ичида ДЙҲХХ бўлимларида рўйхатга олиниши шарт</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>


<td class='bsr-28' rowspan=4 colspan=12><img src='/img/motors-logo.jpg' style='position:relative;width:240px;height:80px;'/></td>
<td class='bsr-28' rowspan=6 colspan=12><img src="https://savdo.uzavtosanoat.uz/contract/100/{object.contract_code}/{object.contract_code}.png" style='position:relative;'/></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-29' colspan=12>{object.police_invoice_serie}{object.police_invoice_id}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-1' colspan=24>Хисоб маълумотнома</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Хисоб маълумотнома Серияси</td>
<td class='bsr-3' colspan=12>{object.police_invoice_serie}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Хисоб маълумотнома №</td>
<td class='bsr-3' colspan=12>{object.police_invoice_id}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Мижоз тури (Юр. Жис)</td>
<td class='bsr-3' colspan=12>{object.client_kind}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил эгаси</td>
<td class='bsr-3' colspan=12>{object.client}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td class='bsr-30' colspan=12>Мижоз Паспорт серияси ва раками</td>
<td class='bsr-3' colspan=12>{object.client_serial_no}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>


<tr>
<td class='bsr-30' colspan=12>Пасспорт берилган жойи</td>
<td class='bsr-3' colspan=12>{object.client_issue_place}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td class='bsr-30' colspan=12>Мижоз ЖШИР
(ПИНФЛ)</td>
<td class='bsr-3' colspan=12>{object.client_inn}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Мижоз
ИНН</td>
<td class='bsr-3' colspan=12>{object.client_pnf}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Мижоз манзили</td>
<td class='bsr-3' colspan=12>{object.client_address}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Реализация санаси</td>
<td class='bsr-3' colspan=12>{object.cancelled_date}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил русуми</td>
<td class='bsr-3' colspan=12>{object.model}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил модели</td>
<td class='bsr-3' colspan=12>{object.modification}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Двигитель №</td>
<td class='bsr-3' colspan=12>{object.engine_code}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Кузов №</td>
<td class='bsr-3' colspan=12>{object.vin}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Ранг номи</td>
<td class='bsr-3' colspan=12>{object.color}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил ранги коди</td>
<td class='bsr-3' colspan=12>{object.color_code}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Цена</td>
<td class='bsr-3' colspan=12>{object.price}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>


<td class='bsr-30' colspan=12>Сотувчи ташкилотининг номи</td>
<td class='bsr-3' colspan=12>{object.dealer}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Сотувчи ташкилотининг манзили</td>
<td class='bsr-3' colspan=12>{object.dealer_address}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Дилер рахбари</td>
<td class='bsr-3' colspan=12>{object.dealer_director}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Тўла вазни</td>
<td class='bsr-3' colspan=12>{object.specification2}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Юксиз вазни</td>
<td class='bsr-3' colspan=12>{object.specification1}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Ишончнома</td>
<td class='bsr-3' colspan=12>{object.proxy_doc}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>От кучи</td>
<td class='bsr-3' colspan=12>{object.specification3}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td class='bsr-30' colspan=12>ГАИ СПРАВКА</td>
<td class='bsr-3' id="gaigai" style="color:green; font-weight: 900;" colspan=12>{object.gai}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr style='height:40px;'>
<td class='bsr-27' colspan=24>Хисоб маълумотнома хақиқийлигини текшириш учун юқоридаги QR кодни сканер қилинг</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</table>
</div>
</div>
</body>`, `.b-head-lines{top:0;z-index:10000;position:fixed;width:100%;}
.b-head-line{background-color:#A2228D;width:12.5%;height:1px;float:left;}
#report-content{height:100%;width:100%;background-color:#fcfcfc;}
.report-brand{padding:3px;color:#c7c5d8;}
#report-sheets{padding:0;}
@media screen{.bsr-pb{visibility:hidden;}.bsr-trans{cursor:pointer;color:#1a0dab !important;}.bsr-trans:hover{text-decoration:underline;}}
@media print{#report-header{display:none;}#report-sheets{display:none;}#cell-menu{display:none !important;}}
pm{display:none;}
menu-ids{display:none;}
.bsr-table{margin:auto;color:black;border-collapse:collapse;}.bsr-table td{padding:2px;}
.bsr-0{color:#0C0C0C;font-family:sans-serif;font-size:8pt;word-wrap:break-word;vertical-align:top;}
.bsr-1{color:#0C0C0C;font-family:sans-serif;font-size:8pt;font-weight:bold;background-color:#D5D5D5;word-wrap:break-word;text-align:center;vertical-align:middle;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}
.bsr-2{color:#0C0C0C;font-family:sans-serif;font-size:8pt;font-weight:bold;background-color:#EAEAEA;word-wrap:break-word;text-align:center;vertical-align:middle;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}
.bsr-3{color:#0C0C0C;font-family:sans-serif;font-size:8pt;word-wrap:break-word;text-align:left;vertical-align:top;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}
.bsr-4{font-weight:bold;white-space:nowrap;}
.bsr-5{font-style:italic;white-space:nowrap;}
.bsr-6{text-decoration:underline;white-space:nowrap;}
.bsr-7{white-space:nowrap;text-align:left;}
.bsr-8{white-space:nowrap;text-align:center;}
.bsr-9{white-space:nowrap;text-align:right;}
.bsr-10{white-space:nowrap;vertical-align:top;}
.bsr-11{white-space:nowrap;vertical-align:middle;}
.bsr-12{white-space:nowrap;vertical-align:bottom;}
.bsr-13{white-space:nowrap;}
.bsr-14{white-space:nowrap;text-align:right;}
.bsr-15{white-space:nowrap;text-align:right;}
.bsr-16{white-space:nowrap;text-align:right;}
.bsr-17{white-space:nowrap;text-align:right;}
.bsr-18{white-space:nowrap;text-align:right;}
.bsr-19{white-space:nowrap;text-align:right;}
.bsr-20{white-space:nowrap;text-align:right;}
.bsr-21{white-space:nowrap;overflow:hidden;}
.bsr-21 > div{-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);display: block;height: 41px;width: 146px;margin-left: -54.5px;margin-bottom: 54.5px;}
.bsr-22{white-space:nowrap;overflow:hidden;}
.bsr-22 > div{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);display: block;height: 41px;width: 146px;margin-right: -54.5px;margin-top: 54.5px;}
.bsr-23{color:#0C0C0C;font-family:Arial;font-size:10pt;word-wrap:break-word;vertical-align:top;}
.bsr-24{color:#0C0C0C;font-family:Arial;font-size:9pt;word-wrap:break-word;vertical-align:top;}
.bsr-25{color:#0C0C0C;font-family:Arial;font-size:20pt;word-wrap:break-word;vertical-align:top;}
.bsr-26{color:#0C0C0C;font-family:Arial;font-size:10pt;font-weight:bold;word-wrap:break-word;text-align:center;vertical-align:middle;}
.bsr-27{color:#0C0C0C;font-family:Arial;font-size:10pt;font-weight:bold;font-style:italic;word-wrap:break-word;text-align:center;vertical-align:middle;}


.bsr-28{color:#0C0C0C;font-family:sans-serif;font-size:8pt;word-wrap:break-word;text-align:center;vertical-align:top;}
.bsr-29{color:#0C0C0C;font-family:Arial;font-size:10pt;font-weight:bold;word-wrap:break-word;text-align:center;vertical-align:top;}
.bsr-30{color:#0C0C0C;font-family:sans-serif;font-size:8pt;font-weight:bold;font-style:italic;word-wrap:break-word;text-align:left;vertical-align:top;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}`, '', function (opts) {
    var self = this;
    self.object = {};

    this.on('before-mount', function () {

    });

    this.on('mount', function () {

    });

    this.on('update', function () {

    });

    this.on('unmount', function () {

    });

    this.setGlobal = function (scope, http, timeout, location, t) {
        self.bTest = false;
        var obj = {
            id: 1
            , title: "title"
            , text: "<a>text</a>"
            , month: 1
            , year: 2000
            , dealer: "Сиргели"
            , gai: ""
            , date: "10.12.2000"
            , state: "Новый"
            , client: "Клиент"
            , code: "Код"
            , contract_code: "Код контракта"
            , vin: "вин"
            , model: "Модель"
            , modification: "модификация"
            , color: "цвет"
            , price: "цена"
            , paid: "Оплачено"
            , need_pay: "Осталось"
            , produce: "Дата произв"
            , queue: "Очередь"
            , action: "Акция"
        }

        if (self.bTest) {
            self.object = obj;
            self.update({ object: this.object });
            var param = location.$$path.split("/");
            http.post('b/ap/stream/ph&get_orderinfo_by_id', { is_web: 'Y', lang_code: scope.a.lang.lang_code, order_id: param[2], guid: param[4] }).then(function (result) {
                self.object = result.data;
                self.update({ object: self.object });
            });
        } else {
            var param = location.$$path.split("/");
            http.post('b/ap/stream/ph&get_orderinfo_by_id', { is_web: 'Y', lang_code: scope.a.lang.lang_code, order_id: param[2], guid: param[4] }).then(function (result) {
                self.object = result.data;
                self.update({ object: self.object });
                http.get('https://savdo.uzavtosanoat.uz/backend/police2?q=' + result.data.contract_code).then(function (e) {
                    if (e.data) {
                        if (!e.data.error) {
                            if (e.data.object_data.birthday == "Invalid date") {
                                alert("Ошибка отправки счет справки в ГАИ: не заполнена дата рождения клиента")
                            } else if (e.data.data.data != "NO_ERROR") {
                                alert("Ошибка отправки счет справки в ГАИ: не заполнены обязательные поля")
                            } else if (e.data.data.data == "NO_ERROR") {
                                alert("Данные успешно отправлены в ГАИ")
                            }
                        } else {
                            alert("Ошибка отправки счет справки в ГАИ")
                        }
                    }
                    http.get('https://savdo.uzavtosanoat.uz/backend/getfleet?id=' + result.data.contract_code).then(ee1 => {
                        if (ee1.data.status == "OK") {
                            $("#gaigai").css("color", "green")
                            self.object.gai = "счет справка отправлена в ГАИ"
                        } else {
                            $("#gaigai").css("color", "red")
                            self.object.gai = "счет справка не отправлена в ГАИ"
                        }
                        self.update({ object: self.object });
                    })
                })
            });
        }
    }

    this.clickLink = function () {
        window.scrollTo(0, 0);
    }
});


riot.tag2('order_info2', `
<body class='h-auto'>
<div id='report-header' class='sticky-top'>
<div class='b-head-lines'>
<div class='b-head-line' style='background-color: #A2228D;'></div>
<div class='b-head-line' style='background-color: #525096;'></div>
<div class='b-head-line' style='background-color: #0095D9;'></div>
<div class='b-head-line' style='background-color: #8ED8F8;'></div>
<div class='b-head-line' style='background-color: #A7CE3A;'></div>
<div class='b-head-line' style='background-color: #D2E388;'></div>
<div class='b-head-line' style='background-color: #FFCA00;'></div>
<div class='b-head-line' style='background-color: #ED7822;'></div>
</div>
</div>
<div class='container-fluid' id='report-content'>
<div class='row'>
<table cellspacing='0' cellpadding='0' class='bsr-table'><col width='16'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='30'/>
<col width='23'/>
<col width='30'/>
<col width='30'/>
<tr style='height:18px;'>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
<td class='bsr-26'>&nbsp;</td>
</tr>
<tr style='height:19px;'>
<td class='bsr-27' colspan=24>Диққат !</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-27' colspan=24>Автотранспорт воситаси (тиркама) сотиб олинган кундан бошлаб 10 кун ичида ДЙҲХХ бўлимларида рўйхатга олиниши шарт</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>


<td class='bsr-28' rowspan=4 colspan=12><img src='/img/motors-logo.jpg' style='position:relative;width:240px;height:80px;'/></td>
<td class='bsr-28' rowspan=6 colspan=12><img id="qrcode" src="" style='position:relative;'/></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-29' colspan=12>{object.police_invoice_serie}{object.police_invoice_id}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-1' colspan=24>Хисоб маълумотнома</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Хисоб маълумотнома Серияси</td>
<td class='bsr-3' colspan=12>{object.police_invoice_serie}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Хисоб маълумотнома №</td>
<td class='bsr-3' colspan=12>{object.police_invoice_id}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Мижоз тури (Юр. Жис)</td>
<td class='bsr-3' colspan=12>{object.client_kind}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил эгаси</td>
<td class='bsr-3' colspan=12>{object.client}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td class='bsr-30' colspan=12>Мижоз Паспорт серияси ва раками</td>
<td class='bsr-3' colspan=12>{object.client_serial_no}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>



<tr>
<td class='bsr-30' colspan=12>Пасспорт берилган жойи</td>
<td class='bsr-3' colspan=12>{object.client_issue_place}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td class='bsr-30' colspan=12>Мижоз ЖШИР
(ПИНФЛ)</td>
<td class='bsr-3' colspan=12>{object.client_inn}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Мижоз
ИНН</td>
<td class='bsr-3' colspan=12>{object.client_pnf}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Мижоз манзили</td>
<td class='bsr-3' colspan=12>{object.client_address}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Реализация санаси</td>
<td class='bsr-3' colspan=12>{object.cancelled_date}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил русуми</td>
<td class='bsr-3' colspan=12>{object.model}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил модели</td>
<td class='bsr-3' colspan=12>{object.modification}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Двигитель №</td>
<td class='bsr-3' colspan=12>{object.engine_code}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Кузов №</td>
<td class='bsr-3' colspan=12>{object.vin}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Ранг номи</td>
<td class='bsr-3' colspan=12>{object.color}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Автомобил ранги коди</td>
<td class='bsr-3' colspan=12>{object.color_code}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Цена</td>
<td class='bsr-3' colspan=12>{object.price}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>


<td class='bsr-30' colspan=12>Сотувчи ташкилотининг номи</td>
<td class='bsr-3' colspan=12>{object.dealer}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Сотувчи ташкилотининг манзили</td>
<td class='bsr-3' colspan=12>{object.dealer_address}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Дилер рахбари</td>
<td class='bsr-3' colspan=12>{object.dealer_director}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Тўла вазни</td>
<td class='bsr-3' colspan=12>{object.specification2}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Юксиз вазни</td>
<td class='bsr-3' colspan=12>{object.specification1}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>Ишончнома</td>
<td class='bsr-3' colspan=12>{object.proxy_doc}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td class='bsr-30' colspan=12>От кучи</td>
<td class='bsr-3' colspan=12>{object.specification3}</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr style='height:40px;'>
<td class='bsr-27' colspan=24>Хисоб маълумотнома хақиқийлигини текшириш учун юқоридаги QR кодни сканер қилинг</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</table>
</div>
</div>
</body>`, `.b-head-lines{top:0;z-index:10000;position:fixed;width:100%;}
.b-head-line{background-color:#A2228D;width:12.5%;height:1px;float:left;}
#report-content{height:100%;width:100%;background-color:#fcfcfc;}
.report-brand{padding:3px;color:#c7c5d8;}
#report-sheets{padding:0;}
@media screen{.bsr-pb{visibility:hidden;}.bsr-trans{cursor:pointer;color:#1a0dab !important;}.bsr-trans:hover{text-decoration:underline;}}
@media print{#report-header{display:none;}#report-sheets{display:none;}#cell-menu{display:none !important;}}
pm{display:none;}
menu-ids{display:none;}
.bsr-table{margin:auto;color:black;border-collapse:collapse;}.bsr-table td{padding:2px;}
.bsr-0{color:#0C0C0C;font-family:sans-serif;font-size:8pt;word-wrap:break-word;vertical-align:top;}
.bsr-1{color:#0C0C0C;font-family:sans-serif;font-size:8pt;font-weight:bold;background-color:#D5D5D5;word-wrap:break-word;text-align:center;vertical-align:middle;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}
.bsr-2{color:#0C0C0C;font-family:sans-serif;font-size:8pt;font-weight:bold;background-color:#EAEAEA;word-wrap:break-word;text-align:center;vertical-align:middle;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}
.bsr-3{color:#0C0C0C;font-family:sans-serif;font-size:8pt;word-wrap:break-word;text-align:left;vertical-align:top;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}
.bsr-4{font-weight:bold;white-space:nowrap;}
.bsr-5{font-style:italic;white-space:nowrap;}
.bsr-6{text-decoration:underline;white-space:nowrap;}
.bsr-7{white-space:nowrap;text-align:left;}
.bsr-8{white-space:nowrap;text-align:center;}
.bsr-9{white-space:nowrap;text-align:right;}
.bsr-10{white-space:nowrap;vertical-align:top;}
.bsr-11{white-space:nowrap;vertical-align:middle;}
.bsr-12{white-space:nowrap;vertical-align:bottom;}
.bsr-13{white-space:nowrap;}
.bsr-14{white-space:nowrap;text-align:right;}
.bsr-15{white-space:nowrap;text-align:right;}
.bsr-16{white-space:nowrap;text-align:right;}
.bsr-17{white-space:nowrap;text-align:right;}
.bsr-18{white-space:nowrap;text-align:right;}
.bsr-19{white-space:nowrap;text-align:right;}
.bsr-20{white-space:nowrap;text-align:right;}
.bsr-21{white-space:nowrap;overflow:hidden;}
.bsr-21 > div{-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);display: block;height: 41px;width: 146px;margin-left: -54.5px;margin-bottom: 54.5px;}
.bsr-22{white-space:nowrap;overflow:hidden;}
.bsr-22 > div{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);display: block;height: 41px;width: 146px;margin-right: -54.5px;margin-top: 54.5px;}
.bsr-23{color:#0C0C0C;font-family:Arial;font-size:10pt;word-wrap:break-word;vertical-align:top;}
.bsr-24{color:#0C0C0C;font-family:Arial;font-size:9pt;word-wrap:break-word;vertical-align:top;}
.bsr-25{color:#0C0C0C;font-family:Arial;font-size:20pt;word-wrap:break-word;vertical-align:top;}
.bsr-26{color:#0C0C0C;font-family:Arial;font-size:10pt;font-weight:bold;word-wrap:break-word;text-align:center;vertical-align:middle;}
.bsr-27{color:#0C0C0C;font-family:Arial;font-size:10pt;font-weight:bold;font-style:italic;word-wrap:break-word;text-align:center;vertical-align:middle;}


.bsr-28{color:#0C0C0C;font-family:sans-serif;font-size:8pt;word-wrap:break-word;text-align:center;vertical-align:top;}
.bsr-29{color:#0C0C0C;font-family:Arial;font-size:10pt;font-weight:bold;word-wrap:break-word;text-align:center;vertical-align:top;}
.bsr-30{color:#0C0C0C;font-family:sans-serif;font-size:8pt;font-weight:bold;font-style:italic;word-wrap:break-word;text-align:left;vertical-align:top;border-top:1px solid #7F7F7F;border-bottom:1px solid #7F7F7F;border-left:1px solid #7F7F7F;border-right:1px solid #7F7F7F;}`, '', function (opts) {
    var self = this;
    self.object = {};

    this.on('before-mount', function () {

    });

    this.on('mount', function () {

    });

    this.on('update', function () {

    });

    this.on('unmount', function () {

    });

    this.setGlobal = function (scope, http, timeout, $location, t) {
        self.bTest = false;
        var obj = {
            id: 1
            , title: "title"
            , text: "<a>text</a>"
            , month: 1
            , year: 2000
            , dealer: "Сиргели"
            , date: "10.12.2000"
            , state: "Новый"
            , client: "Клиент"
            , code: "Код"
            , contract_code: "Код контракта"
            , vin: "вин"
            , model: "Модель"
            , modification: "модификация"
            , color: "цвет"
            , price: "цена"
            , paid: "Оплачено"
            , need_pay: "Осталось"
            , produce: "Дата произв"
            , queue: "Очередь"
            , action: "Акция"
        }

        if (self.bTest) {
            self.object = obj;
            self.update({ object: this.object });
            var param = $location;
            let id = param.url().split("/orderinfo2/")[1]
            $.get(`https://savdo.uzavtosanoat.uz:8888/police?q=${id}`, {}, function (result) {

                self.object = result.data;
                self.update({ object: self.object });
            })
        } else {
            var param = $location;
            let id = param.url().split("/orderinfo2/")[1]
            $.get(`https://savdo.uzavtosanoat.uz:8888/police?q=${id}`, {}, function (result) {
                
                let d = {
                    "dealer": result[17],
                    "dealer_address": result[18],
                    "dealer_director": result[19],
                    "date": "31.10.2022",
                    "state": "W",
                    "state_name": "W",
                    "client": result[3],
                    "client_inn": result[7],
                    "client_address": result[4],
                    "client_kind": result[2],
                    "client_pnf": result[8],
                    "client_issue_place": result[6],
                    "client_serial_no": result[5],
                    "code": "",
                    "contract_code": "1-257-2022-11203UA",
                    "vin": result[13],
                    "proxy_doc": result[22],
                    "police_invoice_id": result[1],
                    "police_invoice_serie": result[0],
                    "specification1": result[21],
                    "specification2": result[20],
                    "specification3": result[23],
                    "specification4": "{}",
                    "cancelled_date": result[9],
                    "model": result[10],
                    "modification": result[11],
                    "color": result[14],
                    "color_code": result[15],
                    "price": result[16],
                    "paid": "128645000",
                    "need_pay": "0",
                    "produce": "31.12.2023",
                    "queue": "16212",
                    "action": "",
                    "engine_code": result[12],
                    "action_data": [],
                    "qr": result[24]
                }
                self.object = d;
                self.update({ object: self.object });
            })
        }
    }

    this.clickLink = function () {
        window.scrollTo(0, 0);
    }
});