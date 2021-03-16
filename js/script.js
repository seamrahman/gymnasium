//banner-slider start//
$('.banner-slider').slick({
  dots: true,
    arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
//banner-slider start//

//venubox start//
$(document).ready(function(){
    $('.venobox').venobox(); 
});
//venubox end//

//test-slider start//
$('.test-slider').slick({
  dots: true,
    arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
});
//test-slider start//

//counter start//
 $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
//counter end//

//class plugin start//

$('#colorful').colorfulTab();

//class plugin end//

//bs-slider start//
$('.bs-slider').slick({
  dots: false,
    arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    centerMode: true,
    centerPadding: "0",
});
//bs-slider start//