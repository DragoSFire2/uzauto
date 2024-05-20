riot.tag2('contact', '<svg width="0" height="0" display="none"> <symbol id="arrow_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 15 15"> <path d="M13 6.121v2H0v-2h13z" fill="#001E50"></path> <path d="M13.95 5.657l1.414 1.414-7.071 7.071-1.414-1.414 7.07-7.071z" fill="#001E50"></path> <path d="M15.364 7.071L13.95 8.485l-7.071-7.07L8.293 0l7.071 7.071z" fill="#001E50"></path> </symbol> </svg> <div class="container"> <div class="filter_line filter_line_year"> <span each="{item, i in data.year}" class="filter_item filter_item_year filter_item_year_font" onclick="{clickYear}" riot-value="{item.name}">{item.name}</span> </div> <div class="filter_line filter_line_month"> <span each="{item, i in object.month}" class="filter_item filter_item_month filter_item_month_font" onclick="{clickMonth}" riot-value="{item.num}">{lang[\'month\'][lang_code][item.num]}</span> </div> <div class="contact_container"> <div class="contact_item" each="{item, i in object.contact}" if="{selectedMonth == item.month || selectedMonth == \'\'}"> <a href="#/contact/{item.id}" class="contact_item_readmore_link" onclick="{clickLink}"> <span class="contact_item_publish">{translate[lang_code][\'published\']} {item.date}</span> </a> <a href="#/contact/{item.id}" class="contact_item_readmore_link" onclick="{clickLink}"> <span class="contact_item_title">{item.title}</span> </a> <a href="#/contact/{item.id}" class="contact_item_readmore_link" onclick="{clickLink}"> <span class="contact_item_readmore"> {translate[lang_code][\'read_more\']} <svg class="contact_item_readmore_arrow"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_right"></use> </svg> </span> </a> </div> </div> </div>', 'contact { } contact .filter_line,[data-is="contact"] .filter_line{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; justify-content: flex-start; -webkit-justify-content: flex-start; border-bottom: 1px solid #dee1e3; } contact .filter_line_year,[data-is="contact"] .filter_line_year{ margin-top: 20px; margin-bottom: 20px; } contact .filter_item,[data-is="contact"] .filter_item{ color: #001e50; cursor: pointer; border-bottom: 2px solid transparent; } contact .filter_item:hover,[data-is="contact"] .filter_item:hover{ color: #0040c5; } contact .filter_line .selected,[data-is="contact"] .filter_line .selected{ border-bottom: 2px solid #001e50; } contact .filter_item_year,[data-is="contact"] .filter_item_year{ margin-right: 20px; padding: 17px 15px; } contact .filter_item_year_font,[data-is="contact"] .filter_item_year_font{ font-size: 24px; font-family: var(--font-family-head); } contact .filter_item_month,[data-is="contact"] .filter_item_month{ margin-right: 5px; padding: 14px 10px; } contact .filter_item_month_font,[data-is="contact"] .filter_item_month_font{ font-size: 17px; font-family: var(--font-family-head); } contact .cont,[data-is="contact"] .cont{ } contact .contact_container,[data-is="contact"] .contact_container{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; -webkit-flex-direction: column; justify-content: flex-start; -webkit-justify-content: flex-start; } contact .contact_item,[data-is="contact"] .contact_item{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; -webkit-flex-direction: column; padding-top: 40px; padding-bottom: 40px; } contact .contact_item_publish,[data-is="contact"] .contact_item_publish{ font-weight: 700; font-size: 20px; } contact .contact_item_title,[data-is="contact"] .contact_item_title{ font-weight: 700; font-size: 42px; } contact .contact_item_readmore,[data-is="contact"] .contact_item_readmore{ font-weight: 700; font-size: 20px; } contact .contact_item_readmore:hover,[data-is="contact"] .contact_item_readmore:hover{ } contact .contact_item_readmore_arrow,[data-is="contact"] .contact_item_readmore_arrow{ width: 16px; height: 15px; } contact .contact_item_readmore_link,[data-is="contact"] .contact_item_readmore_link{ color: #001e50; text-decoration: none; } contact .contact_item_readmore_link:hover,[data-is="contact"] .contact_item_readmore_link:hover{ color: #0040c5; text-decoration: none; } contact .contact_item_readmore_link,[data-is="contact"] .contact_item_readmore_link{ margin-bottom: 20px; }', '', function(opts) {
        var self = this;
        self.bTest = false;
        self.lang_code = 'ru';
        self.object = {
            month: []
        };
        self.selectedMonth = "";
        self.contact = [];
        self.data = {
            year: []
        };
        self.translate = {
            "ru": {
                "published" : "Новость от"
				,"kontper" : "Горячая линия Volkswagen"
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

        this.on('before-mount', function() {

        });

        this.on('mount', function() {

        });

        this.on('update', function() {

        });

        this.on('unmount', function() {

        });

        this.clickYear = function(e) {
            this.selectYear(e.target);
            self.object = this.getYearObj(e.target.value);
            self.selectedMonth = '';
            this.update({object: this.object, selectedMonth: this.selectedMonth});
        }

        this.clickMonth = function(e) {

            this.selectMonth(e.target);
            self.selectedMonth =  e.target.value;
            this.update({selectedMonth: self.selectedMonth});

        }

        this.selectYear = function(target) {
            var get = self.root.querySelectorAll('.filter_line_year .filter_item');
            if (!isNull(get)) {
                get.forEach(function callback(currentValue, index, array) {
                    currentValue.classList.remove("selected");
                });
            }
            target.classList.add("selected");
        }

        this.selectMonth = function(target) {
            var get = self.root.querySelectorAll('.filter_line_month .filter_item');
            if (!isNull(get)) {
                get.forEach(function callback(currentValue, index, array) {
                    currentValue.classList.remove("selected");
                });
            }
            target.classList.add("selected");
        }

        this.selectYearFirst = function() {
            var get = self.root.querySelectorAll('.filter_line_year .filter_item');
            if (!isNull(get)) {
                this.selectYear(get[0]);
                self.object = this.getYearObj(get[0].value);
                this.update({object: this.object});
            }
        }

        this.getYearObj = function(value) {
            var result = {
                month: []
                ,contact: []
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
                        var contact = result.month[i].item[j];
                        contact.month = result.month[i].name;
                        result.contact.push(contact);
                    }
                }
            }
            return result;
        }

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
                });
            }
            return result;
        }

        this.setGlobal = function(scope, http, timeout, location, t) {
            var arr = [
                {    id: 1
                    ,title: "title"
                    ,month: "01"
                    ,year: 2000
                }
                ,{    id: 2
                    ,title: "title"
                    ,month: "02"
                    ,year: 2000
                }
                ,{  id: 3
                    ,title: "title"
                    ,month: "02"
                    ,year: 2000

                }
                ,{id: 4
                    ,title: "title"
                    ,month: "11"
                    ,year: 2001

                }
                ,{  id: 5
                    ,title: "title"
                    ,month: "12"
                    ,year: 2001

                }
                ,{  id: 6
                    ,title: "title"
                    ,month: "01"
                    ,year: 1998

                }
            ];
			console.log("tag7");
            self.lang_code = scope.a.lang.lang_code;
            self.update({lang_code: self.lang_code});
            if (self.bTest) {
                self.data.year = self.prepareData(arr);
                self.update({data: this.data});
                self.selectYearFirst();
            } else {
                http.post('b/ap/stream/ph&get_contact', { is_web : 'Y', lang_code: scope.a.lang.lang_code}).then(function(result) {
                    self.data.year = self.prepareData(result.data);
                    self.update({data: self.data});
                    self.selectYearFirst();
                });
            }

        }

        this.clickLink = function() {
            window.scrollTo(0, 0);
        }
});
riot.tag2('contact_single', '<div class="container"> <div class="contact_single_item"> <div class="contact_single_title"> <span class="contact_single_title_font">{object.title}</span> </div> <div class="contact_single_date"> <span class="contact_single_date_font">{object.date}</span> </div> <div class="contact_single_text"> <span class="contact_single_text_font" ref="text"></span> </div> </div> </div>', 'contact_single .contact_single_item,[data-is="contact_single"] .contact_single_item{ display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; -webkit-flex-direction: column; padding-top: 40px; padding-bottom: 40px; } contact_single .contact_single_title,[data-is="contact_single"] .contact_single_title{ margin-bottom: 50px; } contact_single .contact_single_title_font,[data-is="contact_single"] .contact_single_title_font{ font-size: 60px; font-family: var(--font-family-head); } contact_single .contact_single_date,[data-is="contact_single"] .contact_single_date{ margin-bottom: 20px; } contact_single .contact_single_date_font,[data-is="contact_single"] .contact_single_date_font{ font-size: 20px; font-family: var(--font-family-head); } contact_single .contact_single_text_font,[data-is="contact_single"] .contact_single_text_font{ font-size: 16px; font-family: var(--font-family-text); } @media only screen and (max-width: 767px) { contact_single .contact_single_title,[data-is="contact_single"] .contact_single_title{ margin-bottom: 40px; } contact_single .contact_single_title_font,[data-is="contact_single"] .contact_single_title_font{ font-size: 32px; } contact_single .contact_single_date_font,[data-is="contact_single"] .contact_single_date_font{ font-size: 16px; } }', '', function(opts) {
        var self = this;
        self.object = {};

        this.on('before-mount', function() {

        });

        this.on('mount', function() {

        });

        this.on('update', function() {

        });

        this.on('unmount', function() {

        });

        this.setGlobal = function(scope, http, timeout, location, t) {
            self.bTest = false;
            var obj = {
                id: 1
                ,title: "title"
                ,text: "text"
                ,month: 1
                ,year: 2000
                ,date: "10.12.2000"
            }

            if (self.bTest) {
                self.object = obj;
                self.update({object: this.object});
                self.refs.text.innerHTML = self.object.text;
            } else {
                var idcontact = (location.$$path.replace("/contact/",""));
                http.post('b/ap/stream/ph&get_contact_by_id', { is_web : 'Y', lang_code: scope.a.lang.lang_code, contact_id: idcontact}).then(function(result) {
                    self.object = result.data;
                    self.update({object: self.object});
                    self.refs.text.innerHTML = self.object.text;
                });
            }

        }

        this.clickLink = function() {
            window.scrollTo(0, 0);
        }
});