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

    $('.advantages__item-title').on('click', function () {
        $(this).next('.advantages__hidden').toggleClass('advantages__text');
        $(this).toggleClass('advantages__item-title--active');
    })




});