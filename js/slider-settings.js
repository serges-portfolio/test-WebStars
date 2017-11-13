    $(document).ready(function(){
        $('.slider').slick({
            dots: true,
            infinite: true,
            slide: "span",
            prevArrow:$(".slider__previous-button"),
            nextArrow:$(".slider__next-button"),
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
    });
    });
