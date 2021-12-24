"use strict";

var _CS = require("./CS");

var _database = require("./database");

var _IT = require("./IT");

var CSinstance = new _CS.CS(101, "Computer Science Dept");
var ITinstance = new _IT.IT(102, "Biomedical Department");
CSinstance.display();
ITinstance.display(); //setting name using set_name function

CSinstance.set_name("Computer System Depart");
console.log("after changing");
CSinstance.display(); // -------------------------------------------
// database work

var data = {
  csdept_id: CSinstance.dept_id,
  csdept_name: CSinstance.dept_name,
  itdepart_id: ITinstance.dept_id,
  itdepart_name: ITinstance.dept_name
};

_database.DB.openDB().then(function (db) {
  _database.DB.createTable(db).then(function () {
    _database.DB.insertDepartment(db, data).then(function () {
      _database.DB.selectDepartment(db).then(function (department) {
        console.log(department);
      });
    });
  });
});