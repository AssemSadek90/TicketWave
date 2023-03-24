var _react = _interopRequireDefault(require('react'));
var _react2 = require('@testing-library/react');
var _SignIn = _interopRequireDefault(require('./SignIn'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
describe('SignIn', function () {
  test('renders Sign In component', function () {
    (0, _react2.render)(
      /*#__PURE__*/ _react.default.createElement(_SignIn.default, null)
    );
    var signInElement = _react2.screen.getByText(/Sign In/i);
    expect(signInElement).toBeInTheDocument();
  });
  test('validate email', function () {
    (0, _react2.render)(
      /*#__PURE__*/ _react.default.createElement(_SignIn.default, null)
    );
    var emailInput = _react2.screen.getByTestId('email-input');
    _react2.fireEvent.change(emailInput, {
      target: {
        value: 'test@example.com',
      },
    });
    expect(emailInput.value).toBe('test@example.com');
  });
  test('validate password', function () {
    (0, _react2.render)(
      /*#__PURE__*/ _react.default.createElement(_SignIn.default, null)
    );
    var passwordInput = _react2.screen.getByTestId('password-input');
    _react2.fireEvent.change(passwordInput, {
      target: {
        value: 'password',
      },
    });
    expect(passwordInput.value).toBe('password');
  });
  test('submit form', function () {
    (0, _react2.render)(
      /*#__PURE__*/ _react.default.createElement(_SignIn.default, null)
    );
    var emailInput = _react2.screen.getByTestId('email-input');
    _react2.fireEvent.change(emailInput, {
      target: {
        value: 'test@example.com',
      },
    });
    var passwordInput = _react2.screen.getByTestId('password-input');
    _react2.fireEvent.change(passwordInput, {
      target: {
        value: 'password',
      },
    });
    var submitButton = _react2.screen.getByTestId('submit-button');
    _react2.fireEvent.click(submitButton);
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password');
  });
});
