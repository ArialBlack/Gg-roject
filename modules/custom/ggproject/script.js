(function ($, Drupal, undefined) {
    Drupal.behaviors.ggproject = {
        attach: function (context, settings) {


            $( document ).ready(function() {
                $('#edit-path-alias').val(Drupal.settings.ggproject.translatedPath);
                console.log(Drupal.settings.ggproject.translatedPath);
            });
        }
    };
})(jQuery, Drupal);