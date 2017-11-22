$(document).ready(function() {
   	$('.ui-slick-main').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        // centerMode: true,
        // centerPadding: '50px',
        variableWidth: true,
        arrows: true,
        touchMove: false,
    }).css('visibility', 'visible');

});



