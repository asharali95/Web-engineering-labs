"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Department = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Department = /*#__PURE__*/function () {
  function Department(dept_id, dept_name) {
    _classCallCheck(this, Department);

    this.dept_id = dept_id;
    this.dept_name = dept_name;
  }

  _createClass(Department, [{
    key: "set_name",
    value: function set_name(name) {
      this.dept_name = name;
    }
  }]);

  return Department;
}();

exports.Department = Department;