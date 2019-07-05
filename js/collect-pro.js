$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        nextArrow: '<img src="img/right-arrow.png" class="slick-next">',
        prevArrow: '<img src="img/left-arrow.png" class="slick-prev">',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.software').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});