(function($) {
    $(function() {

        function buildMasonry() {
            $('.field-name-field-photos .field-items').masonry({
                itemSelector: '.field-item',
                percentPosition: true,
                columnWidth: '.field-item'
            });
        }


        $(document).ready(function() {
            console.log('---------------run!');
            $('.carousel').carousel();

            var userFeed = new Instafeed({
                get: 'user',
                userId: '1c6f2094d1f344d28b3f38cc5a9bcaf9',
                accessToken: '1365268559.4eb71ba.e07e6cd904b54f0994e586d32fa8365b'
            });
            userFeed.run();
            // insta-widget-script
            var token = '1365268559.4eb71ba.e07e6cd904b54f0994e586d32fa8365b', // learn how to obtain it below
                userid = 1365268559, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
                num_photos = 16; // how much photos do you want to get

            $.ajax({
                url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
                dataType: 'jsonp',
                type: 'GET',
                data: { access_token: token, count: num_photos },
                success: function(data) {
                    for (x in data.data) {
                        $('#instafeed').append('<li><img src="' + data.data[x].images.low_resolution.url + '"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
                        // data.data[x].images.thumbnail.url - URL of image 150х150
                        // data.data[x].images.standard_resolution.url - URL of image 612х612
                        // data.data[x].link - Instagram post URL 
                    }
                    $('#instafeed').addClass('clearfix');
                },
                error: function(data) {
                    console.log(data); // send the error notifications to console
                }
            });

            //end


        });

        $(window).load(function() {
            buildMasonry();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space