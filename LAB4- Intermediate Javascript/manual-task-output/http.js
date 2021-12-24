"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTP = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getSSUETHomePage() {
  try {
    _axios["default"].get("https://google.com.pk").then(function (res) {
      console.log(res.data);
    });
  } catch (error) {
    console.log(error);
  }
}

var HTTP = {
  getSSUETHomePage: getSSUETHomePage
};
exports.HTTP = HTTP;