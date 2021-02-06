$(document).ready(function(){
  const flowerSlider = new Swiper('.flowers-slider', {
    // параметры слайдера
    
    loop: true,  //перелистывать слайды по кругу
    slidesPerView: 6, //количесвто видимых слайдов
  
    // подключение стрелок
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
//настройки адаптивной версии
    breakpoints: {
      //если больше  >= 320px
      320: {
        slidesPerView: 2,

      },
      // если больше >= 480px
      480: {
        slidesPerView: 3,
      },
      // если больше >= 992
      992: {
        slidesPerView: 6,

      }
    }

  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // параметры слайдера
    
    loop: true,  //перелистывать слайды по кругу
    slidesPerView: 1, //количесвто видимых слайдов
  
    // подключение стрелок
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });


});