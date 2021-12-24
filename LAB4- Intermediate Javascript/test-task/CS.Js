import { Department } from "./Department";
class CS extends Department {
  constructor(dept_id, dept_Name) {
    super(dept_id, dept_Name);
  }
  display = () =>
    console.log(`${this.dept_name} lies in category of CS department`);
}
export { CS };
