"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB = void 0;

var _sqlite = require("sqlite");

var _sqlite2 = require("sqlite3");

function openDepartmentDB() {
  console.log("opening DB connection");

  try {
    return (0, _sqlite.open)({
      filename: "./test-task/department.db",
      driver: _sqlite2.Database
    });
  } catch (error) {
    console.log(error);
  }
}

function createDepartmentTable(db) {
  try {
    console.log("creating Student table");
    return db.exec("CREATE TABLE department (id INTEGER, name TEXT)");
  } catch (error) {
    console.log(error);
  }
}

function insertDepartmentRecord(db, data) {
  try {
    var csdept_id = data.csdept_id,
        csdept_name = data.csdept_name,
        itdepart_id = data.itdepart_id,
        itdepart_name = data.itdepart_name;
    console.log("inserting department record");
    return db.exec("INSERT INTO department VALUES (".concat(csdept_id, ", '").concat(csdept_name, "'),(").concat(itdepart_id, ",'").concat(itdepart_name, "');"));
  } catch (error) {
    console.log(error);
  }
}

function selectDepartmentRecord(db) {
  try {
    console.log("selecting department record");
    return db.get("SELECT id, name FROM department");
  } catch (error) {
    console.log(error);
  }
}

var DB = {
  openDB: openDepartmentDB,
  createTable: createDepartmentTable,
  insertDepartment: insertDepartmentRecord,
  selectDepartment: selectDepartmentRecord
};
exports.DB = DB;