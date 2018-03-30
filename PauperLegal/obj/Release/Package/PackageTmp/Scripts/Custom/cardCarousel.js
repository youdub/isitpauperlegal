﻿$('.responsive').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      }
    ]
});