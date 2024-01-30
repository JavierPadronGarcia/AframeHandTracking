/* global AFRAME */
AFRAME.registerComponent('event-manager', {

  init: function () {
    this.bindMethods();

    this.boxGeometryEl = document.querySelector('#boxGeometry');
    this.sphereGeometryEl = document.querySelector('#sphereGeometry');
    this.torusGeometryEl = document.querySelector('#torusGeometry');

    this.boxButtonEl = document.querySelector('#boxButton');
    this.sphereButtonEl = document.querySelector('#sphereButton');
    this.torusButtonEl = document.querySelector('#torusButton');
    this.darkModeButtonEl = document.querySelector('#darkModeButton');

    this.changeGestureSceneButton = document.querySelector('#gestureSceneButton');
    this.changeGrabSceneButton = document.querySelector('#grabSceneButton');

    this.backGrabButton = document.querySelector('#backGrabButton');

    this.buttonToGeometry = {
      'boxButton': this.boxGeometryEl,
      'sphereButton': this.sphereGeometryEl,
      'torusButton': this.torusGeometryEl
    };

    this.boxButtonEl.addEventListener('click', this.onClick);
    this.sphereButtonEl.addEventListener('click', this.onClick);
    this.torusButtonEl.addEventListener('click', this.onClick);
    this.darkModeButtonEl.addEventListener('click', this.onClick);
    this.changeGrabSceneButton.addEventListener('click', this.onClick);
    this.backGrabButton.addEventListener('click', this.onClick);
    this.boxButtonEl.addState('pressed');

    this.changeGestureSceneButton.addEventListener('click', this.onClick);
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (evt) {
    var targetEl = evt.target;
    if (targetEl === this.boxButtonEl ||
      targetEl === this.sphereButtonEl ||
      targetEl === this.torusButtonEl) {
      this.boxButtonEl.removeState('pressed');
      this.sphereButtonEl.removeState('pressed');
      this.torusButtonEl.removeState('pressed');
      this.boxGeometryEl.object3D.visible = false;
      this.sphereGeometryEl.object3D.visible = false;
      this.torusGeometryEl.object3D.visible = false;
      this.buttonToGeometry[targetEl.id].object3D.visible = true;
    }

    if (targetEl === this.changeGestureSceneButton) {
      window.location.href = '../hand-tracking-gestures/';
    }

    if (targetEl === this.changeGrabSceneButton) {
      this.changeGrabSceneButton.removeState('pressed');

      document.querySelector('#grabScene').setAttribute('visible', 'true');
      document.querySelector('#grabScene').setAttribute('position', '0 0 0');

      document.querySelector('#change-scene-buttons').setAttribute('visible', 'false');
      document.querySelector('#change-scene-buttons').setAttribute('position', '0 50 0');
    }

    if (targetEl === this.backGrabButton) {
      this.backGrabButton.removeState('pressed');

      document.querySelector('#grabScene').setAttribute('visible', false);
      document.querySelector('#grabScene').setAttribute('position', '0 200 0');

      document.querySelector('#change-scene-buttons').setAttribute('visible', 'true');
      document.querySelector('#change-scene-buttons').setAttribute('position', '0 0 0');
    }

    if (targetEl === this.darkModeButtonEl) {
      if (this.el.sceneEl.is('starry')) {
        targetEl.setAttribute('button', 'label', 'Dark Mode');
        this.el.sceneEl.setAttribute('environment', { preset: 'default' });
        this.el.sceneEl.removeState('starry');
      } else {
        targetEl.setAttribute('button', 'label', 'Light Mode');
        this.el.sceneEl.setAttribute('environment', { preset: 'starry' });
        this.el.sceneEl.addState('starry');
      }
    } else {
      targetEl.addState('pressed');
    }
  }
});
