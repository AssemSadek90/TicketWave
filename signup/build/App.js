Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactRouterDom = require('react-router-dom');
require('../src/App.css');
var _EnterEmail = _interopRequireDefault(require('./EnterEmail'));
var _SignIn = _interopRequireDefault(require('./SignIn'));
var _Landing = _interopRequireDefault(require('./Landing'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/**
 * Renders the main application component.
 * @function
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'App',
    },
    /*#__PURE__*/ _react.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Routes,
        null,
        /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
          path: '/',
          element: /*#__PURE__*/ _react.default.createElement(
            _EnterEmail.default,
            null
          ),
        }),
        /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
          path: '/signin',
          element: /*#__PURE__*/ _react.default.createElement(
            _SignIn.default,
            null
          ),
        }),
        /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
          path: '/home',
          element: /*#__PURE__*/ _react.default.createElement(
            _Landing.default,
            null
          ),
        })
      )
    )
  );
}
var _default = App;
exports.default = _default;
