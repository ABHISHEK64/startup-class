$(".slider-two")
    .not(".slick-intialized")
    .slick({
        prevArrow: ".site-slider-two .prev",
        nextArrow: ".site-slider-two .next",
        slidesToshow: 5,
        slidesToscroll: 1,
        autoplaySpeed: 3000,
    })