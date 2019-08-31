

$(document).ready(function() {
	
	$.i18n({
		locale: 'is'
	}).load({
		"en": '/i18n/en.json',
		"is": '/i18n/is.json'
		
	}).done(function(){

		$('html').i18n();
		
		$('.locale-switcher').on('click', 'a', function(e) {

			e.preventDefault();
			$.i18n().locale = $(this).data('locale');

			$('html').i18n();
		});
	});
})