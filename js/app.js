(function($, window, undefined) {
  if ( Modernizr.mq('screen and (min-width: 768px)') ) {
    // Smooth scroll lifted from: http://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 250);
            return false;
          }
        }
      });
    });
  }
})(jQuery, window);