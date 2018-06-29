const {
  factory
} = require('boxart-factory');

module.exports = factory({
  "boxes": [{
    "name": "root4",
    "type": "Box3d",
    "properties": [{
      "name": "scaleX",
      "keyframes": [{
        "time": 0,
        "value": 1,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 49,
        "value": 0.8,
        "easing": "linear",
        "format": "animation"
      }]
    }, {
      "name": "scaleY",
      "keyframes": [{
        "time": 0,
        "value": 1,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 49,
        "value": 0.8,
        "easing": "linear",
        "format": "animation"
      }]
    }, {
      "name": "perspective",
      "keyframes": [{
        "time": 0,
        "value": 1000,
        "easing": "linear",
        "format": "animation"
      }]
    }, {
      "name": "translateZ",
      "keyframes": [{
        "time": 79,
        "value": 10,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 149,
        "value": 80,
        "easing": "linear",
        "format": "animation"
      }]
    }]
  }, {
    "name": "root2",
    "type": "Box3d",
    "properties": [{
      "name": "translateX",
      "keyframes": [{
        "time": 0,
        "value": 0,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 49,
        "value": 0,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 10,
        "value": 0,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 149,
        "value": 0,
        "easing": "linear",
        "format": "animation"
      }]
    }, {
      "name": "blur",
      "keyframes": [{
        "time": 79,
        "value": 0,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 149,
        "value": 5,
        "easing": "linear",
        "format": "animation"
      }]
    }, {
      "name": "opacity",
      "keyframes": [{
        "time": 79,
        "value": 1,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 149,
        "value": 0,
        "easing": "linear",
        "format": "animation"
      }]
    }, {
      "name": "perspective",
      "keyframes": [{
        "time": 0,
        "value": 1000,
        "easing": "linear",
        "format": "animation"
      }]
    }, {
      "name": "rotateY",
      "keyframes": [{
        "time": 0,
        "value": 0,
        "easing": "linear",
        "format": "animation"
      }, {
        "time": 49,
        "value": -10,
        "easing": "linear",
        "format": "animation"
      }]
    }]
  }, {
    "name": "root3",
    "type": "Box3d",
    "properties": [{
      "name": "perspective",
      "keyframes": [{
        "time": 0,
        "value": 1000,
        "easing": "linear",
        "format": "animation"
      }]
    }]
  }],
  "duration": 150
});
