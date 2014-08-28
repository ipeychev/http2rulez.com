$(document).ready(function($){
    $("a[rel='colorbox']").colorbox({
            transition:'elastic',
            opacity:'0.7',
            maxHeight:'90%'
    });
    $("a.gallery").colorbox({
            rel:'group'
    });
    $("a[rel='colorboxvideo']").colorbox({
            iframe:true,
            transition:'elastic',
            opacity:'0.7',
            innerWidth:'60%',
            innerHeight:'80%'
    });



});


/*!
 * StrapPress Extras
 */
// Placeholder
jQuery(function(){
     jQuery("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      });

      jQuery("a[rel=tooltip]").tooltip();

jQuery('#tiles').imagesLoaded(function() {
     var handler = null;

    // Prepare layout options.
    var options = {
      autoResize: true, // This will auto-update the layout when the browser window is resized.
      container: jQuery('#main'), // Optional, used for some extra CSS styling
      offset: 5, // Optional, the distance between grid items
      itemWidth: 230 // Optional, the width of a grid item
    };

    /**
     * When scrolled all the way to the bottom, add more tiles.
     */
    function onScroll(event) {
      // Check if we're within 100 pixels of the bottom edge of the broser window.
      var closeToBottom = (jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - 100);
      if(closeToBottom) {
        // Get the first then items from the grid, clone them, and add them to the bottom of the grid.
        var items = jQuery('#tiles li');

        // Clear our previous layout handler.
        if(handler) handler.wookmarkClear();

        // Create a new layout handler.
        handler = jQuery('#tiles li');
        handler.wookmark(options);
      }
    };

    jQuery(document).ready(new function() {
      // Capture scroll event.
      jQuery(document).bind('scroll', onScroll);
          // Call the layout function.
          handler = jQuery('#tiles li');
          handler.wookmark(options);

        });
    });

});
