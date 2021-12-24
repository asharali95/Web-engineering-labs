import { open } from "sqlite";
import { Database } from "sqlite3";
function openStudentDB() {
  console.log("opening DB connection");
  try {
    return open({
      filename: "./manual-task/department.db",
      driver: Database,
    });
  } catch (error) {
    console.log(error);
  }
}

function createStudentTable(db) {
  try {
    console.log("creating Student table");
    return db.exec("CREATE TABLE department (id INTEGER, name TEXT)");
  } catch (error) {
    console.log(error);
  }
}
function insertStudentRecord(db, data) {
  try {
    var { dept_id, dept_name } = data;
    console.log("inserting Student record");
    return db.exec(
      `INSERT INTO department VALUES (${dept_id}, '${dept_name}')`
    );
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
const DB = {
  openDB: openStudentDB,
  createTable: createStudentTable,
  insertStudent: insertStudentRecord,
  selectStudent: selectStudentRecord,
};
export { DB };
