<news>
    <svg width="0" height="0" display="none">
        <symbol id="arrow_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 15 15">
            <path d="M13 6.121v2H0v-2h13z" fill="#001E50"/>
            <path d="M13.95 5.657l1.414 1.414-7.071 7.071-1.414-1.414 7.07-7.071z" fill="#001E50"/>
            <path d="M15.364 7.071L13.95 8.485l-7.071-7.07L8.293 0l7.071 7.071z" fill="#001E50"/>
        </symbol>
    </svg>
    <div class="container">
        <div class="filter_line filter_line_year">
            <span each="{item, i in data.year}" class="filter_item filter_item_year filter_item_year_font" onclick="{clickYear}" value="{item.name}">{item.name}</span>
        </div>
        <div class="filter_line filter_line_month">
            <span each="{item, i in object.month}" class="filter_item filter_item_month filter_item_month_font" onclick="{clickMonth}" value="{item.num}">{lang['month'][lang_code][item.num]}</span>
        </div>
        <div class="news_container">
            <div class="news_item" each="{item, i in object.news}" if="{selectedMonth == item.month || selectedMonth == ''}">
                <div class="news_item_img col-sm-11" style="margin-right:5%;">
                    <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}">
                        <img src="b/core/m$load_image?sha={item.imglistsha}" sha="{item.imglistsha}" if="{!isNull(item.imglistsha)}">
                    </a>
                </div>
                <div class="news_item_card col-sm-11">
                    <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}">
                        <span class="news_item_publish">{translate[lang_code]['published']} {item.date}</span>
                    </a>
                    <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}">
                        <span class="news_item_title">{item.title}</span>
                    </a>
                    <a href="#/news/{item.id}" class="news_item_readmore_link" onclick="{clickLink}">
                    <span class="news_item_readmore">
                        {translate[lang_code]['read_more']}
                        <svg class="news_item_readmore_arrow">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_right"></use>
                        </svg>
                    </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <style>
        news {

        }
        .filter_line {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            justify-content: flex-start;
            -webkit-justify-content: flex-start;
            border-bottom: 1px solid #dee1e3;
        }
        .filter_line_year {
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .filter_item {
            color: #001e50;
            cursor: pointer;
            border-bottom: 2px solid transparent;
        }
        .filter_item:hover {
            color: #0040c5;
        }
        .filter_line .selected {
            border-bottom: 2px solid #001e50;
        }
        .filter_item_year {
            margin-right: 20px;
            padding: 17px 15px;
        }
        .filter_item_year_font {
            font-size: 24px;
            font-family: var(--font-family-head);
        }
        .filter_item_month {
            margin-right: 5px;
            padding: 14px 10px;
        }
        .filter_item_month_font {
            font-size: 17px;
            font-family: var(--font-family-head);
        }
        .cont {

        }
        .news_container {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            -webkit-flex-direction: column;
            justify-content: flex-start;
            -webkit-justify-content: flex-start;
        }
        .news_item {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            padding-top: 40px;
            padding-bottom: 40px;
            justify-content: space-between;
            -webkit-justify-content: space-between;
        }
        .news_item_image {

        }
        .news_item_card {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            -webkit-flex-direction: column;
        }
        .news_item_publish {
            font-weight: 700;
            font-size: 20px;
        }
        .news_item_title {
            font-weight: 700;
            font-size: 42px;
        }
        .news_item_readmore {
            font-weight: 700;
            font-size: 20px;
        }
        .news_item_readmore:hover {
            /* color: #0040c5;
             border-color: #0040c5;
             text-decoration: none;
             */
        }
        .news_item_readmore_arrow {
            width: 16px;
            height: 15px;
        }
        .news_item_readmore_link {
            color: #001e50;
            text-decoration: none;
        }
        .news_item_readmore_link:hover {
            color: #0040c5;
            text-decoration: none;

        }
        .news_item_readmore_link {
            margin-bottom: 20px;
        }
    </style>
    <script>
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
                "published" : "Новость от"
                ,"read_more" : "Читать полностью"
            }
            ,"en": {
                "published" : "Published"
                ,"read_more" : "Read more"
            }
            ,"uz": {
                "published" : "Yangiliklar"
                ,"read_more" : "To'loq o'qish"
            }
        }
        self.lang = {
            "month": {
                "ru": {
                    "01" : "Январь"
                    ,"02" : "Февраль"
                    ,"03" : "Март"
                    ,"04" : "Апрель"
                    ,"05" : "Май"
                    ,"06" : "Июнь"
                    ,"07" : "Июль"
                    ,"08" : "Август"
                    ,"09" : "Сентябрь"
                    ,"10" : "Октябрь"
                    ,"11" : "Ноябрь"
                    ,"12" : "Декабрь"
                }
                ,"en": {
                    "01" : "January"
                    ,"02" : "February"
                    ,"03" : "March"
                    ,"04" : "April"
                    ,"05" : "May"
                    ,"06" : "June"
                    ,"07" : "July"
                    ,"08" : "August"
                    ,"09" : "September"
                    ,"10" : "October"
                    ,"11" : "November"
                    ,"12" : "December"
                }
                ,"uz": {
                    "01" : "Yanvar"
                    ,"02" : "Fevral"
                    ,"03" : "Mart"
                    ,"04" : "Aprel"
                    ,"05" : "May"
                    ,"06" : "Iyun"
                    ,"07" : "Iyul"
                    ,"08" : "Avgust"
                    ,"09" : "Sentyabr"
                    ,"10" : "Oktyabr"
                    ,"11" : "Noyabr"
                    ,"12" : "Dekabr"
                }
            }
        }
        //--------------------------------------------------------------
        this.on('before-mount', function() {

        });
        //--------------------------------------------------------------
        this.on('mount', function() {

        });
        //--------------------------------------------------------------
        this.on('update', function() {

        });
        //--------------------------------------------------------------
        this.on('unmount', function() {

        });
        //--------------------------------------------------------------
        this.clickYear = function(e) {
            this.selectYear(e.target);
            self.object = this.getYearObj(e.target.value);
            self.selectedMonth = '';
            this.update({object: this.object, selectedMonth: this.selectedMonth});
        }
        //--------------------------------------------------------------
        this.clickMonth = function(e) {
            //this.updateNews(e.target.value);
            this.selectMonth(e.target);
            self.selectedMonth =  e.target.value;
            this.update({selectedMonth: self.selectedMonth});

        }
        //--------------------------------------------------------------
        this.selectYear = function(target) {
            var get = self.root.querySelectorAll('.filter_line_year .filter_item');
            if (!isNull(get)) {
                get.forEach(function callback(currentValue, index, array) {
                    currentValue.classList.remove("selected");
                });
            }
            target.classList.add("selected");
        }
        //--------------------------------------------------------------
        this.selectMonth = function(target) {
            var get = self.root.querySelectorAll('.filter_line_month .filter_item');
            if (!isNull(get)) {
                get.forEach(function callback(currentValue, index, array) {
                    currentValue.classList.remove("selected");
                });
            }
            target.classList.add("selected");
        }
        //--------------------------------------------------------------
        this.selectYearFirst = function() {
            var get = self.root.querySelectorAll('.filter_line_year .filter_item');
            if (!isNull(get)) {
                this.selectYear(get[0]);
                self.object = this.getYearObj(get[0].value);
                this.update({object: this.object});
            }
        }
        //--------------------------------------------------------------
        this.getYearObj = function(value) {
            var result = {
                month: []
                ,news: []
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
        //--------------------------------------------------------------
        this.prepareData = function(array) {
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
                    ,title: item.title
                    ,month: item.month
                    ,text: item.text
                    ,date: item.date
					,imglistsha: item.imglistsha
					,imgcardtsha: item.imgcardtsha
                });
            }
            return result;
        }
        //--------------------------------------------------------------
        this.setGlobal = function(scope, http, timeout, location, t) {
            var arr = [
                {    id: 1
                    ,title: "ЛЕГКИЕ КОММЕРЧЕСКИЕ АВТОМОБИЛИ VOLKSWAGEN CADDY В УЗБЕКИСТАНЕ"
                    ,month: "01"
                    ,year: 2000
                }
                ,{    id: 2
                    ,title: "Президентом Республики Узбекистан подписано постановление «О мерах по реализации проекта по организации в Республике Узбекистан производства легких коммерческих автомобилей «Фольксваген»"
                    ,month: "02"
                    ,year: 2000
                }
                ,{  id: 3
                    ,title: "ЛЕГКИЕ КОММЕРЧЕСКИЕ АВТОМОБИЛИ VOLKSWAGEN CADDY В УЗБЕКИСТАНЕ"
                    ,month: "02"
                    ,year: 2000

                }
                ,{id: 4
                    ,title: "title4"
                    ,month: "11"
                    ,year: 2001

                }
                ,{  id: 5
                    ,title: "title5"
                    ,month: "12"
                    ,year: 2001

                }
                ,{  id: 6
                    ,title: "title6"
                    ,month: "01"
                    ,year: 1998

                }
            ];
            self.lang_code = scope.a.lang.lang_code;
            self.update({lang_code: self.lang_code});
            if (self.bTest) {
                self.data.year = self.prepareData(arr);
                self.update({data: this.data});
                self.selectYearFirst();
            } else {
                http.post('b/ap/stream/ph&get_news', { is_web : 'Y', lang_code: scope.a.lang.lang_code}).then(function(result) {
                    self.data.year = self.prepareData(result.data);
                    self.update({data: self.data});
                    self.selectYearFirst();
					//self.loadImg(http);
                });
            }
        }
        //--------------------------------------------------------------
        this.clickLink = function() {
            window.scrollTo(0, 0);
        }
		//--------------------------------------------------------------
        this.loadImg = function(http) {
            var get = self.root.querySelectorAll('img');
            if (!isNull(get)) {
				for(var i = 0; i < get.length; i++) {
					var elementImg = get[i];
					var sha = elementImg.getAttribute("sha")
					//console.log(elementImg, sha);
					//if (!isNull(sha)) {
						http.post('b/core/m$load_image', { sha : sha}).then(function(result) {
							elementImg.src = result;
						});
					//}
				}
            } 
        }
		
    </script>
</news>