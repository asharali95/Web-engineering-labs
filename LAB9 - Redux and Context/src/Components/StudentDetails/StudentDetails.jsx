import React from "react";
import "./StudentDetails.css";
const StudentDetails = ({ details }) => {
  const { name, rollNo, department } = details;
  return (
    <div className="student-details">
      <h2>Name:{name} </h2>
      <p>Roll number:{rollNo} </p>
      <p>Department:{department} </p>
    </div>
  );
};

export default StudentDetails;
