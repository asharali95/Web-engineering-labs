"use strict";

var _RegularStudent = require("./RegularStudent");

var _simpleAssertOk = require("simple-assert-ok");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tests = [];

var runTest = function runTest() {
  allTestCases();

  if (tests.length > 0) {
    tests.forEach(function (test) {
      test.run();
    });
  }

  function testCase(caseName, func) {
    tests = [].concat(_toConsumableArray(tests), [{
      message: function message() {
        console.log("\n--Running test case - ".concat(caseName));
        console.log("-----------------------------------");
      },
      run: function run() {
        this.message();
        func();
      }
    }]);
  }

  function result(testStatus) {
    console.log("\x1b[32m", testStatus, "\x1b[37m");
  } // test cases:


  function allTestCases() {
    testCase("testing if RegularStudent class property is inheriting of Student base class properties", function () {
      var regularStudentInstance = new _RegularStudent.RegularStudent(200, "Syed Ashar Ali", "27-01-2000");
      (0, _simpleAssertOk.assert)(regularStudentInstance.id === 200, result("OK"));
      (0, _simpleAssertOk.assert)(regularStudentInstance.name === "Syed Ashar Ali", result("OK"));
      (0, _simpleAssertOk.assert)(regularStudentInstance.dateOfBirth === "27-01-2000", result("OK"));
    });
  }
}; //invoking test


runTest();