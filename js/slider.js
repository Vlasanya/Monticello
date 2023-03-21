$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplayspeed:4000,
    speed:1500,
    // slideToScroll: 

    
    // fade: false,
    pauseOnHover: true,
    vertical: true,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 1,
    //       dots: true,
    //       arrows: false,
    //       fade: false,
    //       swipe: true,
    //     }
    //   },
    //   {  breakpoint: 992,
    //     settings: {
    //       slidesToShow: 1,
    //       dots: true,
    //       arrows: false,
    //       fade: false,
    //     }}
    // ]
  });

//------------------->>
  $('.slider_cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplayspeed: 4000,
    speed: 1000,
    adaptiveHeight: true,
    fade: false,
    pauseOnHover: true,
    vertical: false,

    responsive: [
      {
        breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              dots: true,
              arrows: false,
              fade: false,
              swipe: true,
          }

      },
      { breakpoint: 992,
          settings: {
              slidesToShow: 2,
              dots: true,
              arrows: false,
          }},
      { breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }}
      ]
  })
});