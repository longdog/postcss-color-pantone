# postcss-color-pantone
[![Build Status][travis-image]][travis-url]

[PostCSS] plugin to convert pantone colors to rgb.

```css
.foo {
  color: pantone('Green C');
}

.bar {
  border: 1px solid pantone("Medium Yellow C"); 
}
```

```css
.foo {
  color: #00ab84;
}

.bar {
  border: 1px solid #ffd900;
}
```

--

### Usage

```js
postcss([ require('postcss-color-pantone') ])
```

See [PostCSS] docs for examples for your environment.

--

### License

MIT

[travis-image]: https://travis-ci.org/longdog/postcss-color-pantone.svg?branch=master
[travis-url]: https://travis-ci.org/longdog/postcss-color-pantone
[PostCSS]: https://github.com/postcss/postcss