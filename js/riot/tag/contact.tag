<contact>
    <svg width="0" height="0" display="none">
        <symbol id="arrow_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 15 15">
            <path d="M13 6.121v2H0v-2h13z" fill="#001E50"/>
            <path d="M13.95 5.657l1.414 1.414-7.071 7.071-1.414-1.414 7.07-7.071z" fill="#001E50"/>
            <path d="M15.364 7.071L13.95 8.485l-7.071-7.07L8.293 0l7.071 7.071z" fill="#001E50"/>
        </symbol>
    </svg>
    <div class="container">
        <div class="contact_container">
            <div class="contact_item" ref="content">
				
            </div>
        </div>
    </div>
    <style>
        contact {

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
        .contact_container {
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
        .contact_item {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            -webkit-flex-direction: column;

            padding-top: 40px;
            padding-bottom: 40px;
        }
        .contact_item_text {
            font-weight: 700;
            font-size: 20px;
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
        self.contact = [];
        self.data = [];
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
        this.setGlobal = function(scope, http, timeout, location, t) {
			self.lang_code = scope.a.lang.lang_code;
            self.update({lang_code: self.lang_code});
			http.post('b/ap/stream/ph&get_contact', {lang_code: scope.a.lang.lang_code}).then(function(result) {
				self.data = result.data;
				self.update({data: self.data});
				for(var i = 0; i < self.data.length; i++) {
					var contact = self.data[i];
					var contactElement = document.createElement('span');
					contactElement.classList.add("contact_item_text");
					contactElement.innerHTML = contact.text;
					self.refs.content.appendChild(contactElement);
				}
			});
			
			//var idcontact = (location.$$path.replace("/contact/",""));
			
        }
        //--------------------------------------------------------------
        this.clickLink = function() {
            window.scrollTo(0, 0);
        }
    </script>
</contact>