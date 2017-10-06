const $ = require('jquery');

export let scroll = (function() {
    let scrollButton = $('.arrow-down');
    let scrollElement = $('#scroll-element')

    scrollButton.on('click', function() {
        let scrollSize = parseInt(scrollElement.css('height')) - parseInt($('.triangle-element').css('height'));
        $('html, body').animate({scrollTop: scrollSize}, 1000);
    });
    $(window).scroll(function () {
        let scrollSize = parseInt(scrollElement.css('height')) - parseInt($('.triangle-element').css('height'));
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