import { RegularStudent } from "./RegularStudent";
import { ExecutiveStudent } from "./ExecutiveStudent";
var regularStudentInstance = new RegularStudent(
  164,
  "Rohail Naveed",
  "24-2-1998"
);
var executiveStudentInstance = new ExecutiveStudent(163, "Asim", "30-6-1997");
regularStudentInstance.enroll();
executiveStudentInstance.enroll;
regularStudentInstance.attendLab();
executiveStudentInstance.attendTheory();
