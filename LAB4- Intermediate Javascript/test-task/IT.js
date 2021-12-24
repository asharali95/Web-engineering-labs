import { Department } from "./Department";
class IT extends Department {
constructor(dept_id, dept_Name) {
super(dept_id, dept_Name);
}
display = () =>
console.log(`${this.dept_name} lies in category of IT department`);
}
export { IT };