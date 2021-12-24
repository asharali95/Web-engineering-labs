"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Student = function Student(id, name, dateOfBirth) {
  var _this = this;

  _classCallCheck(this, Student);

  _defineProperty(this, "enroll", function () {
    console.log("".concat(_this.name, " is enrolled Successfully\n Details:\n      \nName:").concat(_this.name, "\nDate Of Birth: ").concat(_this.dateOfBirth));
  });

  this.id = id;
  this.name = name;
  this.dateOfBirth = dateOfBirth;
};

exports.Student = Student;