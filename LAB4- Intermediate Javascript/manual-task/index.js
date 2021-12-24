import { HTTP } from "./http.js";
import { DB } from "./database.js";
import { Logger } from "./logging.js";
//Putting the code under try-catch block to avoid crashing the appliation

//and handling the error gracefully
try {
  //SSUET Home Page - HTTP GET
  getUniversityHomePage();
  //Perform Student DB Operations
  performStudentDBOperations();
} catch (e) {
  //Logging the info in case anything goes wrong
  Logger.debug("Something went wrong");
}
function getUniversityHomePage() {
  HTTP.getSSUETHomePage();
}
function performStudentDBOperations() {
  try {
    DB.openDB().then((db) => {
      DB.createTable(db).then(() => {
        DB.insertStudent(db).then(() => {
          DB.selectStudent(db).then((student) => {
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
