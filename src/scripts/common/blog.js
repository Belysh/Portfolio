const $ = require('jquery');

export let blog = (function() {
    let headline = $(".articles-list__headline");
    let item = $(".blog-menu-list__item");
    let list = $('.blog-menu-list')

    item.on('click', function() {
        let object = $(this);
        let objectIndex = object.index() + 2;
        let headerSection = $("#scroll-element");
        let article = $('.articles-list__item:nth-child('+ objectIndex +')');
        
        let activeItem = list.find('.blog-menu-list__item--active');
        activeItem.removeClass('blog-menu-list__item--active');

        if (article.length > 0) {

            let scrollingSize = article.offset().top - parseInt(headerSection.css('height'));

            $('html, body').animate({scrollTop: scrollingSize}, 500);
            object.addClass('blog-menu-list__item--active');
        } else {
            $('html, body').animate({scrollTop: parseInt($('.wrapper').css('height'))}, 500);
            object.addClass('blog-menu-list__item--active');
        }
    });

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled < list.offset().top) {
            list.css({
                'position': 'static'
            });
        }
        if (scrolled >= list.offset().top - 85) {
            list.css({
                'position': 'fixed',
                'top': '85px'
            });
        }
      }
})();