(function ($, Drupal) {
  Drupal.behaviors.loginDestUpdate = {
    attach: function ($context) {
      $('#edit-field-date-published-value').datepicker({
        dateFormat: "yy"
      });
    }
  };
})(jQuery, Drupal);
