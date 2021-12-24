import { open } from "sqlite";
import { Database } from "sqlite3";
function openDepartmentDB() {
  console.log("opening DB connection");
  try {
    return open({
      filename: "./test-task/department.db",
      driver: Database,
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
    var { csdept_id, csdept_name, itdepart_id, itdepart_name } = data;
    console.log("inserting department record");
    return db.exec(
      `INSERT INTO department VALUES (${csdept_id}, '${csdept_name}'),(${itdepart_id},'${itdepart_name}');`
    );
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
const DB = {
  openDB: openDepartmentDB,
  createTable: createDepartmentTable,
  insertDepartment: insertDepartmentRecord,
  selectDepartment: selectDepartmentRecord,
};
export { DB };
