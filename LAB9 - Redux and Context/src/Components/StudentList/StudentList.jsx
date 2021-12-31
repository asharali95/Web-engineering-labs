// import React, { Component } from "react";

// export default class StudentList extends Component {
//   render() {
//     return (
//       <>
//         <tr onClick={(e) => this.props.changeFunction(e)} id={this.props.name}>
//           <td>{this.props.name}</td>
//         </tr>
//       </>
//     );
//   }
// }

import React from "react";

const StudentList = ({ changeFunction, name }) => {
  const changeState = (e) => {
    e.preventDefault();
    changeFunction(e.target.innerText);
  };
  return (
    <>
      <tr onClick={(e) => changeState(e)} id={name}>
        <td>{name}</td>
      </tr>
    </>
  );
};

export default StudentList;
