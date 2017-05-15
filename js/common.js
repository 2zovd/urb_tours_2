$('.day-block').click(function() {
	$('.day-block').removeClass('active-day');
	$(this).toggleClass('active-day');
});

$('.send').click(function() {
      $('.success').addClass('active');
      setTimeout(function() {
            $('.success').removeClass('active').fadeOut();
      }, 7000);
      return false;
});

$('.btn-mobile').click(function() {
	$(this).toggleClass('active');
	$('.nav-mobile').toggleClass('active');
});

$('.nav-mobile').click(function() {
	$(this).removeClass('active');
	$('.btn-mobile').removeClass('active');
});

$(document).ready(function(){
  $('.slider-content').slick({
    arrows: false,
    dots: true,
    appendDots:$(".slider-pagination"),
    autoplay: true
  });
});