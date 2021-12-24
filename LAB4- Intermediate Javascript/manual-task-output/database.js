"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB = void 0;

var _sqlite = require("sqlite");

var _fs = require("fs");

var _sqlite2 = require("sqlite3");

function openStudentDB() {
  console.log("opening DB connection");

  try {
    return (0, _sqlite.open)({
      filename: "./manual-task/student.db",
      driver: _sqlite2.Database
    });
  } catch (error) {
    console.log(error);
  }
}

function createStudentTable(db) {
  try {
    console.log("creating Student table");
    return db.exec("CREATE TABLE student (id INTEGER, name TEXT)");
  } catch (error) {
    console.log(error);
  }
}

function insertStudentRecord(db) {
  try {
    console.log("inserting Student record");
    return db.exec("INSERT INTO student VALUES (1, 'student1')");
  } catch (error) {
    console.log(error);
  }
}

function selectStudentRecord(db) {
  try {
    console.log("selecting Student record");
    return db.get("SELECT id, name FROM student");
  } catch (error) {
    console.log(error);
  }
}

var DB = {
  openDB: openStudentDB,
  createTable: createStudentTable,
  insertStudent: insertStudentRecord,
  selectStudent: selectStudentRecord
};
exports.DB = DB;