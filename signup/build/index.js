var _react = _interopRequireDefault(require('react'));
var _client = _interopRequireDefault(require('react-dom/client'));
require('./index.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.bundle.min');
var _App = _interopRequireDefault(require('./App'));
var _google = require('@react-oauth/google');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var root = _client.default.createRoot(document.getElementById('root'));

/**
 * Renders the root component of the application.
 * @function
 * @returns {void}
 */
function render() {
  root.render(
    /*#__PURE__*/
    //<React.StrictMode>
    _react.default.createElement(
      _google.GoogleOAuthProvider,
      {
        clientId:
          '770303914933-s45dc140ig3djblj6rs9ckg30m58is1u.apps.googleusercontent.com',
      },
      /*#__PURE__*/ _react.default.createElement(_App.default, null)
    )
    //</React.StrictMode>
  );
}

render();
