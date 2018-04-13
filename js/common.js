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

    /* Hamburger
    =========================*/

    $(".menu").on('click',function(){
        var elem = $(this);
        elem.find(".hambergerIcon").toggleClass("open");

        elem.toggleClass('menu_btn_active');
        if(elem.hasClass('menu_btn_active')) {
            $('.header__menu-mob').slideDown(500);
        } else {
            $('.header__menu-mob').slideUp(500);
        }
    });




});