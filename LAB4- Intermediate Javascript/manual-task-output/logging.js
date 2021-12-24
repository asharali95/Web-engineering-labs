"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

var _logging = _interopRequireDefault(require("logging"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Logger = (0, _logging["default"])("createStudent");
exports.Logger = Logger;