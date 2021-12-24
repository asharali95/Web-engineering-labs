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

function loaderFunct() {
  okayBtn.innerHTML = "";
  okayBtn.insertAdjacentHTML(
    "beforeend",
    `<i class="loader fas fa-circle-notch fa-spin"></i>`
  );
  var loader = document.querySelector(".loader");
  loader.style.display = "block";
  setTimeout(function () {
    loader.style.display = "none";
    location.assign("../student-profile.html");
  }, 2000);
}

// event listeners
okayBtn.addEventListener("click", (e) => {
  var email = document.querySelector("#email");
  var password = document.querySelector("#pass");
  var rememberMe = document.querySelector("#remember").checked;

  alert("login is clicked");
  findInputs(email, password);
  alert(validateInputs());
  validateInputs() ? alert(login(rememberMe)) : null;

  e.preventDefault();
  var name = document.getElementById("name").value;
  console.log(name);
  if (validateInputs() && rememberMe) {
    loaderFunct();
    console.log("in condition");
    document.cookie = `${name},${email.value};`;
    console.log("done");
    inputs.push({
      name: document.cookie.split(";")[0].split(",")[0],
      loginID: document.cookie.split(";")[0].split(",")[1],
    });
    console.log(inputs);
  } else {
    alert("Something is wrong. Try again!");
  }
});

cancelBtn.addEventListener("click", () => {
  var email = document.querySelector("#email");
  var password = document.querySelector("#pass");
  alert("cancel is clicked");
  clear(email, password);
});

window.addEventListener("load", () => {
  if (document.cookie) {
    console.log(document.cookie);
    location.assign("../student-profile.html");
  }
  console.log("no cookie");
});
