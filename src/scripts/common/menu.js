const $ = require('jquery');

let menu = (function () {
    let openButton = $(".menu-icon");
    let menuBlock = $(".menu-container");
    let closeButton = $(".close-button");
    let wrapper = $(".wrapper");

    let openMenu = function() {
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
    };

    let closeMenu = function() {
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
            'height': 'auto'
        });
    };

    let addListener = function () {
        $(".menu-icon").on('click', openMenu)
        $(".close-button").on('click', closeMenu)
    }

    let menuInit = function () {
        if (openButton.length > 0) {
            addListener();
        }
    }

    module.exports = menuInit;
})();



















