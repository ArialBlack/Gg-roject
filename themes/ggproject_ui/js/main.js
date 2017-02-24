(function($){
    $(function() {

        function buildMasonry() {
            $('.field-name-field-photos .field-items').masonry({
                itemSelector: '.field-item',
                percentPosition: true,
                columnWidth: '.field-item'
            });
        }


        $( document ).ready(function() {
            console.log('---------------run!');
            $('.carousel').carousel();

            var userFeed = new Instafeed({
                get: 'user',
                userId: '',
                accessToken: ''
            });
            userFeed.run();

        });

        $(window).load(function() {
            buildMasonry();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space