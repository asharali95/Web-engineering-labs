import React, { Component } from "react";
import StudentList from "../StudentList/StudentList";
import StudentDetails from "../StudentDetails/StudentDetails";

export default class Shell extends Component {
  state = {
    name: "",
    rollNo: "",
    department: "",
    isToggle: false,
  };
  changeState = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    this.setState({
      name: e.target.innerText,
      rollNo:
        e.target.innerText === "Syed Ashar Ali" ? "2019-SE-200" : "2019-SE-163",
      department: "Software Engineering",
      isToggle: !this.state.isToggle,
    });
  };
  render() {
    const name = ["Syed Ashar Ali", "Rohail Naveed"];
    return (
      <div className="shell">
        <table>
          <tr>
            {" "}
            <th>Students</th>{" "}
          </tr>
          {name.map((name) => (
            <StudentList name={name} changeFunction={this.changeState} />
          ))}
        </table>
        {this.state.name === "" || !this.state.isToggle ? null : (
          <StudentDetails details={this.state} />
        )}
      </div>
    );
  }
}
