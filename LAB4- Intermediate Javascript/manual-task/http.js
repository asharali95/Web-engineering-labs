import axios from "axios";

function getSSUETHomePage() {
  try {
    axios.get("").then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log(error);
  }
}
const HTTP = {
  getSSUETHomePage,
};
export { HTTP };
