"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Course = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Course = function Course(id, name, creditHours) {
  _classCallCheck(this, Course);

  this.id = id;
  this.name = name;
  this.creditHours = creditHours;
};

exports.Course = Course;