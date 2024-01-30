/* global AFRAME */
AFRAME.registerComponent('event-manager', {

  init: function () {
    this.bindMethods();

    this.backGesturesButton = document.querySelector('#backGestureButton');

    this.buttonToGeometry = {
      'boxButton': this.boxGeometryEl,
      'sphereButton': this.sphereGeometryEl,
      'torusButton': this.torusGeometryEl
    };

    this.backGesturesButton.addEventListener('click', this.onClick);
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (evt) {
    var targetEl = evt.target;

    if (targetEl === this.backGesturesButton) {
      window.location.href = "../hand-tracking/";
    }
  }
});
