/*
    Script Outline:
    1. Window Load
    2. Back to Top
    3. Smooth Scrolling
    4. Sliders
    5. Popup Elements
    6. CSS Image Backgrounds
    7. Embeded Videos
    8. Portfolio Filters
    9. Setting up Countdown
*/

(function($) {
    "use strict";

    //Windows Load
    $(window).on("load", function() {
        //Site Loader
        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");
    });

    //Back to Top
    $(function (){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').addClass('active');
            } else {
                $('.scroll-to-top').removeClass('active');
            }
        });
    });

    //Scroll-To
    $('a.scroll').smoothScroll({
        speed: 800,
        offset: 0
    });

    //Slider
    $('.main-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: false,
        controlNav: true,
        pauseOnAction: false,
        animationSpeed: 500
    });

    $('.bg-review-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: false,
        controlNav: true,
        pauseOnAction: false,
        animationSpeed: 500
    });

    $('.review-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: true,
        controlNav: false,
        pauseOnAction: false,
        animationSpeed: 500
    });

    //Pop-Up Elements
    $('.popup-image').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
   
    //CSS Image Background
    $('.background-img').each(function() {
        var path = $(this).children('img').attr('src');
        $(this).css('background-image', 'url("' + path + '")').css('background-position', 'initial');
    });
    
    //Embeded Video 
    var playVideo = $('.video-cover .play-but')

    $('.video-cover').each(function() {
        if ($(this).find('iframe').length) {

            $(this).find('iframe').attr('data-src', 
            $(this).find('iframe').attr('src'), 
            $(this).find('iframe').attr('src', ''));
        }
    });

    playVideo.on("click", function() {
        var blockVideo = $(this).closest('.video-cover');
        var iframeInstance = blockVideo.find('iframe');

        blockVideo.addClass('show-video');
        iframeInstance.attr('src', iframeInstance.attr('data-src'));
        
        return false;
    });

    //Portfolio filters

    $('.filter li a').on("click", function(e){
        
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');     
        
        var filters = $(this).attr('data-filter');

        $(this).closest('.portfolio').find('.grid-item').removeClass('disable');

        if (filters !== 'all') {
            var selected =  $(this).closest('.portfolio').find('.grid-item');
            for(var i = 0; i < selected.length; i++){
                if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
                }
            }               
        }
    });

    // Setting up Countdown

    $('.countdown').countdown('2019/12/20').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="counter mr-5 mb-lg-0"><span class="counter">%d</span> <span class="label text-muted">day%!d</span></div> '
          + '<div class="counter mr-5 mb-lg-0"><span class="counter">%H</span> <span class="label text-muted">hr%!H</span></div> '
          + '<div class="counter mr-5 mb-lg-0"><span class="counter">%M</span> <span class="label text-muted">min%!M</span></div> '
          + '<div class="counter"><span class="counter">%S</span> <span class="label text-muted">sec%!S</span></div>'));
    });

})(jQuery);