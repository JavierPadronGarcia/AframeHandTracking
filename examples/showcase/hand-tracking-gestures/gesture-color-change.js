AFRAME.registerComponent("gesture-color-change", {
  init: function () {
    this.bindMethods();

    this.leftCylinderEl = document.getElementById("cylinderLeft");
    this.rightCylinderEl = document.querySelector("#cylinderRight");

    this.el.sceneEl.addEventListener("gesturestarted", this.onGestureStarted);
    this.el.sceneEl.addEventListener("gestureended", this.onGestureEnded);
    this.el.sceneEl.addEventListener("gesturemoved", this.onGestureMoved);
  },

  bindMethods: function () {
    this.onGestureStarted = this.onGestureStarted.bind(this);
    this.onGestureEnded = this.onGestureEnded.bind(this);
    this.onGestureMoved = this.onGestureMoved.bind(this);
  },

  onGestureStarted: function (evt) {
    if (evt.detail.gestureName == "Grip") {
      if (evt.detail.hand == "left") {
        this.leftCylinderEl.setAttribute("material", "color", "lime");
      } else {
        this.rightCylinderEl.setAttribute("material", "color", "lime");
      }
    }
    if (evt.detail.gestureName == "ThumbsUp") {
      if (evt.detail.hand == "left") {
        this.leftCylinderEl.setAttribute("material", "color", "blue");
      } else {
        this.rightCylinderEl.setAttribute("material", "color", "blue");
      }
    }
    if (evt.detail.gestureName == "Shaka") {
      if (evt.detail.hand == "left") {
        this.leftCylinderEl.setAttribute("material", "color", "red");
      } else {
        this.rightCylinderEl.setAttribute("material", "color", "red");
      }
    }
    if (evt.detail.gestureName == "One") {
      if (evt.detail.hand == "left") {
        this.leftCylinderEl.setAttribute("material", "color", "yellow");
      } else {
        this.rightCylinderEl.setAttribute("material", "color", "yellow");
      }
    }
    if (evt.detail.gestureName == "Two") {
      if (evt.detail.hand == "left") {
        this.leftCylinderEl.setAttribute("material", "color", "orange");
      } else {
        this.rightCylinderEl.setAttribute("material", "color", "orange");
      }
    }
  },

  onGestureEnded: function (evt) {
    if (evt.detail.hand == "left") {
      this.leftCylinderEl.setAttribute("material", "color", "white");
    } else {
      this.rightCylinderEl.setAttribute("material", "color", "white");
    }
  },

  onGestureMoved: function (evt) { },
});

