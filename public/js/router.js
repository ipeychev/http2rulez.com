/*
	Control de acceso a las páginas: home, masonry, blog, contact
*/
var pageName = 'home';
if (window.location.href.search('#')+1 > 0){
	pageName  = window.location.href.substring(window.location.href.search('#')+1);
}
changePage(pageName, false);

function changePage(pageName, animation){
	if($('.page#'+pageName).length > 0){

		if(!animation){
			$('.page').hide();
			$('.page#'+pageName).show();
		}else{
			$('.page').fadeOut();
			$('.page#'+pageName).fadeIn();
		}

		$('.navbar-nav li a').removeClass('selected');
		$('.navbar-nav li a[href=#'+pageName+']').addClass('selected');

		$(window).scrollTop(200);
	}
}

$('.navbar-header a').on('click', function(evt){

	var pageName = $(evt.currentTarget).attr('href').substring(1);

	changePage(pageName, true);
});


