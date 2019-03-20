$(document).ready(function(){
    $(".work-slider").slick({
slidesToShow:2,
        infinite:false,
        autoplay:true,
        dots:false,
        arrows:false
    });

    $(".team-slider").slick({
        slidesToShow:3,
        centerMode: true,
        centerPadding:'200px',
        autoplay:true,
        infinite:true,
       variableWidth:true,
        prevArrow: $('.prev-team'),
        nextArrow: $('.next-team'),
        speed:200
    });

    $(".comment-slider").slick({
        slidesToShow:1,
        infinite:true,
        autoplay:true,
        asNavFor:".comment-slider-nav",
        arrows:false,
        dots:false,
        speed:2000

    });
    $(".comment-slider-nav").slick({
        slidesToShow:3,
        infinite:true,
        autoplay:true,
        asNavFor:".comment-slider",
        centerMode:true,
        arrows:false,
        dots:false,
        focusOnSelect: true
    });
});