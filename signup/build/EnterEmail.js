function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactRouterDom = require('react-router-dom');
var _axios = _interopRequireDefault(require('axios'));
require('./App.css');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r))
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
/**
 * A React component for creating an account.
 * @function
 */
function CreateAccount() {
  /**
    Initializes an axios instance with a specified baseURL.
  @type {Object}
  @constant server
  @property {string} baseURL - The base URL for the axios instance.
  */
  var server = _axios.default.create({
    baseURL: 'http://localhost:3000',
  });

  /**
    An object that represents the user being created.
  @type {Object}
  @constant user
  */
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
   * The confirm email input's value.
   * @typedef {string} confirmEmail
   */
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    confirmEmail = _useState6[0],
    setConfirmEmail = _useState6[1];

  /**
   * Indicates whether to show the additional information form or not.
   * @typedef {boolean} showAdditionalInfo
   */
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showAdditionalInfo = _useState8[0],
    setShowAdditionalInfo = _useState8[1];

  /**
   * The first name input's value.
   * @typedef {string} firstName
   */
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    firstName = _useState10[0],
    setFirstName = _useState10[1];

  /**
   * The last name input's value.
   * @typedef {string} lastName
   */
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    lastName = _useState12[0],
    setLastName = _useState12[1];

  /**
   * Indicates whether the password is valid or not.
   * @typedef {boolean} validPassword
   */
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    validPassword = _useState14[0],
    setvalidPassword = _useState14[1];

  /**
   * The password input's value.
   * @typedef {string} password
   */
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    password = _useState16[0],
    setPassword = _useState16[1];

  /**
    Represents whether a user exists or not.
  @type {Array}
  @property {boolean} userExists - The current state of whether a user exists or not.
  @property {function} setUserExists - A function that sets the userExists state.
  */
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    userExists = _useState18[0],
    setUserExists = _useState18[1];

  /**
   * Indicates whether all form data is valid or not.
   * @typedef {boolean} validData
   */
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    validData = _useState20[0],
    setvalidData = _useState20[1];

  /**
   * Indicates whether the Create Account button is clicked or not.
   * @typedef {boolean} createClicked
   */
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    createClicked = _useState22[0],
    setCreateClicked = _useState22[1];

  /**
   * Indicates whether to show the Continue button or not.
   * @typedef {boolean} showContinueButton
   */
  var _useState23 = (0, _react.useState)(true),
    _useState24 = _slicedToArray(_useState23, 2),
    showContinueButton = _useState24[0],
    setshowContinueButton = _useState24[1];

  /**
    Represents whether the application is currently loading or not.
  @type {Array}
  @property {boolean} isLoading - The current state of whether the application is loading or not.
  @property {function} setIsLoading - A function that sets the isLoading state.
  */
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isLoading = _useState26[0],
    setIsLoading = _useState26[1];

  /**
    Represents whether the email input field is disabled or not.
  @type {Array}
  @property {boolean} emailDisabled - The current state of whether the email input field is disabled or not.
  @property {function} setEmailDisabled - A function that sets the emailDisabled state.
  */
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    emailDisabled = _useState28[0],
    setEmailDisabled = _useState28[1];

  /**
    Represents whether the "Edit" button has been clicked or not.
  @type {Array}
  @property {boolean} showEditEmail - The current state of whether the "Edit" button has been clicked or not.
  @property {function} setShowEditEmail - A function that sets the showEditEmail state.
  */
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    showEditEmail = _useState30[0],
    setShowEditEmail = _useState30[1];

  /**
    A function provided by the react-router-dom package that allows for programmatic navigation.
  @function
  @name navigate
  */

  var navigate = (0, _reactRouterDom.useNavigate)();
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
   * Resets the first name, last name, password and confirm email input's value to empty.
   * @function
   */
  function eraseFields() {
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfirmEmail('');
  }

  /**
   * Handles the Continue button click event.
   * @function
   */
  function handleContinueButtonClick() {
    setIsLoading(true);
    server
      .get('/users?email='.concat(email))
      .then(function (response) {
        return response.data;
      })
      .then(function (data) {
        setIsLoading(false);
        if (data.length > 0) {
          setUserExists(true);
          console.log('User already exists');
          if (userExists || !validEmail) {
            setShowAdditionalInfo(false);
            setshowContinueButton(true);
            setShowEditEmail(false);
            setEmailDisabled(false);
          }
        } else {
          setUserExists(false);
          console.log('User does not exist');
          if (validEmail) {
            setShowAdditionalInfo(true);
            setshowContinueButton(false);
            setShowEditEmail(true);
            setEmailDisabled(true);
          }
        }
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
      });
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
    if (!validEmail) {
      setshowContinueButton(true);
      setShowAdditionalInfo(false);
      setShowEditEmail(false);
      setEmailDisabled(false);
      setCreateClicked(false);
      eraseFields();
    }
  }
  /**
  
  Handles confirm email input change event
  @param {Event} event - The event object from the confirm email input change event
  @return {void}
  */
  function handleConfirmEmailChange(event) {
    var newEmail = event.target.value;
    setConfirmEmail(newEmail);
  }
  /**
  
  Handles first name input change event
  @param {Event} event - The event object from the first name input change event
  @return {void}
  */
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  /**
  
  Handles last name input change event
  @param {Event} event - The event object from the last name input change event
  @return {void}
  */
  function handleLastNameChange(event) {
    setLastName(event.target.value);
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
  
  Validates all input fields
  @return {void}
  */
  function validateAll() {
    if (email !== confirmEmail) {
      setvalidData(false);
    } else if (firstName.length === 0) {
      setvalidData(false);
    } else if (lastName.length === 0) {
      setvalidData(false);
    } else if (!validPassword) {
      setvalidData(false);
    } else {
      setvalidData(true);
    }
  }
  /**
  
  Handles create account button click event
  @return {void}
  */
  function handleCreateClick() {
    setCreateClicked(true);
    validateAll();
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
      user.firstName = firstName;
      user.lastName = lastName;
      user.password = password;
      user.is_public = true;
      user.image_id = null;
      handleSignUp(user);
    }
  }
  /**
    A function that handles the "Edit" button click event.
  @function
  @name handleEditClick
  */
  var handleEditClick = function handleEditClick() {
    setEmailDisabled(false);
    setShowEditEmail(false);
    setshowContinueButton(true);
    setShowAdditionalInfo(false);
    setCreateClicked(false);
    eraseFields();
  };

  /**
    A function that navigates to the "/home" route.
  @function
  @name navigateHome
  */
  var navigateHome = function navigateHome() {
    server
      .get('/users?email='.concat(email))
      .then(function (response) {
        return response.data;
      })
      .then(function (data) {
        localStorage.setItem('userId', data[0].id);
        navigate('/home');
      })
      .catch(function (error) {
        setIsLoading(false);
        console.error(error);
        return;
      });
  };

  /**
    A function that handles the sign up process.
  @function
  @name handleSignUp
  @param {Object} user - An object that represents the user being signed up.
  @param {string} user.email - The email address of the user being signed up.
  @param {string} user.password - The password of the user being signed up.
  */
  var handleSignUp = function handleSignUp(user) {
    var requestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    server
      .post('/users', user, requestOptions)
      .then(function (response) {
        return console.log(response.data);
      })
      .catch(function (error) {
        return console.log(error);
      });
    navigateHome();
  };

  /**
  
  Renders the Create Account page
  @return {JSX.Element}
  */
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      class: 'container-fluid',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        class: 'row',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'col-md-6 split-container-primary',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'split-container-content',
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'header-create-element',
            },
            /*#__PURE__*/ _react.default.createElement(
              'h1',
              {
                className: 'company-name',
              },
              'Ticketwave'
            ),
            /*#__PURE__*/ _react.default.createElement(
              'h2',
              {
                className: 'eds-text-hl',
              },
              'Create an account'
            )
          ),
          /*#__PURE__*/ _react.default.createElement(
            'form',
            {
              onSubmit: submitForm,
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'additional-info',
                id: 'create-account',
              },
              /*#__PURE__*/ _react.default.createElement('input', {
                id: 'email',
                type: 'email',
                placeholder: 'Email address',
                value: email,
                disabled: emailDisabled,
                onChange: handleEmailChange,
                //required
              }),
              /*#__PURE__*/ _react.default.createElement(
                'div',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  null,
                  showContinueButton &&
                    /*#__PURE__*/ _react.default.createElement(
                      'button',
                      {
                        className:
                          'eds-btn eds-btn--submit eds-btn--fill eds-btn--block',
                        disabled: isLoading,
                        onClick: handleContinueButtonClick,
                      },
                      isLoading ? 'Loading...' : 'Continue'
                    )
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'span',
                  null,
                  showEditEmail &&
                    /*#__PURE__*/ _react.default.createElement(
                      'button',
                      {
                        className:
                          'eds-btn eds-btn--submit eds-btn--fill eds-btn--block',
                        onClick: handleEditClick,
                      },
                      'Edit'
                    )
                )
              ),
              userExists &&
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'p',
                    {
                      className: 'error',
                    },
                    'User already exists.'
                  )
                )
            ),
            validEmail &&
              showAdditionalInfo &&
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: 'additional-info',
                },
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    id: 'confirm-email',
                  },
                  /*#__PURE__*/ _react.default.createElement('input', {
                    id: 'confirmEmail',
                    type: 'email',
                    placeholder: 'Confirm email address',
                    value: confirmEmail,
                    onChange: handleConfirmEmailChange,
                    //required
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    id: 'first-name',
                  },
                  /*#__PURE__*/ _react.default.createElement('input', {
                    id: 'firstName',
                    type: 'text',
                    placeholder: 'First name',
                    value: firstName,
                    onChange: handleFirstNameChange,
                    //required
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    id: 'last-name',
                  },
                  /*#__PURE__*/ _react.default.createElement('input', {
                    id: 'lastname',
                    type: 'text',
                    placeholder: 'Last name',
                    value: lastName,
                    onChange: handleLastNameChange,
                    //required
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    id: 'password',
                  },
                  /*#__PURE__*/ _react.default.createElement('input', {
                    id: 'password',
                    type: 'password',
                    placeholder: 'Password',
                    value: password,
                    onChange: handlePasswordChange,
                    required: true,
                  })
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'button',
                    {
                      className:
                        'eds-btn eds-btn--submit eds-btn--fill eds-btn--block',
                      type: 'submit',
                      onClick: handleCreateClick,
                    },
                    'Create Account'
                  )
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  null,
                  createClicked &&
                    email !== confirmEmail &&
                    /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        className: 'error',
                      },
                      'Emails do not match'
                    ),
                  createClicked &&
                    !validEmail &&
                    /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        className: 'error',
                      },
                      'Please enter a valid email address'
                    ),
                  createClicked &&
                    firstName.length === 0 &&
                    /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        className: 'error',
                      },
                      'Please enter a first name.'
                    ),
                  createClicked &&
                    lastName.length === 0 &&
                    /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        className: 'error',
                      },
                      'Please enter a last name.'
                    ),
                  createClicked &&
                    password.length < 6 &&
                    /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        className: 'error',
                      },
                      'Please enter a password over 6 characters.'
                    )
                )
              )
          ),
          /*#__PURE__*/ _react.default.createElement(
            'div',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'p',
              null,
              /*#__PURE__*/ _react.default.createElement(
                _reactRouterDom.Link,
                {
                  to: '/signin',
                },
                'Sign in'
              )
            )
          )
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className:
            'fill col-md-6 split-container-secondary d-none d-md-block',
        },
        /*#__PURE__*/ _react.default.createElement('img', {
          src: 'https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg',
          alt: 'Kitchen working',
        })
      )
    )
  );
}
var _default = CreateAccount;
exports.default = _default;
