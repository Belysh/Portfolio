const $ = require('jquery');

let blog = (function() {
    let item = $(".blog-menu-list__item");
    let list = $('.blog-menu-list');
    let articlesList = $('.articles-list');
    let listWidth = parseInt($('.blog__menu-width-checker').css('width'));

    let widthChange = function () {
        if ($(window).width() > 992) {
            let width = parseInt($('.blog__menu-width-checker').css('width'));
            list.css({
                'width': width
            });
        }
    };

    let scrollPage = function () {
        let scroll = window.pageYOffset;
        for (let i = 0; i <= list.children.length + 1; i ++) {
            let obj = i + 1;
            let currentArticle = $('.articles-list__item:nth-child('+ obj +')').offset().top;

            if (scroll >= currentArticle - 300) {
                $('.blog-menu-list').find('.blog-menu-list__item--active').removeClass('blog-menu-list__item--active');
                $('.blog-menu-list__item:nth-child('+ obj +')').addClass('blog-menu-list__item--active');
            }
        }
    };

    let clickOnMenu = function(e) {
        let index = $(e.target).index() + 1;
        let headline = $('.articles-list__item:nth-child('+ index +') > .articles-list__headline');
        let scrollingSize = headline.offset().top;

        $('html, body').animate({scrollTop: scrollingSize}, 500);
    };

    let pageScroll = function() {
        if ($(window).width() >= 768) {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            let width = parseInt($('.blog__menu-width-checker').css('width'));
    
            if (scrolled < list.offset().top) {
                list.css({
                    'position': 'static',
                    'top': 'none',
                    'left': 'none',
                    'width': 'auto'
                });
            }
            if (scrolled >= list.offset().top - 85) {
                list.css({
                    'position': 'fixed',
                    'top': '85px',
                    'left': '80px',
                    'width': width
                });
            }
        }
    }

    let styleClean = function () {
        if ($(window).width() < 768) {
            list.removeAttr('style');
        }
    }

    let popup = function () {
        if ($(window).width() < 768) {
            if ($('.blog__menu').hasClass('open-menu')) {
                $('.blog__menu').removeClass('open-menu');
                $('.blog__menu').animate({
                    'left': '-80%'
                }, 1000);
            } else {
                $('.blog__menu').addClass('open-menu');
                $('.blog__menu').animate({
                    'left': '0'
                }, 1000);
            }
        }
    }

    let addListener = function () {
        $(document).on('scroll', scrollPage);
        $(".blog-menu-list__item").on('click', clickOnMenu);
        $(window).on('scroll', pageScroll)
        $(window).on('resize', widthChange);
        $(window).on('resize', styleClean);
        $('.blog__menu-circle').on('click', popup);     
    }

    let blogInit = function () {
        if (list.length > 0) {
            addListener()
        }
    }

    module.exports = blogInit;
})();
