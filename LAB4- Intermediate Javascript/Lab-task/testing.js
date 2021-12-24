import { RegularStudent } from "./RegularStudent";
import { assert } from "simple-assert-ok";
import { University } from "../Home-task/University";
let tests = [];

var runTest = () => {
  allTestCases();
  if (tests.length > 0) {
    tests.forEach((test) => {
      test.run();
    });
  }

  function testCase(caseName, func) {
    tests = [
      ...tests,
      {
        message: function () {
          console.log(`\n--Running test case - ${caseName}`);
          console.log(`-----------------------------------`);
        },
        run: function () {
          this.message();
          func();
        },
      },
    ];
  }
  function result(testStatus) {
    console.log("\x1b[32m", testStatus, "\x1b[37m");
  }

  // test cases:

  function allTestCases() {
    testCase(
      //this test case is for lab task
      "testing if RegularStudent class property is inheriting of Student base class properties",
      function () {
        var regularStudentInstance = new RegularStudent(
          154, "Muhammad Zeeshan","24-02-1998"
        );
        assert(regularStudentInstance.id === 154, result("OK"));
        assert(regularStudentInstance.name === "Muhammad Zeeshan", result("OK"));
        assert(
          regularStudentInstance.dateOfBirth === "24-02-1998",
          result("OK")
        );
      }
    );

    testCase(
      "testing if university instance has image property set to empty string",
      function () {
        var universityInstance1 = new University("Sir Syed University");
        assert(universityInstance1.image === "", result("OK"));
        var universityInstance2 = new University(
          "Sir Syed University",
          "SSUET LOGO"
        );
        assert(universityInstance2.image === "SSUET LOGO", result("OK"));
      }
    );
  }
};

//invoking test
runTest();
