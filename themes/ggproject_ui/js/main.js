(function($) {
    $(function() {

        function buildMasonry() {
            $('.field-name-field-photos .field-items').masonry({
                itemSelector: '.field-item',
                percentPosition: true,
                columnWidth: '.field-item'
            });
        }

        function buildMultyCarousel() {
            // Instantiate the Bootstrap carousel

            // for every slide in carousel, copy the next slide's item in the slide.
            // Do the same for the next, next item.
            $('#block-views-slider-portfolio-block-1 .carousel .item').each(function(){
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));

                if (next.next().length>0) {
                    next.next().children(':first-child').clone().appendTo($(this));
                } else {
                    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
                }
            });
        }

        function move404() {
            var $page = $('.page-node-261, .page-node-268, .page-node-263, .page-node-264'),
                $h1 = $page.find('.page-banner .inner'),
                $text = $page.find('#block-system-main p');
            $text.appendTo($h1);
        }

        $(document).ready(function() {
            move404();
            $('.carousel').carousel();
            buildMultyCarousel();
        });

        $(window).load(function() {
            buildMasonry();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
