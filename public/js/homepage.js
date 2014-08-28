$(document).ready(function() {

    /* 1) Magnific popup for showing images in full size screen */
    $('.thumbnail').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
        }
      });


    /* 2) Jquery Shapeshift & shuffle */
    $('.shuffle-container').shuffle(); //recoloco de forma aleatoria
    $('.shuffle-container').shapeshift({
        minColumns: 3,
        enableDrag: true, //quito el drag&drop xq sino no se puede seleccionar el texto
        enableCrossDrop: true,
    });

});