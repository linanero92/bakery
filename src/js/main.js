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
        required: "Обязательно укажите Email",
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
    var mySwiper = new Swiper('.swiper-container--video', {
      spaceBetween: 30,
      loop: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination--video',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next--video',
        prevEl: '.swiper-button-prev--video',
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
  
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
    r(function(){
      if (!document.getElementsByClassName) {
          // Поддержка IE8
          var getElementsByClassName = function(node, classname) {
              var a = [];
              var re = new RegExp('(^| )'+classname+'( |$)');
              var els = node.getElementsByTagName("*");
              for(var i=0,j=els.length; i < j; i++)
                  if(re.test(els[i].className))a.push(els[i]);
              return a;
          }
          var videos = getElementsByClassName(document.body,"youtube");
      } else {
          var videos = document.getElementsByClassName("youtube");
      }
      var nb_videos = videos.length;
      for (var i=0; i < nb_videos; i++) {
          // Находим постер для видео, зная ID нашего видео
          //videos[i].style.backgroundImage = 'url(../img/video-down.jpg)';
          // Размещаем над постером кнопку Play, чтобы создать эффект плеера
          var play = document.createElement("div");
          play.setAttribute("class","play");
          videos[i].appendChild(play);
          videos[i].onclick = function() {
              // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
              var iframe = document.createElement("iframe");
              var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
              if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
              iframe.setAttribute("src",iframe_url);
              iframe.setAttribute("frameborder",'0');
              // Высота и ширина iFrame будет как у элемента-родителя
              iframe.style.width  = this.style.width;
              iframe.style.height = this.style.height;
              // Заменяем начальное изображение (постер) на iFrame
              this.parentNode.replaceChild(iframe, this);
          }
      }
  });
});
