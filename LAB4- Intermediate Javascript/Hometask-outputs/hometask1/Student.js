"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = void 0;

var _University = require("./University");

var _Course = require("./Course");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Student = function Student(id, name, dateOfBirth, courses) {
  var _this = this;

  _classCallCheck(this, Student);

  _defineProperty(this, "university", _University.University);

  _defineProperty(this, "courses", _Course.Course);

  _defineProperty(this, "belongsToUniversity", function (university) {
    _this.university = university;
  });

  _defineProperty(this, "enroll", function () {
    console.log("\n".concat(_this.name, " is enrolled Successfully\n      \n\nName:").concat(_this.name, "\nDate Of Birth: \n      ").concat(_this.dateOfBirth, "\n"));
    console.log("\n==University Details==\n");
    console.log("University Name:".concat(_this.university.name, "\n      \nUniversity Logo: ").concat(_this.university.image));
    console.log("\n==Course Details==\n");
    console.log("Course ID:".concat(_this.courses.id, "\nCourse Name:\n      ").concat(_this.courses.name, "\n      \nCredit Hours:").concat(_this.courses.creditHours));
  });

  this.id = id;
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.courses = courses;
};

exports.Student = Student;