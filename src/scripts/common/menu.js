const $ = require('jquery');

export let menu = (function () {
    let openButton = $(".menu-icon");
    let menuBlock = $(".menu-container");
    let closeButton = $(".close-button");
    let wrapper = $(".wrapper");

    openButton.on('click', function() {
        let button = $(this)
        menuBlock.css({
            'transform': 'translate(0)'
        });
        button.css({
            'display': 'none'
        });
        closeButton.css({
            'display': 'block'
        });
        wrapper.css({
            'width': '100vw',
            'height': '100vh',
            'overflow': 'hidden'
        });
    });

    closeButton.on('click', function() {
        let button = $(this)
        menuBlock.css({
            'transform': 'translateY(-100%)'
        });
        button.css({
            'display': 'none'
        });
        openButton.css({
            'display': 'block'
        });
        wrapper.css({
            'width': 'auto',
            'height': 'auto',
            'overflow': 'visible'
        });
    });
})();



















