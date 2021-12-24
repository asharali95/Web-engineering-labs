"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.University = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var University = function University(name) {
  var _this = this;

  var _image = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  _classCallCheck(this, University);

  _defineProperty(this, "setImage", function (image) {
    _this.image = image;
  });

  this.name = name;
  this.image = _image;
};

exports.University = University;