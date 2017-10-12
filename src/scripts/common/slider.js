const $ = require('jquery');

let slider = (function () {
    let scrollUp = $('.slider__slide-forward-side');
    let scrollDown = $('.slider__slide-back-side');
    let upSlider = $('.slide-forward-list');
    let downSlider = $('.slide-back-list');
    let slider = $('.slider-list');
    let descSlider = $('.description-list');
    let flag = true;
    let zindexDown = 6;
    let zindexUp = 6;
    let sliderUpHeight = '-' + $('.slide-forward-list').css('height');

    $('.back-slide-active').css({
        'top': '0'
    });

    $('.forward-slide-active').css({
        'top': '0'
    })

    let scrollingUp = function () {
        let nextSlideUp = upSlider.find('.forward-slide-active:last').next();
        let nextSlideDown = downSlider.find('.back-slide-active:last').next();
        let nextSlide = slider.find('.active-slide').next();
        let nextDescriptionSlide = descSlider.find('.active-slide').next();

        if (flag === true) {
            flag = false;

            if (nextSlide.length === 1) {
                nextSlide.addClass('active-slide');
                nextSlide.prev().removeClass('active-slide');
            } else {
                slider.find('.active-slide').removeClass('active-slide');
                slider.children().first().addClass('active-slide');
            }

            if (nextDescriptionSlide.length === 1) {
                nextDescriptionSlide.addClass('active-slide');
                nextDescriptionSlide.prev().removeClass('active-slide');
            } else {
                descSlider.find('.active-slide').removeClass('active-slide');
                descSlider.children().first().addClass('active-slide');
            }

            if (nextSlideUp.length === 1) {
                nextSlideUp.animate({
                    'z-index': zindexUp
                }, 0, function () {
                    nextSlideUp.animate({
                        'top': '0'
                    }, 800, function () {
                        nextSlideUp.addClass('forward-slide-active');
                        nextSlideUp.prev().removeClass('forward-slide-active').removeAttr('style');
                        zindexUp++
                    });
                });
            } else {
                upSlider.find('.forward-slide-active').css({
                    'z-index': '5'
                });
                zindexUp = 6;
    
                upSlider.find('.slide-forward-list__item').first().animate({
                    'z-index': zindexUp
                }, 0, function () {
                    upSlider.find('.slide-forward-list__item').first().animate({
                        'top': '0'
                    }, 800, function () {
                        upSlider.find('.slide-forward-list__item:last').removeClass('forward-slide-active').removeAttr('style');
                        upSlider.children().first().addClass('forward-slide-active');
                        zindexUp++
                    });
                });
            }
    
            if (nextSlideDown.length === 1) {
                nextSlideDown.animate({
                    'z-index': zindexDown
                }, 0, function () {
                    nextSlideDown.animate({
                        'top': '0'
                    }, 800, function () {
                        nextSlideDown.addClass('back-slide-active');
                        nextSlideDown.prev().removeClass('back-slide-active').removeAttr('style');
                        zindexDown++;
                        flag = true;
                    });
                });
            } else {
                downSlider.find('.back-slide-active').css({
                    'z-index': '5'
                });
                zindexDown = 6;
    
                downSlider.children().first().animate({
                    'z-index': zindexDown
                }, 0, function () {
                    downSlider.children().first().animate({
                        'top': '0'
                    }, 800, function () {
                        downSlider.find('.slide-back-list__item:last').removeClass('back-slide-active').removeAttr('style');
                        downSlider.children().first().addClass('back-slide-active');
                        zindexDown++;
                        flag = true;
                    });
                });
            }


        }
    };

    let scrollingDown = function () {
        let prevSlideDown = downSlider.find('.back-slide-active').first().prev();
        let prevSlideUp = upSlider.find('.forward-slide-active').first().prev();
        let prevSlide = slider.find('.active-slide').prev();
        let prevDescriptionSlide = descSlider.find('.active-slide').prev();


        if (flag === true) {
            flag = false;

            if (prevSlide.length === 1) {
                prevSlide.addClass('active-slide');
                prevSlide.next().removeClass('active-slide');
            } else {
                slider.find('.active-slide').removeClass('active-slide');
                slider.find('.slider-list__item:last').addClass('active-slide');
            }
    
            if (prevDescriptionSlide.length === 1) {
                prevDescriptionSlide.addClass('active-slide');
                prevDescriptionSlide.next().removeClass('active-slide');
            } else {
                descSlider.find('.active-slide').removeClass('active-slide');
                descSlider.find('.description-list__item:last').addClass('active-slide');
            }

            if (prevSlideDown.length === 1) {
                prevSlideDown.animate({
                    'top': '100%',
                    'z-index': zindexDown
                }, 0, function () {
                    prevSlideDown.animate({
                        'top': '0'
                    }, 800, function () {
                        prevSlideDown.addClass('back-slide-active');
                        prevSlideDown.next().removeClass('back-slide-active').removeAttr('style');
                        zindexDown++;
                        flag = true;
                    });
                });
            } else {
                downSlider.find('.back-slide-active').css({
                    'z-index': '5'
                });
                zindexDown = 6;
    
                downSlider.find('.slide-back-list__item:last').animate({
                    'top': '100%',
                    'z-index': zindexDown
                }, 0, function () {
                    downSlider.find('.slide-back-list__item:last').animate({
                        'top': '0'
                    }, 800, function () {
                        downSlider.children().first().removeClass('back-slide-active').removeAttr('style');
                        downSlider.find('.slide-back-list__item:last').addClass('back-slide-active');
                        zindexDown++;
                        flag = true;
                    });
                });
            }
            
            if (prevSlideUp.length === 1) {
                prevSlideUp.animate({
                    'top': sliderUpHeight,
                    'z-index': zindexUp
                }, 0, function () {
                    prevSlideUp.animate({
                        'top': '0'
                    }, 800, function () {
                        prevSlideUp.addClass('forward-slide-active');
                        prevSlideUp.next().removeClass('forward-slide-active').removeAttr('style');
                        zindexUp++
                    });
                });
            } else {
                upSlider.find('.forward-slide-active').css({
                    'z-index': '5'
                });
                zindexUp = 6;
    
                upSlider.find('.slide-forward-list__item:last').animate({
                    'top': sliderUpHeight,
                    'z-index': zindexUp
                }, 0, function () {
                    upSlider.find('.slide-forward-list__item:last').animate({
                        'top': '0'
                    }, 800, function () {
                        upSlider.children().first().removeClass('forward-slide-active').removeAttr('style');
                        upSlider.find('.slide-forward-list__item:last').addClass('forward-slide-active');
                        zindexUp++
                    });
                });
            }
        }
    };

    let addListener = function () {
        $('.slider__slide-back-side').on('click', scrollingDown);
        $('.slider__slide-forward-side').on('click', scrollingUp)
    }

    let sliderInit = function () {
        if (slider.length > 0) {
            addListener();
        }
    }

    module.exports = sliderInit;
})();














