jQuery(document).ready(function(){
  
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  jQuery('#toggler').on('click', function(){
    if (jQuery(this).hasClass("peach")) {
      jQuery('.mobileNav').slideUp('slow');
      jQuery(this).removeClass('peach');
    } else {
      jQuery('.mobileNav').slideDown('slow');
      jQuery(this).addClass('peach');
    }
  });

});