(function($) {
  $(function() {

    $(document).ready(function() {


      var swipeTreshold = 75,
          $carousel = $('#views-bootstrap-carousel-1');

      $carousel.carousel({
            interval: false
      });


      $carousel.swipe( {
        swipeLeft: function() {
          $carousel.carousel('next');
        },

        swipeRight: function() {
          $carousel.carousel('prev');
        },

        threshold: swipeTreshold,
        allowPageScroll:'vertical',
        preventDefaultEvents: false
      });

  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
