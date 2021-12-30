import { faculty } from "./faculties";
import { student } from "./students";
import { event } from "./events";

var studentsElement = document.querySelector(".student");
var facultyElement = document.querySelector(".faculty");
var eventsElement = document.querySelector(".events");

studentsElement.innerHTML = `
<h1>Student Details</h1>
<h2>${student.name}</h2>
 <h2>${student.rollNo}</h2>
<h2>${student.semester}</h2>`;

facultyElement.innerHTML = `
<h1>Faculty Details</h1>
<h2>${faculty.name}</h2>
 <h2>${faculty.department}</h2>
 <h2>${faculty.course}</h2>`;

eventsElement.innerHTML = `
<h1>Event Details</h1>
<h2>${event.title}</h2>
<h2>${event.creditHours}</h2>`;
