const $ = require('jquery');

let flip = (function () {
    let flipElement = $('.intro-block');
    let backFlipButton = $('.authorization-button');
    let frontFlipButton = $('#front-flip-button');
    let flag = true;

    let flipItBack = function () {
        if (flag === true) {
            flag = false;
            console.log(flag);

            backFlipButton.css({
                'display': 'none'
            });
            flipElement.addClass('face-down');
            setTimeout(function () {
                $('.intro-block__front').css({
                    'display': 'none'
                });
                $('.intro-block__back').css({
                    'display': 'block'
                });
            }, 600)

            setTimeout(function () {
                flag = true;
            }, 2300);
        }
    }

    let missClick = function (e) {
        if (flag === true) {
            flag = false;

            if (!flipElement.is(e.target) && !backFlipButton.is(e.target) && flipElement.has(e.target).length === 0) {
                backFlipButton.css({
                    'display': 'block'
                });
                flipElement.removeClass('face-down');
                setTimeout(function () {
                    $('.intro-block__front').css({
                        'display': 'flex'
                    });
                    $('.intro-block__back').css({
                        'display': 'none'
                    });
                }, 600)
            }

            setTimeout(function () {
                flag = true;
            }, 2300);
        }  
    }

    let flipItFront = function () {
        if (flag === true) {
            flag = false;

            backFlipButton.css({
                'display': 'block'
            });
            flipElement.removeClass('face-down');
            setTimeout(function () {
                $('.intro-block__front').css({
                    'display': 'flex'
                });
                $('.intro-block__back').css({
                    'display': 'none'
                });
            }, 600)

            setTimeout(function () {
                flag = true;
            }, 2300);
        }        
    }

    let addListener = function () {
        $('.authorization-button').on('click', flipItBack);
        $(document).on('click', missClick);
        $('#front-flip-button').on('click', flipItFront)
    }
    
    let flipInit = function () {
        addListener();
    }
    
    module.exports = flipInit;
})();