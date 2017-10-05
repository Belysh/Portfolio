
/*const water = require('./water/water');
water()

/*const water = require('./water/water');
    water();*/
/*const slider = require('./common/slider');
const $ = require('jquery'); // если будет нужен



slider(); // инициализируем слайдер*/
const $ = require('jquery');

import {map} from './common/map';
import {menu} from './common/menu';
import {scroll} from './common/scroll';
import {blog} from './common/blog';

const map = document.getElementById('map');
const canvas = $(".intro-background__canvas");
const blogList = $('.blog-menu-list');
const water = require('./water/water');

water()




if (map) {
    google.maps.event.addDomListener(window, 'load', map.init);
}

if (menu) {
    menu.init();
}

if (blogList.length) {
    blog.init()
}

