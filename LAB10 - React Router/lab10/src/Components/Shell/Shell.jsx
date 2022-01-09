import React from "react";
import StudentList from "../StudentList/StudentList";
import StudentDetails from "../studentDetails/StudentDetails";
import { connect } from "react-redux";
import { updateUserDetails } from "../../Redux/user/userActions";
const Shell = ({ user, updateUserDetails }) => {
  const name = ["Syed Ashar Ali", "Rohail Naveed"];
  console.log(user);
  return (
    <div className="shell">
      <table>
        <tr>
          <th>Students</th>
        </tr>
        {name.map((name) => (
          <StudentList name={name} changeFunction={updateUserDetails} />
        ))}
      </table>
    </div>
  );
};
var mapState = (state) => ({
  user: state.user,
});
var actions = {
  updateUserDetails,
};
export default connect(mapState, actions)(Shell);
