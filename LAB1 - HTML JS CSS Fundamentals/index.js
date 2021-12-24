var okayBtn = document.querySelector("#ok-btn");
var cancelBtn = document.querySelector("#cancel-btn");
var loginForm = document.querySelector("#loginForm");

//functions

var showPass = () => {
  var pass = document.querySelector("#pass");
  pass.type === "password" ? (pass.type = "text") : (pass.type = "password");
};

var inputs = [];

// Task 01
var findInputs = (email, password) => {
  inputs.push(email, password);
  console.log(inputs);
};

// Task 02 and Task 03
var validateInputs = () => {
  var tmp = false;
  inputs.forEach((element) =>
    element.value == "" ? (tmp = false) : (tmp = true)
  );
  return tmp;
};
// Task 04
var login = (rememberMe) => {
  return rememberMe
    ? "Logged in successfully with Remember Me marked as set"
    : "Logged in successfully";
};
// Task 05
var clear = (email, password) => {
  email.value = "";
  password.value = "";
};
// event listeners
okayBtn.addEventListener("click", () => {
  var email = document.querySelector("#email");
  var password = document.querySelector("#pass");
  var rememberMe = document.querySelector("#remember").checked;

  alert("login is clicked");
  findInputs(email, password);
  alert(validateInputs());
  validateInputs() ? alert(login(rememberMe)) : null;
});

cancelBtn.addEventListener("click", () => {
  var email = document.querySelector("#email");
  var password = document.querySelector("#pass");
  alert("cancel is clicked");
  clear(email, password);
});
