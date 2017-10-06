const $ = require('jquery');

export let blog = (function() {
    let item = $(".blog-menu-list__item");
    let list = $('.blog-menu-list');
    let articlesList = $('.articles-list');
    let listWidth = parseInt($('.blog__menu-width-checker').css('width'));

    $(window).on('resize', function () {
        let width = parseInt($('.blog__menu-width-checker').css('width'));
        list.css({
            'width': width
        });
    });

    $(document).on('scroll', function () {
        let scroll = window.pageYOffset;
        for (let i = 0; i <= list.children.length + 1; i ++) {
            let obj = i + 1;
            let currentArticle = $('.articles-list__item:nth-child('+ obj +')').offset().top;

            if (scroll >= currentArticle - 300) {
                $('.blog-menu-list').find('.blog-menu-list__item--active').removeClass('blog-menu-list__item--active');
                $('.blog-menu-list__item:nth-child('+ obj +')').addClass('blog-menu-list__item--active');
            }
        }
    });

    item.on('click', function(e) {
        let index = $(e.target).index() + 1;
        let headline = $('.articles-list__item:nth-child('+ index +') > .articles-list__headline');
        let scrollingSize = headline.offset().top;

        $('html, body').animate({scrollTop: scrollingSize}, 500);
    });

    window.onscroll = function() {
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
})();