"use strict";

var _RegularStudent = require("./RegularStudent");

var _ExecutiveStudent = require("./ExecutiveStudent");

var regularStudentInstance = new _RegularStudent.RegularStudent(154, "Muhammad Zeeshan", "24-2-1998");
var executiveStudentInstance = new _ExecutiveStudent.ExecutiveStudent(163, "Asim", "30-6-1997");
regularStudentInstance.enroll();
executiveStudentInstance.enroll;
regularStudentInstance.attendLab();
executiveStudentInstance.attendTheory();