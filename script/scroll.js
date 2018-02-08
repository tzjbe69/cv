/* global $ */
let scrollValue = 0;
$(window).scroll(function(event) {
    if (window.pageYOffset > scrollValue && $(window).width() < 880) {
        $('nav').slideUp();
        scrollValue = window.pageYOffset;
    } else if (window.pageYOffset < scrollValue && $(window).width() < 880) {
        $('nav').slideDown();
        scrollValue = window.pageYOffset;
    } else {
        $('nav').show();
    }
});