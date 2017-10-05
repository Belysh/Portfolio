const $ = require('jquery');

export let scroll = (function() {
    let scrollButton = $('.arrow-down');
    let scrollElement = $('#scroll-element')
    /*let scrollSize = $(window).height()*0.8;*/
    let scrollSize = parseInt(scrollElement.css('height')) - parseInt($('.triangle-element').css('height'));

    scrollButton.on('click', function() {
        $('html, body').animate({scrollTop: scrollSize}, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() <= scrollSize -20) {
            scrollButton.css({
                'display': 'block'
            });
        } else {
            scrollButton.css({
               'display': 'none'
            });
        }
    });
})(); 