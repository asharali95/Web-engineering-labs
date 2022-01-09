import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ changeFunction, name }) => {
  const changeState = (e) => {
    changeFunction(e.target.innerText);
  };
  return (
    <>
      <tr onClick={(e) => changeState(e)} id={name}>
        <Link to="details">
          <td>{name}</td>
        </Link>
      </tr>
    </>
  );
};

export default StudentList;
