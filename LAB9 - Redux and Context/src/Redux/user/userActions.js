import { UPDATE_STUDENT_DETAILS } from "./userConstants";

export var updateUserDetails = (user) => async (dispatch, getState) => {
  try {
    console.log(user);
    var {
      user: { isToggle },
    } = getState();
    const data = {
      name: user,
      rollNo: user === "Syed Ashar Ali" ? "2019-SE-200" : "2019-SE-163",
      department: "Software Engineering",
      isToggle: !isToggle,
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
