var recentsCourses = [];
//This declarative function will be called on 'Add New Row' button click and add new row
function addNewCourse() {
  //1 - Find the 'body' element
  const body = document.querySelector("tbody");
  const row = document.createElement("tr");
  const tdCourseID = document.createElement("td");
  const tdCourseName = document.createElement("td");
  const tdCreditHours = document.createElement("td");
  const tdYearTaken = document.createElement("td");

  const courseId = Math.round(Math.random() * 100) + 4;
  const courseName = Math.round(Math.random() * 500) + 50;
  const CreditHours = Math.round(Math.random() * 400) + 60;
  const YearTaken = Math.round(Math.random() * 2020) + 2020;
  row.id = "row" + courseId;

  tdCourseID.innerHTML = "Course " + courseId;
  tdCourseName.innerHTML = "Course - DOM - " + courseName;
  tdCreditHours.innerHTML = "Course - DOM - " + CreditHours;
  tdYearTaken.innerHTML = YearTaken;
  //4 - Insert newly created 'td's into newly created 'tr' using element's appendChild API
  row.appendChild(tdCourseID);
  row.appendChild(tdCourseName);
  row.appendChild(tdCreditHours);
  row.appendChild(tdYearTaken);
  //5 - Finally insert newly created 'row' into 'body' element
  body.appendChild(row);
  row.classList.add("row");
  recentsCourses.push(row.id);
}
function searchAndHighlight() {
  rn = window.prompt("Input number of rows", 1);

  for (var r = 0; r < parseInt(rn, 10); r++) {
    var x = document.getElementById("myTable").insertRow(r);
    for (var c = 0; c < parseInt(cn, 10); c++) {
      var y = x.insertCell(c);
      y.innerHTML = "Row-" + r + " Column-" + c;
    }
  }
}
function updateCourse() {
  const newCourseYear = prompt(
    "Please enter Row# and new year delimited by comma"
  );
  if (newCourseYear) {
    const courseId = newCourseYear.split(",")[0];
    const courseYear = newCourseYear.split(",")[1];
    const row = document.getElementById("row" + courseId);
    if (row) {
      const tdYearTaken = row.querySelector(
        "#row" + courseId + " > td:nth-child(4)"
      );
      tdYearTaken.innerHTML = courseYear;
    }
  }
}
function removeCourse() {
  const courseId = prompt("Please enter Row");
  if (courseId) {
    const row = document.getElementById("row" + courseId);

    if (row) {
      const body = document.querySelector("tbody");
      recentsCourses = recentsCourses.filter((rowId) => rowId !== row.id);
      console.log(recentsCourses);
      body.removeChild(row);
    }
  }
}

function removeNewlyCourse() {
  console.log(recentsCourses);
  if (recentsCourses.length !== 0) {
    const body = document.querySelector("tbody");
    recentsCourses.forEach((recentCoursesId) => {
      if (recentsCourses.includes(recentCoursesId))
        body.removeChild(document.getElementById(`${recentCoursesId}`));
    });
    recentsCourses = [];
  }
}
function signout() {
  document.cookie = `${document.cookie};expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  window.location.reload("Refresh");
}
console.log(window.history);
// cookie stuff
window.addEventListener("load", () => {
  console.log(document.cookie.split(","));
  if (document.cookie) {
    var { 0: name, 1: emailId } = { ...document.cookie.split(",") };
    
    var usernameTag = document.getElementById("username-tag");
    var emailTag = document.getElementById("email-tag");
    var img = document.querySelector(".img-div");
    var grade = document.querySelector("#grade");

    img.style.backgroundImage = `url("../assets/${name}.png")`;
    usernameTag.innerHTML = `<h2>${name}</h2>`;
    emailTag.innerHTML = `${emailId}`;
    grade.innerHTML = "3.37/4.0";
    grade.style.color = "rgb(31, 177, 31)";
  } else {
    location.assign("../login.html");
  }
});

var select = document.getElementById("Links");
select.addEventListener("change", () => {
  window.open(`${select.options[select.selectedIndex].value}`, "_blank");
});
