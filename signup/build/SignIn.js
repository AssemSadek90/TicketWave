"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _google = require("@react-oauth/google");
var _axios = _interopRequireDefault(require("axios"));
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/**
 * A React component for creating an account.
 * @function
 */
function SignIn() {
  /**
    Initializes an axios instance with a specified baseURL.
  @type {Object}
  @constant server
  @property {string} baseURL - The base URL for the axios instance.
  */
  var server = _axios.default.create({
    baseURL: 'http://localhost:3000'
  });

  /**
  A function provided by the react-router-dom package that allows for programmatic navigation.
  @function
  @name navigate
  */
  var navigate = (0, _reactRouterDom.useNavigate)();
  var user = {};
  /**
   * The email input's value.
   * @typedef {string} email
   */
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];

  /**
   * Indicates whether the email is valid or not.
   * @typedef {boolean} validEmail
   */
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    validEmail = _useState4[0],
    setValidEmail = _useState4[1];

  /**
   * Indicates whether the password is valid or not.
   * @typedef {boolean} validPassword
   */
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    validPassword = _useState6[0],
    setvalidPassword = _useState6[1];

  /**
   * The password input's value.
   * @typedef {string} password
   */
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    password = _useState8[0],
    setPassword = _useState8[1];

  /**
  Represents whether there are any invalid fields in a form or not.
  @type {Array}
  @property {boolean} invalidFields - The current state of whether there are any invalid fields in a form or not.
  @property {function} setInvalidFields - A function that sets the invalidFields state.
  */
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    invalidFields = _useState10[0],
    setInvalidFields = _useState10[1];

  /**
   * Indicates whether all form data is valid or not.
   * @typedef {boolean} validData
   */
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    validData = _useState12[0],
    setvalidData = _useState12[1];

  /**
  Represents whether the "Sign In" button has been clicked or not.
  @type {Array}
  @property {boolean} signInClicked - The current state of whether the "Sign In" button has been clicked or not.
  @property {function} setSignInClicked - A function that sets the signInClicked state.
  */
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    signInClicked = _useState14[0],
    setSignInClicked = _useState14[1];

  /**
  Represents whether the application is currently loading or not.
  @type {Array}
  @property {boolean} isLoading - The current state of whether the application is loading or not.
  @property {function} setIsLoading - A function that sets the isLoading state.
  */
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isLoading = _useState16[0],
    setIsLoading = _useState16[1];

  /**
   * Validates the email input.
   * @function
   * @param {email} email - The email input's value.
   * @returns {boolean} - Whether the email is valid or not.
   */
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  /**
  
  Validates all input fields
  @return {void}
  */
  function validateAll() {
    if (!validPassword) {
      setvalidData(false);
    } else if (!validEmail) {
      setvalidData(false);
    } else {
      setvalidData(true);
    }
  }

  /**
   * Handles the Continue button click event.
   * @function
   */
  function handleLogInClick() {
    setSignInClicked(true);
    validateAll();
  }

  /**
  Handles email input change event
  @param {Event} event - The event object from the email input change event
  @return {void}
  */
  function handleEmailChange(event) {
    var newEmail = event.target.value;
    setEmail(newEmail);
    setValidEmail(validateEmail(newEmail));
  }

  /**
  
  Handles password input change event
  @param {Event} event - The event object from the password input change event
  @return {void}
  */
  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setvalidPassword(event.target.value.length >= 6);
  }

  /**
  
  Submits the form and logs the form data to the console if valid
  @param {Event} event - The event object from the form submission event
  @return {void}
  */
  function submitForm(event) {
    event.preventDefault();
    if (validData) {
      user.email = email;
      user.password = password;
      handleSignIn(user);
    }
  }

  /**
  A function that handles user sign-in by sending a request to the server to check if the provided credentials match an existing user.
  @function
  @param {Object} user - An object that contains the user's email and password.
  @param {string} user.email - The user's email.
  @param {string} user.password - The user's password.
  @returns {undefined} This function does not return anything.
  */
  var handleSignIn = function handleSignIn(user) {
    setIsLoading(true);
    server.get("/users?email=".concat(email)).then(function (response) {
      return response.data;
    }).then(function (data) {
      setIsLoading(false);
      if (data.length > 0 && data[0].password === password) {
        console.log('User exists');
        localStorage.setItem('userId', data[0].id);
        setInvalidFields(false);
        navigate('/home');
      } else {
        console.log('User does not exist');
        setInvalidFields(true);
        eraseFields();
      }
    }).catch(function (error) {
      setIsLoading(false);
      console.error(error);
    });
  };

  /**
  A function that erases the values in the email and password input fields.
  @function
  @returns {undefined} This function does not return anything.
  */
  function eraseFields() {
    setEmail('');
    setPassword('');
  }

  /**
  
  Renders the Create Account page
  @return {JSX.Element}
  */
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 split-container-primary"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "split-container-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-create-element"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "company-name"
  }, "Ticketwave"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "eds-text-hl"
  }, "Log in")), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: submitForm
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "additional-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "sign-in"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: "email-sign-in",
    type: "email",
    placeholder: "Email address",
    value: email,
    onChange: handleEmailChange
    //required
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "password"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: "password",
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: handlePasswordChange
    //required
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "eds-btn eds-btn--submit eds-btn--fill eds-btn--block",
    type: "submit",
    onClick: handleLogInClick,
    disabled: isLoading
  }, isLoading ? 'Loading...' : 'Log in')), /*#__PURE__*/_react.default.createElement("div", null, signInClicked && !validEmail && /*#__PURE__*/_react.default.createElement("p", {
    className: "error"
  }, "Please enter a valid email address"), signInClicked && password.length < 6 && /*#__PURE__*/_react.default.createElement("p", {
    className: "error"
  }, "Please enter a password over 6 characters."), invalidFields && /*#__PURE__*/_react.default.createElement("p", {
    className: "error"
  }, "Invalid email or password")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Sign Up"))), /*#__PURE__*/_react.default.createElement("div", {
    id: "signInDiv"
  }, /*#__PURE__*/_react.default.createElement(_google.GoogleLogin, {
    onSuccess: function onSuccess(credentialResponse) {
      console.log(credentialResponse);
    },
    onError: function onError() {
      console.log('Login Failed');
    }
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fill col-md-6 split-container-secondary d-none d-md-block"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg",
    alt: "Kitchen working"
  }))));
}
var _default = SignIn;
exports.default = _default;