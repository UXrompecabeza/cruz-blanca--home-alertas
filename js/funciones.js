$(".auto-carousel").slick({
        slidesToShow: 1,
        dots: !0,
        infinite: !0,
        slidesToScroll: 1,
        arrows: !0,
        autoplay: !0,
        autoplaySpeed: 5e3
        
    }),
    $(".banner-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        arrows: !0
    }),
    $(".btn-carousel").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: !1,
        arrows: !1,
        responsive: [{ breakpoint: 767, settings: { dots: !0 } }]
    }),
    $(".big-btn_box_slide").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: !1,
        arrows: !1,
        responsive: [{ breakpoint: 767, settings: { dots: !0 } }]
    });
   