(function (app) {
  app.controller('uzavtoCtrl', function ($rootScope, $scope, $location, $http, $q, routes, t) {
    var a = {
      isChecked: false,
      user: {
        ready: false
      },
      tt: false,
      translate: {},
      langs: [],
      lang: {},


      ctrlReady: false,
      headerTransparent: false,

      enterByOneId: enterByOneId,
      logout: logout
    };

    // $scope.$watch('a.isChecked', function (newVal) {
     
    // });
    var defer = $q.defer(),
      promise = defer.promise;

    var scrollControl = _.throttle(function (ev) {
      if (a.headerTransparent) {
        if ($(ev.target).scrollTop() > 100) {
          a.headerTransparent = false;
          $scope.$digest();
        }
      } else if ($(ev.target).scrollTop() <= 50) {
        a.headerTransparent = true;
        $scope.$digest();
      }
    }, 100);

    $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
      $(document).scrollTop(0);
      promise.then(() => {
        $rootScope.title = ' - ' + t(toState.name + ' page');
      });
      if (toState.name == 'main') {
        a.headerTransparent = true;
        $(document).on('scroll', scrollControl);
      } else {
        a.headerTransparent = false;
        $(document).off('scroll', scrollControl);
      }
    });

    function getCookie(key) {
      try {
        return document.cookie.split(';')
          .filter(x => x.trim().split('=')[0] === key)
          .pop().trim().split('=').pop();
      } catch (ex) {
        return null;
      }
    }
    function makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
    function setLang(lang) {
      if (a.lang.lang_code != lang.lang_code) {
        a.lang = lang;
        document.cookie = 'lang=' + lang.lang_code;
        window.location.reload(true);
      }
    }

    function setInitParams() {
      langs().finally(userInfo);
    }

    function langs() {
      const langg = [{ "key": "help", "en": "Help", "ru": "Помощь", "uz": "Yordam" },{ "key": "send_code", "en": "Отправить проверочный код", "ru": "Отправить проверочный код", "uz": "Tasdiqlash kodini yuboring" },{ "key": "update_code", "en": "Обновить код", "ru": "Обновить код", "uz": "Kodni yangilash" },{ "key": "entercode", "en": "Введите проверочный код", "ru": "Введите проверочный код", "uz": "Tasdiqlash kodini kiriting" },{ "key": "personal", "en": "Я согласен с передачей моих персональных данных", "ru": "Я согласен с передачей моих персональных данных", "uz": "Men shaxsiy ma'lumotlarimni uzatishga roziman" }, { "key": "producing expect date", "en": "Expected production date", "ru": "Ожидаемая дата производства", "uz": "Kutilayotgan ishlab chiqarish sanasi" }, { "key": "som", "en": "som", "ru": "сум", "uz": "Sum" }, { "key": "3% prepayment is not refundable, if purchase is canceled or time is expired", "en": "The advance payment made in the amount of 3% of the order value is not refundable, subject to the refusal to purchase, or the absence of further payments within the terms specified in the contract.", "ru": "Внесенный авансовый платеж в размере 3% от стоимости заказа не возвращается, при условии отказа от приобретения, либо отсутствия дальнейших выплат в сроки, указанные в договоре.", "uz": "Buyurtma qiymatining 3% miqdorida to`langan avans to`lovi, sotib olishdan bosh tortish yoki shartnomada ko`rsatilgan muddatlarda keyingi to`lovlar bo`lmasa, qaytarib berilmaydi." }, { "key": "attention", "en": "Attention", "ru": "Внимание", "uz": "Diqqat" }, { "key": "included options", "en": "Included Options", "ru": "Включенные опции", "uz": "Kiritilgan variantlar" }, { "key": "vin", "en": "Win code", "ru": "VIN", "uz": "VIN" }, { "key": "description", "en": "Description", "ru": "Описание", "uz": "Tavsif" }, { "key": "select the model you want to purchase", "en": "Select the model you want to purchase", "ru": "Выберите желаемую к приобретению модель", "uz": "Xarid qilishni istagan modelingizni tanlang" }, { "key": "the form is not available. authorization required...", "en": "The form is not available. Authorization required", "ru": "Форма недоступна. Требуется авторизация...", "uz": "Mavjud emas Avtorizatsiya talab qilinadi. " }, { "key": "the signature is supplied but not found!", "en": "Contract signed but signature file not found", "ru": "Контракт подписан, но файл подписи не найден!", "uz": "Shartnoma imzolandi, lekin imzo fayli topilmadi" }, { "key": "models range", "en": "The lineup", "ru": "Модельный ряд", "uz": "Modellar" }, { "key": "from", "en": "To", "ru": "От", "uz": "so'mdan" }, { "key": "ordering", "en": "Checkout", "ru": "Оформление заказа", "uz": "Buyurtma berish" }, { "key": "extended data", "en": "Extended data", "ru": "Расширенные данные", "uz": "Kengaytirilgan maʼlumotlar" }, { "key": "price", "en": "Price", "ru": "Цена", "uz": "Narx" }, { "key": "people in queue", "en": "Number of people in line", "ru": "Количество людей в очереди", "uz": "Navbatdagi odamlar soni" }, { "key": "not defined", "en": "Not determined", "ru": "Не определен", "uz": "Aniqlanmagan" }, { "key": "stock in dealer", "en": "Dealer's stock", "ru": "В наличии у дилера", "uz": "Dilerdagi qoldiq" }, { "key": "select dealer first...", "en": "", "ru": "Выберите сначала дилера...", "uz": "Oldin dilerni tanlang..." }, { "key": "select car", "en": "Select a car", "ru": "Выберите машину", "uz": "Avtomobil tanlang" }, { "key": "model", "en": "Choose a dealer first", "ru": "Модель", "uz": "Model" }, { "key": "address2", "en": "Андижанская область, г.Асака, ул. Хумо, дом 81", "ru": "Андижанская область, г.Асака, ул. Хумо, дом 81", "uz": "Andijon viloyati, Asaka sh. Humo, 81-uy" }, { "key": "modification", "en": "Modification", "ru": "Модификация", "uz": "Modifikatsiya" }, { "key": "archived", "en": "Archived", "ru": "Архивированный", "uz": "Arxivlangan" }, { "key": "arrived", "en": "Arrived", "ru": "Полученный", "uz": "Qabul qildi" }, { "key": "attention!!! install the new version of the e-imzo application or the e-imzo browser. https://e-imzo.uz/main/downloads/ download e-imzo software", "en": "Attention!!! Install the new version of the E-IMZO application or E-IMZO Browser https://e-imzo.uz/main/downloads/\r Download E-IMZO software. ", "ru": "Внимание!!! Установите новую версию приложения E-IMZO или E-IMZO Browser. https://e-imzo.uz/main/downloads/\rСкачать программное обеспечение E-IMZO.", "uz": "Diqqat!!! E-IMZO ilovasining yangi versiyasini yoki E-IMZO brauzerini o'rnating https://e-imzo.uz/main/downloads/\r E-IMZO dasturini yuklab oling." }, { "key": "binding", "en": "On distribution", "ru": "На распределении", "uz": "Tarqatish jarayonida" }, { "key": "cancelled", "en": "Cancelled", "ru": "Отмененный", "uz": "Bekor qilingan" }, { "key": "change feedback", "en": "Edit review", "ru": "Изменить отзыв", "uz": "Sharhni tahrirlash" }, { "key": "completed", "en": "Ready", "ru": "Готово", "uz": "Tayyor" }, { "key": "delete order?", "en": "Cancel the order?", "ru": "Отменить заказ?", "uz": "Buyurtmani bekor qilish?" }, { "key": "draft", "en": "Sample", "ru": "Образец", "uz": "Namuna" }, { "key": "enter payment amount", "en": "Enter the payment amount", "ru": "Введите сумму платежа", "uz": "To'lov miqdorini kiriting" }, { "key": "error connecting to e-imzo. perhaps you do not have the e-imzo or the e-imzo browser installed", "en": "Error connecting to E-IMZO. You may not have E-IMZO or E-IMZO Browser", "ru": "Ошибка подключения к E-IMZO. Возможно, у вас нет E-IMZO или E-IMZO Browser", "uz": "E-IMZO ga ulanishda xatolik yuz berdi. Sizda E-IMZO yoki E-IMZO brauzeri bo'lmasligi mumkin" }, { "key": "feedback", "en": "Review", "ru": "Отзыв", "uz": "Ko‘rib chiqish" }, { "key": "forward to pay", "en": "Forward to payment", "ru": "Перейти к оплате", "uz": "To'lovga jo`natish" }, { "key": "fuel consumption is indicated for reference for comparison. in reality this value depends on the driving style and external operating conditions.", "en": "Fuel consumption is shown for comparison. In fact, this value depends on the driving style and external conditions of use.", "ru": "Расход топлива указан для сравнения. В действительности это значение зависит от стиля вождения и внешних условий эксплуатации.", "uz": "Taqqoslash uchun yoqilg`i sarfi ko`rsatilgan. Aslida, bu qiymat haydash uslubiga va foydalanishning tashqi shartlariga bog'liq." }, { "key": "in stock", "en": "In stock", "ru": "В наличии", "uz": "Sotuvda mavjud" }, { "key": "generate contract", "en": "Generate contract", "ru": "Сгенерировать контракт", "uz": "Shartnoma tuzish" }, { "key": "it takes time for payment to be confirmed. please wait a while. (do not pay again)", "en": "It takes some time for payment to be confirmed. Please wait a while. (Do not pay again)", "ru": "Требуется время для подтверждения оплаты. Пожалуйста, подождите некоторое время. (не производите оплату снова)", "uz": "To`lovni tasdiqlash uchun vaqt kerak. Iltimos, biroz kuting. (yana to'lamang)" }, { "key": "key expired", "en": "Key has expired", "ru": "Срок действия ключа истек", "uz": "Kalit muddati tugadi" }, { "key": "new", "en": "New", "ru": "Новый", "uz": "Yangi    " }, { "key": "pay", "en": "Key has expired", "ru": "Срок действия ключа истек,", "uz": "Kalit muddati tugadi" }, { "key": "planned", "en": "Planned", "ru": "Запланированный", "uz": "Rejalashtirilgan" }, { "key": "post feedback", "en": "Review", "ru": "Отправить отзыв", "uz": "Fikringizni qoldiring" }, { "key": "queued", "en": "You are in line", "ru": "Вы в очереди", "uz": "Siz jarayondasiz" }, { "key": "rate order", "en": "Calculate order cost", "ru": "Посчитать стоимость заказа", "uz": "Buyurtma narxini hisoblang" }, { "key": "reserved", "en": "Booked", "ru": "Забронирован", "uz": "Band qilingan" }, { "key": "select dealer...", "en": "Select a dealer...", "ru": "Выберите дилера...", "uz": "Dilerni tanlang..." }, { "key": "select model first...", "en": "Please select a model first...", "ru": "Сначала выберите модель...", "uz": "Iltimos, avval modelni tanlang..." }, { "key": "select model...", "en": "Select model...", "ru": "Выберите модель...", "uz": "Modelni tanlang..." }, { "key": "select modification...", "en": "Select modification...", "ru": "Выберите модификацию...", "uz": "O'zgartirishni tanlang..." }, { "key": "select region first...", "en": "Select district/region", "ru": "Выберите район/область", "uz": "Tuman/mintaqani tanlang" }, { "key": "select region...", "en": "Choose region.", "ru": "Выберите регион..", "uz": "Mintaqani tanlang" }, { "key": "send", "en": "Send", "ru": "Отправить", "uz": "Yuborish" }, { "key": "the browser does not support websocket technology. install the latest version of the browser", "en": "The browser does not support WebSocket technology. Install the latest browser version", "ru": "Браузер не поддерживает технологию WebSocket. Установите последнюю версию браузера", "uz": "Brauzer WebSocket texnologiyasini qo'llab-quvvatlamaydi. Brauzerning so'nggi versiyasini o'rnating" }, { "key": "the queue does not depend on the dealer", "en": "The queue does not depend on the dealer", "ru": "Очередь не зависит от дилера", "uz": "Navbat sotuvchiga bog'liq emas" }, { "key": "waiting", "en": "Pending", "ru": "В ожидании", "uz": "Kutish jarayonida" }, { "key": "wrong password", "en": "Wrong password", "ru": "Неправильный пароль", "uz": "Noto'g'ri parol" }, { "key": "production of the selected modification is suspended. you can buy it only from stock.", "en": "", "ru": "Производство выбранной модификации автомобиля приостановлено. Вы можете приобрести данный автомобиль только на складе.", "uz": "Tanlangan modifikatsiya bo'yicha ishlab chiqarish to'xtatilgan. Faqat dilerlardagi qoldiqdan sotib olishingiz mumkin." }, { "key": "to check all stocks go to", "en": "To check all balances, go to", "ru": "Чтобы проверить все остатки, перейдите на", "uz": "Qoldiqlarni ko'rish" }, { "key": "сharacteristics", "en": "Characteristics", "ru": "Характеристики", "uz": "Xususiyatlari" }, { "key": "stocks for all dealers", "en": "Available at all dealers", "ru": "В наличии у всех дилеров", "uz": "Barcha dilerlardagi qoldiq" }, { "key": "modifications", "en": "Modifications", "ru": "Модификации", "uz": "Turlari" }, { "key": "queue data", "en": "Queue Information", "ru": "Информация о очереди", "uz": "Navbat haqida ma'lumotlar" }, { "key": "queue count", "en": "Number of people in line", "ru": "Количество людей в очереди", "uz": "Navbatdagi odamlar soni" }, { "key": "expect producing date", "en": "Expected production date", "ru": "Ожидаемая дата производства", "uz": "Kutilayotgan ishlab chiqarish sanasi" }, { "key": "dealers", "en": "Dealers", "ru": "Дилеры", "uz": "Dilerlar" }, { "key": "region", "en": "", "ru": "Регион", "uz": "Hudud" }, { "key": "dealer", "en": "Region", "ru": "Дилер", "uz": "Diler" }, { "key": "dealer name", "en": "Dealer name", "ru": "Наименование дилера", "uz": "Diler nomi" }, { "key": "stock quant", "en": "Quantity in stock", "ru": "Количество в остатке", "uz": "Qoldiqlar soni" }, { "key": "fill in required fields...", "en": "Fill in the required fields...", "ru": "Заполните обязательные поля...", "uz": "Majburiy maydonlarni to'ldiring..." }, { "key": "cabinet", "en": "Cabinet", "ru": "Профиль", "uz": "Profil" }, { "key": "contacts", "en": "Contacts", "ru": "Контакты", "uz": "Kontaktlar" }, { "key": "ordering requires authorization...", "en": "Order requires authorization", "ru": "Заказ требует авторизации", "uz": "Buyurtma avtorizasiya talab qiladi..." }, { "key": "login", "en": "Log in", "ru": "Войти", "uz": "Kirish" }, { "key": "personal data", "en": "Personal data", "ru": "Личные данные", "uz": "Shaxsiy malumotlar" }, { "key": "organization name", "en": "Name of company", "ru": "Наименование организации", "uz": "Tashkilot nomi" }, { "key": "name", "en": "Name", "ru": "Имя", "uz": "Ism" }, { "key": "inn", "en": "TIN", "ru": "ИНН", "uz": "STIR" }, { "key": "phone number", "en": "Phone number", "ru": "Номер телефона", "uz": "Telefon raqami" }, { "key": "email", "en": "Email", "ru": "Электронная почта", "uz": "Elektron pochta" }, { "key": "i have read and agree to the terms of use", "en": "I have read and agree to the terms of the user agreement", "ru": "Я прочитал и согласен с условиями пользовательского соглашения", "uz": "Men kelishuv shartlarini o'qidim va qabul qildim" }, { "key": "submit", "en": "Send", "ru": "Отправить", "uz": "Jo'natish" }, { "key": "passport file bind required", "en": "Passport file must be attached", "ru": "Необходимо прикрепить файл паспорта", "uz": "Pasport fayli ilova qilinishi kerak" }, { "key": "passport file binded", "en": "Passport file attached", "ru": "Файл паспорта прикреплен", "uz": "Pasport fayli ilova qilingan" }, { "key": "file bind required", "en": "Need to attach a file", "ru": "Необходимо прикрепить файл", "uz": "Fayl biriktirish kerak" }, { "key": "file binded", "en": "File is attached", "ru": "Файл прикреплен", "uz": "Fayl biriktirilgan" }, { "key": "orders", "en": "Orders", "ru": "Заказы", "uz": "Buyurtmalar" }, { "key": "code", "en": "Code", "ru": "Код", "uz": "Kod" }, { "key": "date", "en": "Date", "ru": "Дата", "uz": "Vaqt" }, { "key": "state", "en": "Status", "ru": "Статус", "uz": "Holat" }, { "key": "contract", "en": "Treaty", "ru": "Договор", "uz": "Shartnoma" }, { "key": "not set", "en": "Not installed", "ru": "Не установлен", "uz": "belgilanmagan" }, { "key": "color", "en": "Color", "ru": "Цвет", "uz": "Rang" }, { "key": "paid", "en": "Paid", "ru": "Оплачено", "uz": "To'langan" }, { "key": "remain", "en": "Left", "ru": "Осталось", "uz": "Qoldiq" }, { "key": "queue no", "en": "Queue number", "ru": "Номер очереди", "uz": "Navbat raqami" }, { "key": "ready", "en": "Ready", "ru": "Готово", "uz": "Tayyor" }, { "key": "undefined", "en": "Not determined", "ru": "Не определен", "uz": "Aniqlanmagan" }, { "key": "receive contract", "en": "Get a contract", "ru": "Получить договор", "uz": "Shartnomani qabul qilish" }, { "key": "delete order", "en": "Delete order", "ru": "Удалить заказ", "uz": "Buyurtmani o'chirish" }, { "key": "cancel order", "en": "Cancel the order", "ru": "Отменить заказ", "uz": "Buyurtmani bekor qilish" }, { "key": "you don't have any orders", "en": "You don't have any order", "ru": "У Вас нет ни одного заказа", "uz": "sizda buyurtma mavjud emas" }, { "key": "code from sms", "en": "SMS code", "ru": "СМС-код", "uz": "SMS orqali jo'natilgan kod" }, { "key": "send code", "en": "Submit code", "ru": "Отправить код", "uz": "Kodni jo'natish" }, { "key": "resend code", "en": "Send code again", "ru": "Отправить код заново", "uz": "Takroran jo'natish" }, { "key": "note", "en": "Note", "ru": "Примечание", "uz": "Izoh" }, { "key": "ok", "en": "Ok", "ru": "ОК", "uz": "OK" }, { "key": "cancel", "en": "Cancel", "ru": "Отмена", "uz": "Bekor qilish" }, { "key": "contract file", "en": "Agreement file", "ru": "Файл договора", "uz": "Shartnoma fayli" }, { "key": "client sign", "en": "Client signature", "ru": "Подпись клиента", "uz": "Mijoz imzosi" }, { "key": "signer name", "en": "Applicant's name", "ru": "Имя заявителя", "uz": "Mijozning ismi" }, { "key": "signing time", "en": "Signature date", "ru": "Дата подписи", "uz": "Imzo sanasi" }, { "key": "organization location", "en": "Organization Location", "ru": "Местоположение организации", "uz": "Tashkilot joylashuvi" }, { "key": "organization email", "en": "Organization Email", "ru": "Электронная почта организации", "uz": "Tashkilot elektron pochtasi" }, { "key": "the signature does not belong to this document!", "en": "The signature does not match this document!", "ru": "Подпись не соответствует данному документу!", "uz": "Imzo bu xujjatga tegishli emas!" }, { "key": "choose key", "en": "Choose the key", "ru": "Выберите ключ", "uz": "Kalitni tanlang" }, { "key": "sign", "en": "Sign", "ru": "Подписать", "uz": "Imzo qo'yish" }, { "key": "dealer sign", "en": "Dealer's signature", "ru": "Подпись дилера", "uz": "Diler imzosi" }, { "key": "no dealer sign", "en": "No dealer signature", "ru": "Нет подписи дилера", "uz": "Dilerning imzosi mavjud emas" }, { "key": "logout", "en": "Log out", "ru": "Выйти", "uz": "Chiqish" }, { "key": "expect date", "en": "Expected date", "ru": "Ожидаемая дата", "uz": "Kutilayotgan ishlab chiqarish sanasi" }, { "key": "approve contract", "en": "Confirm the order ", "ru": "Подтвердить заказ", "uz": "Shartnomani imzolash" }, { "key": "cancelling order", "en": "Order cancellation", "ru": "Отмена заказа", "uz": "Buyurtmani bekor qilish" }, { "key": "the code becomes irrelevant through", "en": "The code will be invalidated through", "ru": "Код будет считаться недействительным через", "uz": "Kod yaroqsiz holatga o'tadi" }, { "key": "acc to 100 kmh", "en": "up to 100 km/h", "ru": "до 100 км/ч", "uz": "100 km/soatgacha" }, { "key": "account page", "en": "Profile", "ru": "Профиль", "uz": "Profil" }, { "key": "address", "en": "Address", "ru": "Адрес", "uz": "Manzil" }, { "key": "all characteristics", "en": "All characteristics", "ru": "Все характеристики", "uz": "Barcha xususiyatlar" }, { "key": "authorization is required to proceed to confirm the order.", "en": "Authorization is required to confirm an order. Please log in.", "ru": "Для подтверждения заказа необходима авторизация. Пожалуйста, авторизуйтесь.", "uz": "Buyurtmani tasdiqlash uchun avtorizatsiya talab qilinadi. Iltimos, tizimga kiring" }, { "key": "automobile", "en": "Automobile", "ru": "Автомобиль", "uz": "Avtomobil" }, { "key": "availability information", "en": "Availability Information", "ru": "Информация о наличии", "uz": "Mavjud avtomobil" }, { "key": "buy", "en": "Buy", "ru": "КУПИТЬ", "uz": "Sotib olish" }, { "key": "buy online", "en": "Order online", "ru": "ЗАКАЗАТЬ ОНЛАЙН", "uz": "Onlayn buyurtma berish" }, { "key": "car page", "en": "Model Page", "ru": "Страница модели", "uz": "Model sahifasi" }, { "key": "characteristics", "en": "Characteristics", "ru": "ХАРАКТЕРИСТИКИ", "uz": "Xususiyatlari" }, { "key": "color:", "en": "Color", "ru": "Цвет:", "uz": "Rang" }, { "key": "compare modifications", "en": "Compare modifications", "ru": "Сравнить модификации", "uz": "O'zgartirishlarni solishtiring" }, { "key": "contract number:", "en": "Contract number", "ru": "Номер контракта:", "uz": "Shartnoma raqami" }, { "key": "dealer:", "en": "Dealer", "ru": "Дилер:", "uz": "Diller" }, { "key": "dealer list", "en": "List of dealers", "ru": "Список дилеров", "uz": "Dilerlar ro'yxati" }, { "key": "dealer page", "en": "Dealer profile", "ru": "Профиль дилера", "uz": "Diler profili" }, { "key": "dealerlist page", "en": "Dealers", "ru": "Дилеры", "uz": "Dilerlar" }, { "key": "details", "en": "More", "ru": "Подробнее", "uz": "Ko'proq" }, { "key": "didnt found necessary modification? check for other regions.", "en": "Out of stock for the modification you need? Look in other regions.", "ru": "Нет в наличии нужной модификации? Посмотрите в других регионах.", "uz": "Sizga kerak bo'lgan o'zgartirish uchun zaxirada yo'qmi? Boshqa hududlarga qarang." }, { "key": "do you want to cancel this order?", "en": "Your order will be cancelled. This action is irreversible.", "ru": "Ваш заказ будет отменен. Это действие необратимо.", "uz": "Buyurtmangiz bekor qilinadi. Bu harakatni qaytarib bo'lmaydi." }, { "key": "do you want to sign out?", "en": "Are you sure you want to go out?", "ru": "Вы точно хотите выйти?", "uz": "Haqiqatan ham tashqariga chiqmoqchimisiz?" }, { "key": "do you want to submit?", "en": "Do you want to confirm the order", "ru": "Вы хотите подтвердить заказ?", "uz": "Buyurtmani tasdiqlamoqchimisiz" }, { "key": "download contract", "en": "Download contract", "ru": "Скачать договор", "uz": "Shartnomani yuklab olish " }, { "key": "expect supply date", "en": "Expected delivery date", "ru": "Ожидаемая дата поставки", "uz": "Kutilayotgan yetkazib berish sanasi" }, { "key": "expected date:", "en": "Expected date:", "ru": "Ожидаемая дата:", "uz": "Kutilayotgan sana:" }, { "key": "extended page", "en": "Auto in stock", "ru": "Авто в наличии", "uz": "Mavjud avtomobil" }, { "key": "exterior", "en": "Exterior", "ru": "ЭКСТЕРЬЕР", "uz": "Tashqi" }, { "key": "fio", "en": "Full name", "ru": "ФИО", "uz": "FIO" }, { "key": "fuel consumption", "en": "Fuel consumption", "ru": "расход топлива", "uz": "Yonilg'i iste'moli" }, { "key": "horsepower", "en": "Max. power", "ru": "макс. мощность", "uz": "Maks. kuch" }, { "key": "how to buy?", "en": "How to buy", "ru": "Как купить?", "uz": "Qanday qilib sotib olish mumkin" }, { "key": "interior", "en": "Interior", "ru": "ИНТЕРЬЕР", "uz": "Ichki" }, { "key": "main page", "en": "Main page", "ru": "Главная страница", "uz": "Bosh sahifa" }, { "key": "messages", "en": "Notifications", "ru": "Уведомления", "uz": "Bildirishnomalar" }, { "key": "model:", "en": "Model", "ru": "Модель:", "uz": "Model" }, { "key": "models", "en": "The lineup", "ru": "Модельный ряд", "uz": "Avtomobillar" }, { "key": "modification:", "en": "Modification", "ru": "Модификация:", "uz": "Modifikatsiya" }, { "key": "order code:", "en": "Order number", "ru": "Номер заказа:", "uz": "Buyurtma raqami" }, { "key": "order date:", "en": "Order date:", "ru": "Дата заказа:", "uz": "Buyurtma sanasi:" }, { "key": "paid:", "en": "Paid:", "ru": "Оплачено:", "uz": "Toʻlangan:" }, { "key": "passport serial", "en": "Series and passport number", "ru": "Серия и номер паспорта", "uz": "Seriya va pasport raqami" }, { "key": "passport serial and number", "en": "Series and passport number", "ru": "Серия и номер паспорта", "uz": "Seriya va pasport raqami" }, { "key": "payment amount", "en": "Price", "ru": "Стоимость", "uz": "Narxi" }, { "key": "pcs.", "en": "Pcs", "ru": "шт.", "uz": "Dona" }, { "key": "pin", "en": "PINFL", "ru": "ПИНФЛ", "uz": "PINFL" }, { "key": "price:", "en": "Price", "ru": "Стоимость:", "uz": "Narxi" }, { "key": "priority order", "en": "Priority Order", "ru": "Приоритетный заказ", "uz": "Ustuvorlik tartibi" }, { "key": "profile", "en": "Profile", "ru": "Профиль", "uz": "Profil" }, { "key": "queue", "en": "Queue", "ru": "Очередь", "uz": "Navbat" }, { "key": "queue number:", "en": "Queue number", "ru": "Номер очереди:", "uz": "Navbat raqami" }, { "key": "search...", "en": "Search", "ru": "Поиск...", "uz": "Qidirmoq" }, { "key": "select", "en": "Select", "ru": "ВЫБРАТЬ", "uz": "Tanlang" }, { "key": "selectdealer page", "en": "Dealer selection", "ru": "Выбор дилера", "uz": "Dillerni tanlash" }, { "key": "status", "en": "Order status", "ru": "Статус заказа", "uz": "Buyurtma holati" }, { "key": "stock", "en": "In stock", "ru": "В наличии:", "uz": "Sotuvda mavjud" }, { "key": "supply", "en": "Supply", "ru": "Поставка", "uz": "Ta'minot" }, { "key": "test-drive", "en": "Test-drive", "ru": "ТЕСТ-ДРАЙВ", "uz": "Sinov haydovchisi" }, { "key": "tin", "en": "TIN", "ru": "ИНН", "uz": "INN" }, { "key": "transmission", "en": "Transmission", "ru": "трансмиссия", "uz": "Uzatmalar quttisi" }, { "key": "unable to retrieve data. try reloading the page and reauthenticating", "en": "No data. Please refresh the page and re-authorize", "ru": "Нет данных. Пожалуйста обновите страницу и переавторизуйтесь.", "uz": "Maʼlumot yoʻq. Iltimos, sahifani yangilang va qayta avtorizatsiya qiling" }, { "key": "vin:", "en": "VIN number", "ru": "VIN номер:", "uz": "VIN raqam" }, { "key": "you dont have any orders", "en": "You don't have any active orders yet", "ru": "У Вас пока нет активных заказов", "uz": "Sizda hali hech qanday faol buyurtma yo‘q" }, { "key": "supply date", "en": "Delivery time", "ru": "Срок поставки", "uz": "Yetkazib berish vaqti" }, { "key": "payment", "en": "Payment", "ru": "Оплата", "uz": "To'lov" }, { "key": "place order", "en": "CHECKOUT", "ru": "ОФОРМИТЬ ЗАКАЗ", "uz": "Buyurtmani raymilashtirish" }, { "key": "remain:", "en": "Remain", "ru": "Осталось:", "uz": "Qoldiq" }, { "key": "select dealer", "en": "Choes your dealer", "ru": "ВЫБЕРИТЕ ДИЛЕРА", "uz": "Dillerni tanlang" }, { "key": "the form is not available. authorization is required...", "en": "The page is not available. Please login again", "ru": "Страница недоступна. Пожалуйста авторизуйтесь заново.", "uz": "Sahifa mavjud emas. Iltimos, qayta kiring" }, { "key": "order page", "en": "Checkout", "ru": "Оформление заказа", "uz": "Buyurtmani rasmiylashtirish" }]
      return new Promise((res, rej) => res()).then(function (result) {
        a.langs = [

          {
            "lang_code": "uz",
            "name": "O'zbek tili",
            "short_name": "UZ"
          },
          {
            "lang_code": "ru",
            "name": "Русский язык",
            "short_name": "RU"
          }
        ];
        a.lang = _.findWhere(a.langs, { lang_code: getCookie('lang') }) || _.first(a.langs);
        $http.defaults.headers.post.lang_code = a.lang.lang_code;
        //return $http.get(routes.translates).then(function(result) {
        a.translate = {};
        _.each(langg, function (tr) {
          a.translate[tr.key] = tr[a.lang.lang_code];
        });

        document.cookie = 'lang=' + a.lang.lang_code;
        $http.defaults.headers.post.lang_code = a.lang.lang_code;
        defer.resolve();
        //});
      });
    }

    function userInfo() {
      if (!localStorage.getItem("rtoken")) {
        localStorage.setItem("rtoken", makeid(32))
      }
      $http.defaults.headers.post.rcode = localStorage.getItem("rtoken")
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      if (params.key) {
        $http.post(routes.proxy_token, {
          token: params.key
        }).then((ee) => {
          localStorage.setItem("token", ee.data)
          $http.post(routes.user_info, {}, {
            headers: {
              "oauth2_token": ee.data
            }
          }).then(function (result) {
            window.location.href = "https://savdo.uzavtosanoat.uz/";
            a.user = result.data;
          }, function (result) {
            console.error(result);
          }).finally(function () {
            window.location.href = "https://savdo.uzavtosanoat.uz/";
            a.ctrlReady = true;
            a.user.ready = true;
          });
        }, function (result) {
          window.location.href = "https://savdo.uzavtosanoat.uz/";
          a.ctrlReady = true;
        });
        return
      }
      //$http.defaults.headers.get.token = localStorage.getItem("rtoken")
      $http.post(routes.user_info, {

      }, {
        headers: {
          oauth2_token: localStorage.getItem("token"),
        }
      }).then(function (result) {
        a.user = result.data;
      }, function (result) {
        console.error(result);
      }).finally(function () {
        a.ctrlReady = true;
        a.user.ready = true;
      });
    }

    function getToken(second) {

      $http.post(routes.proxy_token, {
        token: a.urlOauth2OneId.secret_key
      }).then((ee) => {
        localStorage.setItem("token", ee.data)
        $http.post(routes.user_info, {}, {
          headers: {
            "oauth2_token": ee.data
          }
        }).then(function (result) {
          a.user = result.data;
        }, function (result) {
          console.error(result);
        }).finally(function () {
          a.ctrlReady = true;
          a.user.ready = true;
        });
      }, function (result) {
        console.error(result);
        !second && openOneid(true);
      });


    }

    function openOneid(second) {
      var width = 800, height = 600;
      setTimeout(() => {
        var tokenWindow = window.open(a.urlOauth2OneId.url, 'token_window', 'status=no,scrollbars=yes,resizable=yes,width=' + width + ',height=' + height + ',top=' + Math.floor((screen.height - height) / 2 - 14) + ',left=' + Math.floor((screen.width - width) / 2 - 5));
        var checkInterval = setInterval(function () {
          if (tokenWindow && tokenWindow.closed) {
            clearInterval(checkInterval);
            getToken(second);
          }
        }, 1000);
      })

    }
    function updateCaptcha666() {
      a.captcha_url666 = `/t/captcha?token=${localStorage.getItem("rtoken")}&t=${+new Date()}`
    }
    function checkCaptcha666() {
      if (a.runningOuth2GenParams || a.urlOauth2OneId) return;

      a.runningOuth2GenParams = true;

      var param = $.param({
        company_code: 'savdo_uzavtosanoat_uz',
        lang_code: a.lang.lang_code
      });

      $http.get(routes.oauth2_gen_params + '&' + param, {
        headers: {
          rcode: localStorage.getItem("rtoken"),
          captcja: a.captcha666,
        }
      }).then(function (result) {
        if (result.data.error) {
          alert("Проверочный код содержит ошибку")
        } else {
          $('#captchaModal2').modal('hide')
          a.captcha666 = ""
          a.urlOauth2OneId = result.data;
          openOneid();
        }

      }, console.error).finally(function () {
        a.runningOuth2GenParams = false;
      });
    }
    function enterByOneId() {
      a.captcha666 = ""
      updateCaptcha666()
      $('#captchaModal2').modal('show')
    }
    function enterByOneId2() {

    }

    function toggleMenu(show) {
      if (show) {
        $('#offcanvas-menu').show();
        setTimeout(() => {
          $('#offcanvas-menu').addClass('active');
        }, 10);
      } else {
        $('#offcanvas-menu').removeClass('active').hide();
      }
    }

    function scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    function scrollToTop2() {
      let el = document.getElementById('target');
      if (el)
        el.scrollIntoView();
    }

    function logout() {
      a.user.user_id = null;
      a.user.name = null;
      a.urlOauth2OneId = null;
      localStorage.setItem("token", "")
      $location.path('main');
    }

    setInitParams();

    var scrBtn = $('.scroll-top-btn');
    $(document).scroll(function () {
      if ($(this).scrollTop() > 500 && !scrBtn.is(':visible')) {
        scrBtn.fadeIn();
      } else if ($(this).scrollTop() < 400 && scrBtn.is(':visible')) {
        scrBtn.fadeOut();
      }
    });

    $rootScope.a = a;
    $scope.a = a;
    $scope.checkCaptcha666 = checkCaptcha666
    $scope.logout = logout;
    $scope.setLang = setLang;
    $scope.toggleMenu = toggleMenu;
    $scope.scrollToTop = scrollToTop;
    $scope.updateCaptcha666 = updateCaptcha666;

    $scope.scrollToTop2 = scrollToTop2;
    $scope.enterByOneId = enterByOneId;
  });
})(app);
