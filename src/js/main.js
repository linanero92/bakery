if(!window.jQuery){
document.write('<script type="text/javascript" src="/js/lib/jquery.js"></script>')
}

$(document).ready(function () {
 
  var modal = $('.modal');
  var modalUp = $('.modal-up');
  var modalForm = $('.modal__form');
  var heroForm = $('.hero__form');
  var offerForm = $('.offer__form');
  
  onSubmitForm(modalForm)
  onSubmitForm(heroForm)
  onSubmitForm(offerForm)

  $('[data-toggle=modal]').on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $('.modal__close').on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $('.modal-up__close').on('click', function () {
    modalUp.removeClass('modal-up--visible');
  });

  $(document).keydown(function () {
    if (event.keyCode == 27) {
      modal.removeClass('modal--visible');
      modalUp.removeClass('modal-up--visible');
    }
  });

   heroForm.validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },

      userEmail: {
        required: true,
        email: true
      },
  }, 
  messages: {
    userName: {
      required: "Имя обязательно для заполнения",
      minlength: "Имя не короче 2-х букв"
    },
    userPhone: "Телефон обязателен для заполнения",

    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com"
      },
    }
  });
  
  function onSubmitForm(form) { 
   form.submit(function (event) {
     if (form.valid()) {
       event.preventDefault();
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(this).serialize(),
          success: function (response) {
           form[0].reset();
           $('.modal').removeClass('modal--visible'); 
           $('.modal-up').addClass('modal-up--visible');
            console.log(response)
        },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(jqXHR + " " + textStatus);
            ym('57181468', 'reachGoal', 'submit'); return true;
       }
       });
  }});
  }

  modalForm.validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {

      userName: {
        required: true,
        minlength: 2
      },

      userPhone: {
        required: true,
        minlength: 17
      },
 
      userEmail: {
        required: true,
        email: true
      },
    }, 

    messages: {
      userName: {
        required: "Имя обязательно для заполнения",
        minlength: "Имя не короче 2-х букв"
      },
      userPhone: "Телефон обязателен для заполнения",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
    }
  });

   offerForm.validate({
    errorClass: "invalid",
     errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: "Введите в формате: name@domain.com"
      },
  }, 
  messages: {
   userName: {
      required: "Имя обязательно для заполнения",
      minlength: "Имя не короче 2-х букв"
    },
    userPhone: "Телефон обязателен для заполнения",
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com"
      },
    }
  });
  
  $('[type=tel]').mask('+7(000) 000-00-00');

  new WOW().init();

  // slider
   //Initialize Swiper
    var mySwiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      loop: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
  // slider video
   //Initialize Swiper
    // var mySwiper = new Swiper('.swiper-container--video', {
    //   spaceBetween: 30,
    //   loop: true,
    //   effect: 'fade',
    //   pagination: {
    //     el: '.swiper-pagination--video',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next--video',
    //     prevEl: '.swiper-button-prev--video',
    //   },
    // });
  
  var mySwiper1 = new Swiper('.swiper-container-about', {
    noSwiping: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination-about',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-about',
      prevEl: '.swiper-button-prev-about',
    },
    
  });
   
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: '0srI4c7SbAc',
    events: {
      'onReady': videoPlay,
    }
    });
  })
  function videoPlay(event) {
    event.target.setVolume(50);
    event.target.playVideo();

  }

objectFitImages('img.some-image', {watchMQ: true});
// or objectFitImages(null, {watchMQ: true}); // for the auto mode
// an array/NodeList
var someImages = document.querySelectorAll('img.some-image');
objectFitImages(someImages);
// a single element
var oneImage = document.querySelector('img.some-image');
objectFitImages(oneImage);
// or with jQuery
var $someImages = $('img.some-image');
  objectFitImages($someImages);
  
//сладер видео  
// function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
//     r(function(){
//       if (!document.getElementsByClassName) {
//           // Поддержка IE8
//           var getElementsByClassName = function(node, classname) {
//               var a = [];
//               var re = new RegExp('(^| )'+classname+'( |$)');
//               var els = node.getElementsByTagName("*");
//               for(var i=0,j=els.length; i < j; i++)
//                   if(re.test(els[i].className))a.push(els[i]);
//               return a;
//           }
//           var videos = getElementsByClassName(document.body,"youtube");
//       } else {
//           var videos = document.getElementsByClassName("youtube");
//       }
//       var nb_videos = videos.length;
//       for (var i=0; i < nb_videos; i++) {
//           // Находим постер для видео, зная ID нашего видео
//           //videos[i].style.backgroundImage = 'url(../img/video-down.jpg)';
//           // Размещаем над постером кнопку Play, чтобы создать эффект плеера
//           var play = document.createElement("div");
//           play.setAttribute("class","play");
//           videos[i].appendChild(play);
//           videos[i].onclick = function() {
//               // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
//               var iframe = document.createElement("iframe");
//               var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
//               if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
//               iframe.setAttribute("src",iframe_url);
//               iframe.setAttribute("frameborder",'0');
//               // Высота и ширина iFrame будет как у элемента-родителя
//               iframe.style.width  = this.style.width;
//               iframe.style.height = this.style.height;
//               // Заменяем начальное изображение (постер) на iFrame
//               this.parentNode.replaceChild(iframe, this);
//           }
//       }
//     });
  
  // document.addEventListener("DOMContentLoaded", function(event) {
  // function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
  //   r(function(){
  //     if (!document.getElementsByClassName) {
  //         // Поддержка IE8
  //         var getElementsByClassName = function(node, classname) {
  //             var a = [];
  //             var re = new RegExp('(^| )'+classname+'( |$)');
  //             var els = node.getElementsByTagName("*");
  //             for(var i=0,j=els.length; i < j; i++)
  //                 if(re.test(els[i].className))a.push(els[i]);
  //             return a;
  //         }
  //         var videos = getElementsByClassName(document.body,"youtube");
  //     } else {
  //         var videos = document.getElementsByClassName("youtube");
  //     }
  //     var nb_videos = videos.length;
  //     for (var i=0; i < nb_videos; i++) {
  //         // Находим постер для видео, зная ID нашего видео
  //         videos[i].style.backgroundImage = 'url(../img/about/video-mask.png)';
  //         // Размещаем над постером кнопку Play, чтобы создать эффект плеера
  //         var play = document.createElement("div");
  //         play.setAttribute("class","play");
  //         videos[i].appendChild(play);
  //         videos[i].onclick = function() {
  //             // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
  //             var iframe = document.createElement("iframe");
  //             var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
  //             if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
  //             iframe.setAttribute("src",iframe_url);
  //             iframe.setAttribute("frameborder",'0');
  //             // Высота и ширина iFrame будет как у элемента-родителя
  //             iframe.style.width  = this.style.width;
  //             iframe.style.height = this.style.height;
  //             // Заменяем начальное изображение (постер) на iFrame
  //             this.parentNode.replaceChild(iframe, this);
  //         }
  //     }
  //   });
  // });

});

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map('map', {
    center: [55.738024, 37.510322],
    zoom: 18
  }, {
    searchControlProvider: 'yandex#search'
  }),
    
   myPlacemark = new ymaps.Placemark(myMapTemp.getCenter(), {
      hintContent: 'Наш офис',
      balloonContent: 'Вход со двора'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/location-pin.png',
      // Размеры метки.
      iconImageSize: [32, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    });

  myMapTemp.geoObjects.add(myPlacemark); // помещаем флажок на карту
  myMapTemp.behaviors.disable('scrollZoom'); 
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
} 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=5638cd1f-e2e5-444a-8a22-2b670e272292&lang=ru_RU", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();

});
