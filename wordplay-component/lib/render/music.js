"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Music =
/*#__PURE__*/
function () {
  function Music(parentElement, music) {
    _classCallCheck(this, Music);

    _defineProperty(this, "musicElement", void 0);

    this.init(parentElement, music);
  }

  _createClass(Music, [{
    key: "play",
    value: function play() {
      this.musicElement.setAttribute("autoplay", "autoplay");
    }
  }, {
    key: "pause",
    value: function pause() {
      this.musicElement.setAttribute("autoplay", "");
    }
  }, {
    key: "init",
    value: function init(parentElement, music) {
      this.musicElement = document.createElement('audio');
      this.musicElement.setAttribute("src", music);
      parentElement.appendChild(this.musicElement);
    }
  }]);

  return Music;
}();

exports.default = Music;