let gridBottom = 0;
let gridTop = 0;

document.onload = setScroll();
    
    function setScroll() {

    var windowHeight = document.body.clientHeight,
      gridTop = windowHeight * .1,
      gridBottom = windowHeight * .9;
  
    $(window).on('scroll', function() {
      $('button').each(function() {
        var thisTop = $(this).offset().top - $(window).scrollTop();
        if (thisTop >= gridTop && (thisTop + $(this).height()) <= gridBottom) {
          $(this).addClass('animated');
        } else {
          $(this).removeClass('animated');
        }
      });
    });
    $(window).trigger('scroll');
  };