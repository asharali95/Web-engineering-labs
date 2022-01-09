import { UPDATE_STUDENT_DETAILS } from "./userConstants";

var initialState = {
  name: "",
  rollNo: "",
  department: "",
};

const userReducer = (state = initialState, action) => {
  var { type, payload } = action;

  switch (type) {
    case UPDATE_STUDENT_DETAILS:
      return payload.userdetails;

    default:
      return state;
  }
};
export default userReducer;
