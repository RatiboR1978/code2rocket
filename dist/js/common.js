'use strict';

$(function () {
    $('.courses__slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slidesToScroll: 1
    });

    $('.teachers__slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slidesToScroll: 1
    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slidesToScroll: 1
    });
});