<contact_single>
    <div class="container">
        <div class="contact_single_item">
            <div class="contact_single_title">
                <span class="contact_single_title_font">{object.title}</span>
            </div>
            <div class="contact_single_date">
                <span class="contact_single_date_font">{object.date}</span>
            </div>
            <div class="contact_single_text">
                <span class="contact_single_text_font" ref="text"></span>
            </div>
        </div>
    </div>
    <style>
        .contact_single_item {
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
        .contact_single_title{
            margin-bottom: 50px;
        }
        .contact_single_title_font{
            font-size: 60px;
            font-family: var(--font-family-head);
        }
        .contact_single_date{
            margin-bottom: 20px;
        }
        .contact_single_date_font{
            font-size: 20px;
            font-family: var(--font-family-head);
        }
        .contact_single_text_font{
            font-size: 16px;
            font-family: var(--font-family-text);
        }

        @media only screen and (max-width: 767px) {
            .contact_single_title{
                margin-bottom: 40px;
            }
            .contact_single_title_font{
                font-size: 32px;
            }
            .contact_single_date_font{
                font-size: 16px;
            }
        }
    </style>
    <script>
        var self = this;
        self.object = {};
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
            self.bTest = false;
            var obj = {
                id: 1
                ,title: "title"
                ,text: "<a>text</a>"
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

            /*
             if (!isNull(t('contact_published'))) {
             self.translate["contact_published"] = t('contact_published');
             }
             if (!isNull(t('contact_read_more'))) {
             self.translate["contact_read_more"] = t('contact_read_more');
             }
             self.update({translate: this.translate});
             */


            /* http.post('b/ap/stream/ph&get_contact', { is_web : 'Y', lang_code: scope.a.lang.lang_code}).then(function(result) {
             console.log(result);
             });*/
            /*if (!isNull(t('contact_published'))) {
             self.translate["contact_published"] = t('contact_published');
             }
             if (!isNull(t('contact_read_more'))) {
             self.translate["contact_read_more"] = t('contact_read_more');
             }
             self.update({translate: this.translate});
             */
            //self.translate = t;
            //self.update({translate: this.translate});
            //console.log(t('arrived'));
            //console.log(self.translate('arrived'));
            //console.log(t['arrived']);

            /* console.log(scope);
             console.log(http);
             console.log(timeout);
             console.log(location);
             console.log(t);*/


            // scrollTo(0,0)
        }
        //--------------------------------------------------------------
        this.clickLink = function() {
            window.scrollTo(0, 0);
        }
    </script>
</contact_single>