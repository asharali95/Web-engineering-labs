import { Student } from "./Student";
import { University } from "./University";
import { Course } from "./Course";

var courseInstance = new Course(
  "SWE-315",
  "Introduction to Web Engineering",
  "3+1"
);
var universityInstance = new 
University("Sir Syed University", "SSUET LOGO");
var studentInstance = new Student(
  163,"Asim Ansari","30-7-1997",
  courseInstance
);
studentInstance.belongsToUniversity
(universityInstance);
studentInstance.enroll();
