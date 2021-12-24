import { CS } from "./CS";
import { DB } from "./database";
import { IT } from "./IT";

var CSinstance = new CS(101, "Computer Science Dept");
var ITinstance = new IT(102, "Biomedical Department");
CSinstance.display();
ITinstance.display();
//setting name using set_name function
CSinstance.set_name("Computer System Depart");
console.log("after changing");
CSinstance.display();
// -------------------------------------------
// database work
const data = {
  csdept_id: CSinstance.dept_id,
  csdept_name: CSinstance.dept_name,
  itdepart_id: ITinstance.dept_id,
  itdepart_name: ITinstance.dept_name,
};
DB.openDB().then((db) => {
  DB.createTable(db).then(() => {
    DB.insertDepartment(db, data).then(() => {
      DB.selectDepartment(db).then((department) => {
        console.log(department);
      });
    });
  });
});
