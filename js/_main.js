// Off Canvas Sliding

$(document).ready(function() {
    $('.js-menu-trigger').on('click touchstart', function(e) {
        $('body').toggleClass('no-scroll');
        $('.js-menu, .js-menu-screen').toggleClass('is-visible');
        $('.sliding-menu-button').toggleClass('slide close');
        $('#masthead, #page-wrapper').toggleClass('slide');
        e.preventDefault();
    });
    $('.js-menu-screen').on('click touchstart', function(e) {
        $('body').toggleClass('no-scroll');
        $('.js-menu, .js-menu-screen').toggleClass('is-visible');
        $('.sliding-menu-button').toggleClass('slide close');
        $('#masthead, #page-wrapper').toggleClass('slide');
        e.preventDefault();
    });
});

// FitVids
$(document).ready(function() {
    // Target your .container, .wrapper, .post, etc.
    $("#main").fitVids();
});

//SLIDER
$(document).ready(function() {

    $("#owl-example").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});
