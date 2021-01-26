$(document).ready(function(){
    $(".js-hl-big").slick({
        // autoplay: !0,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        pauseOnFocus: !0,
        fade: !0,
        arrows: !1,
        cssEase: "ease",
        asNavFor: ".js-hl-thumb"
    }),
    $(".js-hl-thumb").slick({
        asNavFor: ".js-hl-big",
        slidesToShow: 4,
        focusOnSelect: !0
    }),
    $(".js-photo-wp").slick({
        autoplay: !0,
        autoplaySpeed: 9e3,
        slidesToShow: 1,
        dots: true,
        pauseOnFocus: !0,
        prevArrow: "<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>",
        nextArrow: "<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>",
    })
});