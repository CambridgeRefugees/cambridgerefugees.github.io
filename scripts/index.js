$(document).ready(function () {

	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
	});

	$(function () {
		$('.carousel').carousel({
			interval: 5000,
			ride: true
		});
	});

	if ($('html').attr('lang') == 'ar') {
		$("html").attr('dir', 'rtl');
	}

	$('input, textarea').on('change', function() {
		var input = $(this);
		if (input.val().length) {
		  input.addClass('populated');
		} else {
		  input.removeClass('populated');
		}
	  });

});
