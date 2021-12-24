"use strict";

// functions
// const { async } = require("regenerator-runtime");
// var calculator = (op1, op2, operator) => {
//   console.log(operator(op1, op2));
// };
// var addition = (op1, op2) => op1 + op2;
// var subtraction = (op1, op2) => op1 - op2;
// var multiplication = (op1, op2) => op1 * op2;
// var division = (op1, op2) => {
//   if (op2 === 0) return "cannot divide by zero";
//   else return op1 / op2;
// };
// console.log("\n==calculator==\n");
// calculator(5, 5, addition);
// calculator(5, 5, subtraction);
// calculator(5, 5, multiplication);
// calculator(5, 5, division);
// -----------------------------------------------
// this keyword
// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }
// var student1 = {
//   firstName: "Ashar",
//   lastName: "Ali",
//   getFullName,
// };
// var student2 = {
//   firstName: "Asim",
//   lastName: "Ansari",
//   getFullName,
// };
// console.log(student1.getFullName());
// console.log(student2.getFullName());
// -----------------------------------------------
// Closure
// console.log(`==Counter==\ntime Interval:1 second\n`);
// var timer = (function () {
//   var counter = 0;
//   var tick = (limit) => {
//     setInterval(() => {
//       process.stdout.write(`${counter++} `);
//     }, limit); };
//   var start = (limit) => tick(limit);
//   return { start,};
// })();
// timer.start(1000);
// -----------------------------------------------
// Modules
// var Student = (() => {
//   var Courses = (() => {
//     let name;
//     var setCourseName = (n) => (name = n);
//     var showCourseName = () => console.log(`Course Name: ${name}`);
//     return {
//       setCourseName,
//       showCourseName,
//     };
//   })();
//   var Result = (() => {
//     let grade;
//     var setGrade = (g) => (grade = g);
//     var showGrade = () => console.log(`Grade: ${grade}`);
//     return {
//       setGrade,
//       showGrade,
//     };
//   })();
//   return {
//     Courses,
//     Result,
//   };
// })();
// Student.Courses.setCourseName("SWE-315 - Web Engineering");
// Student.Courses.showCourseName();
// Student.Result.setGrade("A");
// Student.Result.showGrade();
// -----------------------------------------------
//Asynchronicity
// var getProgramResults = async (name) => {
//   let programRunPromise = new Promise((res, rej) => {
//     if (name === "Ashar") {
//       res("Result: A");
//     }
//     rej("Not Found");
//   });
//   try {
//     var result = await programRunPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }};
// getProgramResults("Ashar");
// console.log("Should execute before promise");
// -----------------------------------------------
// Functional Inheritance
// class Program {
//   run = () => console.log("program is running...");
// }
// class TeacherProgram {
//   debug = () => console.log("debugging...");
// }
// class StudentProgram {
//   release = () => console.log("releasing...");
// }
// const ProgramInstance = new Program();
// TeacherProgram.prototype = ProgramInstance;
// StudentProgram.prototype = ProgramInstance;
// let TeacherInstance = new TeacherProgram();
// let StudentInstance = new StudentProgram();
// console.log("==Teacher Program==");
// TeacherInstance.run(); // inherited from Program class
// console.log("==Student Program==");
// StudentInstance.run(); // inherited from Program class
// -----------------------------------------------
// Home Task
// -----------------------------------------------
// Functions and Modules
var publishSubscribeExamResults = function () {
  var subscribers = [];

  var subscribe = function subscribe(user) {
    return subscribers.push(user);
  };

  var publish = function publish() {
    subscribers.forEach(function (subscriber) {
      return console.log("".concat(subscriber, " is published!"));
    });
  };

  return {
    subscribe: subscribe,
    publish: publish
  };
}();

var names = ["Zeeshan", "Amir", "Mohsin"];
names.forEach(function (name) {
  return publishSubscribeExamResults.subscribe(name);
});
publishSubscribeExamResults.publish(); // -----------------------------------------------
//Modules
// class Class {
//   constructor(name, teacher, notes, lecture) {
//     this.className = name;
//     this.teacherName = teacher.name;
//     this.notesName = notes.name;
//     this.lectureName = lecture.name; }
//   displayInfo() {
//     console.log(`\n==${this.className}==\nTeacher: ${this.teacherName}
//     \nNotes: ${this.notesName}\nLecture: ${this.lectureName}`); } }
// class Teacher {
//   constructor(teacherName) { this.name = teacherName;} }
// class Notes {
//   constructor(notesName) {this.name = notesName;} }
// class Lecture {
//   constructor(lectureName) { this.name = lectureName; } }
// var classInstance = new Class(
//   "Web Engineering", new Teacher("Miss Fatima"),
//   new Notes("Developing Web Application with WebML"),
//   new Lecture("Week-04")
// );
// classInstance.displayInfo();
// -----------------------------------------------
// var classAlarm = (minutes) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => res("Class is Over"), minutes * 60 * 1000);
//   }); };
// var alarmMessage = async () => {
//   try {
//     console.log("Class has been commenced");
//     var message = await classAlarm(30);
//     console.log(message);
//   } catch (error) {
//     console.log(error.message);
//   } };
// alarmMessage();
// -----------------------------------------------
// Functional Inheritance
// class Gadget {
//   constructor(startTime, salePrice) {
//     this.startTime = startTime;
//     this.salePrice = salePrice;
//   }
//   start = () => console.log(`started at ${this.startTime}`);
//   end = () => console.log(`ended`);
//   connectToInternet = () => console.log("connected to internet");
// }
// class StopWatch {}
// class SmartWatch {}
// StopWatch.prototype = new Gadget(new Date(), 750);
// const stopwatchInstance = new StopWatch();
// stopwatchInstance.start();
// SmartWatch.prototype = new Gadget(new Date(), 75000);
// const smartWatchinstance1 = new SmartWatch();
// const smartWatchinstance2 = new SmartWatch();
// smartWatchinstance1.connectToInternet();
// smartWatchinstance2.connectToInternet();