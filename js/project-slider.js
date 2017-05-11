

 $(document).ready(function() {

 var win = $(window),
		 pxContainer = $('#project-slider'),
 loaderIntro = '<div class="landing"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>';

 /* Initialize Intro */
function initSlider(id) {
	var $this =$('#project-modal-'+id).find('#project-slider')
		//pxContainer;
	$this.after(loaderIntro);
	$this.addClass(function () {
		return $this.find('.item').length > 1 ? "big-slider" : "";
	});

	$this.waitForImages({
		waitForAll: true,
		finished: function () {
			$('.landing').remove();
			if ($this.hasClass('big-slider')) {
				var autoplay = $this.data('autoplay'),
						navigation = $this.data('navigation'),
						dots = $this.data('dots'),
						transition = $this.data('transition');

				$this.owlCarousel({
					items : 1,
					loop: true,
					autoplayTimeout: autoplay || false,
					dots: dots || false,
					nav: navigation || false,
					navText: ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
					autoplay: false,
					animateOut: transition || false
				});
			}
		}
	});

}

/* Project Preview	==============================================*/
$('.img-box').click(function(e) {
	//e.preventDefault();
	var id= $(this).data("id"), slides, slidesHtml='';

	slides = $(this).data('images').split(',');
	for (var i = 0; i < slides.length; ++i) {
		slidesHtml = slidesHtml + '<div class="item" style="background-image: url(' + slides[i] + ');"></div>';

	}
	$('#project-modal-1').on('hidden.bs.modal', function() {
		$('#project-modal-'+id).find('#project-slider').removeClass('big-slider');
		//$('#project-slider').trigger('remove.owl.carousel');
		$('#project-modal-'+id).find('#project-slider').trigger('destroy.owl.carousel');
	});



	 $('#project-modal-'+id).on('show.bs.modal', function() {
		$(this).find('#project-slider').html(slidesHtml);

	 }).modal();
	initSlider(id);


});



});
