import { UPDATE_STUDENT_DETAILS } from "./userConstants";

export var updateUserDetails = (user) => async (dispatch) => {
  try {
    const data = {
      name: user,
      rollNo: user === "Syed Ashar Ali" ? "2019-SE-200" : "2019-SE-163",
      department: "Software Engineering",
    };
    dispatch({
      type: UPDATE_STUDENT_DETAILS,
      payload: {
        userdetails: data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
