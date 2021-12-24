import { assert } from "simple-assert-ok";
import University from "./University";
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
