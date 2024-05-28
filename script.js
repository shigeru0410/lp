$(document).ready(function(){
    $('.your-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '60px',
        prevArrow: '<div type="button" class="arrow arrow-left"><img src="./images/arrow.svg"></img></div>',
        nextArrow: '<div type="button" class="arrow arrow-right"><img src="./images/arrow.svg"></img></div>',

    });

    $('#moreButton').click(function() {
        $('.item').addClass('visible');
        $('.instagram_container').css('max-height', 'none');
        $('.fade').hide();
        $(this).hide();
    });

    // Add scroll animation
    $(window).on('scroll', function() {
        $('.fade-in-up, .fade-in-right, .fade-in-left, .scale-up').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 240) {
                $(this).addClass('visible');
            }
        });
        $('.rotateY-target').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('rotateY');
            }
        });
    });

    // Trigger scroll event on page load
    $(window).trigger('scroll');
});
