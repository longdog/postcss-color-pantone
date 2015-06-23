'use strict';

var colors = require('./colors.json');
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-color-pantone', function () {
    return function (css) {
        css.replaceValues(/pantone\s*\(\s*[\'\"']?([\d\w\s-]+)[\'\"']?\s*\)/g, { fast: 'pantone' },
            function (origin, name) {
                var color = colors[name.toLowerCase()];
                if ( color ) {
                     return color;
                } else {
                     return origin;
                }
            });
    };
});