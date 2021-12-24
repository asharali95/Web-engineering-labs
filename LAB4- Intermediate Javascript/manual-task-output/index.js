"use strict";

var _http = require("./http.js");

var _database = require("./database.js");

var _logging = require("./logging.js");

//Putting the code under try-catch block to avoid crashing the appliation
//and handling the error gracefully
try {
  //SSUET Home Page - HTTP GET
  getUniversityHomePage(); //Perform Student DB Operations

  performStudentDBOperations();
} catch (e) {
  //Logging the info in case anything goes wrong
  _logging.Logger.debug("Something went wrong");
}

function getUniversityHomePage() {
  _http.HTTP.getSSUETHomePage();
}

function performStudentDBOperations() {
  try {
    _database.DB.openDB().then(function (db) {
      _database.DB.createTable(db).then(function () {
        _database.DB.insertStudent(db).then(function () {
          _database.DB.selectStudent(db).then(function (student) {
            console.log(student.id);
            console.log(student.name);
          });
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
}