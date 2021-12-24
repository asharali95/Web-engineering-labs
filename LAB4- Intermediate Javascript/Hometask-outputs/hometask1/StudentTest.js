"use strict";

var _Student = require("./Student");

var _University = require("./University");

var _Course = require("./Course");

var courseInstance = new _Course.Course("SWE-315", "Introduction to Web Engineering", "3+1");
var universityInstance = new _University.University("Sir Syed University", "SSUET LOGO");
var studentInstance = new _Student.Student(163, "Asim Ansari", "30-7-1997", courseInstance);
studentInstance.belongsToUniversity(universityInstance);
studentInstance.enroll();