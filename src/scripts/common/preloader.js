const $ = require('jquery');

document.body.onload = function () {
    let preloaderBlock = $('.preloader');
    let text = $('#loader__text');

    $('#loader__text').animate({ num: 100}, {
        duration: 2000,
        step: function (num){
            this.innerHTML = (num).toFixed(0) + '%'
        }
    });

    setTimeout (function () {
        preloaderBlock.addClass('done');
    }, 2000)
};

