(function() {
  $(document).ready(function() {
    console.log('swipe works');
    var swipeTreshold = 75,
      $carousel = $('#views-bootstrap-carousel-1'),
      // $carouselItem= $ ('#views-bootstrap-carousel-1 .item');

    $carousel.swipe( {
      swipeLeft: function() {
        console.log('swipe left');
        $carousel.carousel('next');
      },

      swipeRight: function() {
        console.log('swipe right');
        $carousel.carousel('prev');
      },

      threshold: swipeTreshold,
      allowPageScroll:'vertical',
      preventDefaultEvents: false,
      fingers:1
    });
  });

});
