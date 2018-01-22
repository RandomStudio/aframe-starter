require('aframe');
require('aframe-environment-component');

console.log('hello world');

AFRAME.registerComponent('scale-on-mouseenter', {
  schema: {
    to: {default: '2.1 2.1 2.1'}
  },
  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('scale', data.to);
    });
  }
});