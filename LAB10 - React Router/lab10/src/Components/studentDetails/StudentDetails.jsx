import React from "react";
import { connect } from "react-redux";
import "./StudentDetails.css";
const StudentDetails = ({ user }) => {
  return (
    <div className="student-details">
      <h2>Name: {user.name} </h2>
      <p>Roll number: {user.rollNo} </p>
      <p>Department: {user.department} </p>
    </div>
  );
};
var mapState = (state) => ({
  user: state.user,
});
export default connect(mapState)(StudentDetails);
