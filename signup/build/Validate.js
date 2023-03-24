"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validate = Validate;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Validate(props) {
  if (props.email !== props.confirmEmail) {
    props.setvalidData(false);
    return /*#__PURE__*/_react.default.createElement("p", null, "Emails do not match");
  } else if (props.firstName.length === 0) {
    props.setvalidData(false);
    return /*#__PURE__*/_react.default.createElement("p", null, "Please enter first name");
  } else if (props.lastName.length === 0) {
    props.setvalidData(false);
    return /*#__PURE__*/_react.default.createElement("p", null, "Please enter last name");
  } else if (!props.validPassword) {
    props.setvalidData(false);
    return /*#__PURE__*/_react.default.createElement("p", null, "Password is less than 6 character long.");
  } else {
    return /*#__PURE__*/_react.default.createElement("p", null);
  }
}
var _default = Validate;
exports.default = _default;