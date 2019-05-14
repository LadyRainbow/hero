$(document).ready(function () {
    var $body = $('body');
    var $desctopApp = $('.desctop');



    var firstManHeight = $('.first-man').outerHeight()
    var firstManHeightInner = $('.first-man .main-content').outerHeight()
    var padding = firstManHeight - firstManHeightInner;
    var firstBlockHeight = $('.first-screen').outerHeight() - padding - 2;
    var $arrowDown = $('.arrow-down');

    var $header = $('.header-fixed');
    var firstBlockHeightMob = $('.first-screen-mob').height();
    var $headerMob = $('.header-mob-fixed');

    var $popUp = $('.pop-up-overlay-wrapper');
    var $popUpOpen = $('.desctop .cart-btn');
    var $popUpClose = $('.cart-popup .arrow');
    var $overlay = $('.overlay-pop-up');

    var $popUpMob = $('.mobile .pop-up-overlay-wrapper');
    var $popUpOpenMob = $('.header-mob .cart-btn');
    var $popUpCloseMob = $('.arrow-back-mob');

    var $menu = $('.desctop .menu');
    var $menuBurger = $('.desctop .menu-burger');
    var $menuCloseBtn = $('.desctop .menu-close');

    var $menuMob = $('.menu-mob');
    var $menuBurgerMob = $('.header-mob .menu-burger');
    var $menuCloseBtnMob = $('.menu-mob .menu-close');


    var $splitTexts = $('.box-split p');
    var $titleFadeElement = $('h1.fade-animate');
    var $subtitleFadeElement = $('.bottom-text.fade-animate');

    // scroll down
    $(".scrollTo").click(function (event) {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
      }, 1000);
        return false;
    });
    // scroll down mob
    $(".scrollTo-mob").click(function (event) {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
      }, 1000);
        return false;
    });

    // open cart
    $popUpOpen.click(function () {
        $body.addClass('compensate-for-scrollbar');
        $overlay.fadeIn();
        $popUp.addClass('show-popup');
        $('.pages-wrapper').addClass('open-cart');
        $('.header-wrapper').addClass('open-cart');
        $('.menu-wrapper').addClass('open-cart');
        $('.footer-wrapper').addClass('open-cart');
    });
    $popUpClose.click(function () {
        $body.removeClass('compensate-for-scrollbar');
        $overlay.fadeOut();
        $popUp.removeClass('show-popup');
        $('.pages-wrapper').removeClass('open-cart');
        $('.header-wrapper').removeClass('open-cart');
        $('.menu-wrapper').removeClass('open-cart');
        $('.footer-wrapper').removeClass('open-cart');
    });

    // open mobile cart
    $popUpOpenMob.click(function () {
        $body.addClass('overflow-hidden');
        $popUpMob.fadeIn();
    });
    $popUpCloseMob.click(function () {
        $body.removeClass('overflow-hidden');
        $popUpMob.fadeOut();
    });



    // var $toFullVersion = $('a.full-version');
    //
    // $toFullVersion.click(function () {
    //     if($(this).hasClass != 'full-version-active') {
    //         $(this).addClass('full-version-active');
    //     } else {
    //         $(this).removeClass('full-version-active');
    //     }
    // });

    // OPEN/CLOSE MENU
    $menuBurger.click(function () {
        $menu.fadeIn().css('display', 'flex');
        $body.addClass('compensate-for-scrollbar');
    });
    $menuCloseBtn.click(function () {
        $menu.fadeOut();
        $body.removeClass('compensate-for-scrollbar');
    });
    // OPEN/CLOSE MENU MOBILE
    $menuBurgerMob.click(function () {
        $menuMob.fadeIn().css('display', 'flex');
        $body.addClass('overflow-hidden');
    });
    $menuCloseBtnMob.click(function () {
        $menuMob.fadeOut();
        $body.removeClass('overflow-hidden');
    });

    // SLIDER PRODUCT
    $('.product-img-main').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.product-img-prev'
    });
    $('.product-img-prev').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         asNavFor: '.product-img-main',
         dots: false,
         focusOnSelect: true
    });

    // SLIDER PRODUCT MOBILE
    $('.product-mob-slider').slick(
        {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
    }
);




    // SPLIT TEXT
    var text1 = $('.split-1').text();
    var quotes1 = [text1];

    var text2 = $('.split-2').text();
    var quotes2 = [text2];

    var text3 = $('.split-3').text();
    var quotes3 = [text3];

    var index = 0;
    // var max = quotes1.length + quotes2.length + quotes3.length  - 1;
    var delay = .02;

    function random(min, max){
    	return (Math.random() * (max - min)) + min;
    }

    function cycleQuotes(arr, i, sel){
    	var el = $(sel);
    	var message = arr[i];
    	el.html(message);
    	var split = new SplitText(el);
    	var time = split.chars.length * delay;
    	$(split.chars).each(function(i){
    		TweenMax.from($(this), 2, {
    			opacity: 0,
    			x: 0,
    			y: random(-200, 200),
    			z: random(500, 1000),
    			delay: i * delay,
    		});
    	});
    };

    // SHOW FADE ANIMATED ELEMENTS ON THE FIRST SCREEN
    // SHOW SPLIT TEXTSELEMENTS ON THE FIRST SCREEN
    function showSplitTexts () {
        $splitTexts.addClass('show-split-texts');
    };

    setTimeout(function () {
        $titleFadeElement.addClass('show-fade-animate-element');
    }, 580);
    setTimeout(showSplitTexts, 850);
    setTimeout(cycleQuotes, 850, quotes1, index, ".split-1");
    setTimeout(cycleQuotes, 840, quotes2, index, ".split-2");
    setTimeout(cycleQuotes, 840, quotes3, index, ".split-3");
    setTimeout(function () {
        $subtitleFadeElement.addClass('show-fade-animate-element');
    }, 3850);

    // INIT CUSTOM SCROLL
     $(".scroll-wrp").mCustomScrollbar();

    // POLICY double click
    var $policyLink = $('.nav-item a');
    var countClicks = 0;
    $policyLink.click(function (){
        countClicks = countClicks + 1;
        if (countClicks === 1) {
            $(this).click();
        } else {
            return;
        }
    });
    // POLICY MOBILE TABS
    var $btnToggle = $('.btn-toggle');
    var $policyText = $('.policy-text-mob');

    $btnToggle.click(function () {
        $btnToggle.removeClass('active');
        $policyText.removeClass('active');
        $(this).addClass('active');
        var attrValue = $(this).attr("data-nav");
        var $activeText = ($('[data-content = ' + attrValue + ']'));
        $activeText.addClass('active');
        $(window).scrollTop(0);
    });

    // show\hide fixed header
    $(window).scroll(function(){
        if ($(this).scrollTop() >= firstBlockHeight) {
            $header.css("display", "flex");
            $header.fadeIn();
        } else {
            $header.fadeOut();
        }
    });
    // show\hide arrow down
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 100) {
            $arrowDown.fadeOut();
        } else {
            $arrowDown.fadeIn();
        }
    });

    // show\hide fixed header mobile
    $(window).scroll(function(){
        if ($(this).scrollTop() >= firstBlockHeightMob) {
            $headerMob.css("display", "flex");
            $headerMob.fadeIn();
        } else {
            $headerMob.fadeOut();
        }
    });


   // masked inputs
   $(".form-input-phone").mask("+7 (999) 999-99-99");
   $(".form-input-time").mask("99:99");

    // initialize the vh-check
    (function () {
      var isNeeded = vhCheck('browser-address-bar');
    }());


    // $('#region').selectize();
    // $('#city').selectize();

    // DOM-elements Basket Page
    var $itemCloseBtn = $('.item .item-close');
    var $itemCloseBtnMob = $('.item-mob .item-close-mob');

    $itemCloseBtn.click(function () {
        $itemBasket = $(this).parent().parent().parent().parent();
        console.log($itemBasket);
        $itemBasket.animate({
         height: "0px",
         padding: "0px"
     }, 500, function() {
         $(this).hide();
       });
   });
    $itemCloseBtnMob.click(function () {
        $itemBasket = $(this).parent().parent().parent().parent();
        console.log($itemBasket);
        $itemBasket.animate({
         height: "0px",
         padding: "0px"
     }, 500, function() {
         $(this).hide();
       });
   });


    var $itemBasketShowMoreBtn = $('.item .show-more');
    var $itemBasketShowMoreBtnMob = $('.item-mob .show-more');




   // -----------FORM VALIDATION---------------
   $("form").submit(function(e) {
       e.preventDefault();
       var form = $(this);
       var error = 0;

       $(this).find( "input" ).each(function() {
           inp = $(this);
           if($(this).attr('name') == 'user-name'){
               var regex = new RegExp(/^[а-яёa-z\s]+$/iu);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(this).attr('name') == 'user-email'){
               var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(this).attr('name') == 'user-time'){
               var regex = new RegExp(/^(2[0-4]|[01]?[0-9]):[0-5][0-9]$/);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(this).attr('name') == 'user-number'){
               var regex = new RegExp(/^\d+$/);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(inp).attr('name') == 'user-phone'){
               var regex = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,20}(\s*)?$/);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
       });
       if(error) return 1;
   });








   // ---------------EMBERS-------------------------------
   var UPPER_LIMIT = 10;
    var LOWER_LIMIT = 1;
    var MAX_SIZE = 10;
    var MIN_SIZE = 2;
    var AMOUNT = 250;
    var COLOR = 0xca2b2b;
    var _PIXI =

    PIXI,Application = _PIXI.Application,Graphics = _PIXI.Graphics;

    var floored = function floored(v) {return Math.floor(Math.random() * v);};
    var update = function update(p) {return (
       Math.random() > 0.5 ?
       Math.max(LOWER_LIMIT, p - 1) :
       Math.min(p + 1, UPPER_LIMIT));};
    var reset = function reset(p) {
     p.x = p.startX;
     p.y = p.startY;
    };
    var genParticles = function genParticles(t) {return (
       new Array(AMOUNT).fill().map(function (p) {
         var START_X_AXIS = Math.random() > 0.5;
         var SIZE = floored(MAX_SIZE) + MIN_SIZE;
         p = new PIXI.Sprite(t);
         p.vx = floored(UPPER_LIMIT / 4);
         p.vy = floored(UPPER_LIMIT / 4);
         p.x = p.startX = START_X_AXIS ?
         -(SIZE + floored(app.renderer.width)) :
         floored(app.renderer.width * 0.25);
         p.y = p.startY = START_X_AXIS ?
         SIZE +
         floored(app.renderer.height * 0.25) +
         Math.floor(app.renderer.height * 0.75) :
         app.renderer.height + SIZE + floored(app.renderer.height);
         p.scale.x = (floored(MAX_SIZE) + MIN_SIZE) / 100;
         p.scale.y = (floored(MAX_SIZE) + MIN_SIZE) / 100;
         p.alpha = Math.random();
         p.rotation = Math.PI / 180 * Math.floor(Math.random() * 360);
         embers.addChild(p);
         return p;
       }));};

    var app = new Application({
     antialias: true,
     transparent: true });


    var embers = new PIXI.particles.ParticleContainer(AMOUNT, {
     scale: true,
     position: true,
     rotation: true,
     alpha: true });

    app.stage.addChild(embers);
    var p = new Graphics();
    p.beginFill(COLOR);
    p.drawRect(0, 0, 99, 99);
    p.endFill();
    var baseTexture = app.renderer.generateTexture(p);
    var particles = genParticles(baseTexture);

    app.ticker.add(function (i) {
     if (
     app.renderer.height !== innerHeight ||
     app.renderer.width !== innerWidth)
     {
       app.renderer.resize(innerWidth, innerHeight);
       embers.removeChildren();
       particles = genParticles(baseTexture);
     }var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
       for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var particle = _step.value;
         if (particle.y < app.renderer.height || particle.startX < 0)
         particle.x += particle.vx;
         if (particle.x > 0 || particle.startY > app.renderer.height)
         particle.y -= particle.vy;

         if (Math.random() > 0.9) particle.vx = update(particle.vx);
         if (Math.random() > 0.9) particle.vy = update(particle.vy);
         if (Math.random() > 0.9) particle.rotation += Math.PI / 180 * 10;

         if (particle.x > app.renderer.width || particle.y < -particle.size)
         reset(particle);
       }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
    });

  $('.footer').append(app.view);
   // ------------EMBERS END --------------------------

   // CHECKOUT SELECT
   var dataSelect = [
       {
           text: 'Ростовская область',
           value: '61',
           children: ['Сальск', 'Семикаракорск', 'Азов', 'Аксай', 'Батайск', 'Белая Калитва', 'Волгодонск', 'Гуково', 'Донецк', 'Зверево', 'Зерноград', 'Каменск-Шахтинский', 'Константиновск', 'Миллерово', 'Морозовск', 'Новочеркасск', 'Новошахтинск', 'Пролетарск', 'Ростов-на-Дону']
       },
       {
           text: 'Волгоградская область',
           children: ['Волгоград', 'Волжский', 'Камышин']
       },
   ];
   // init
   // $('#region').cascadingSelect({
   //   subSelects: ['#city'],
   //   data: dataSelect
   // });
   // $('#region-mob').cascadingSelect({
   //   subSelects: ['#city-mob'],
   //   data: dataSelect
   // });








});
