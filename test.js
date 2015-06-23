'use strict';

var postcss = require('postcss');
var pantone = require('./');
var assert = require('assert');

var input = 'a{ color: pantone( "green c" ) };';

describe('postcss-color-pantone', function() {
  it('convert pantone color to hex rgb', function() {
    assert(postcss(pantone).process(input).css === 'a{ color: #00ab84 };');
  });
});
