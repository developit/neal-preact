"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var GoogleAnalytics = (function (_React$Component) {
  _inherits(GoogleAnalytics, _React$Component);

  function GoogleAnalytics() {
    _classCallCheck(this, GoogleAnalytics);

    _get(Object.getPrototypeOf(GoogleAnalytics.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GoogleAnalytics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments);
      };ga.l = +new Date();
      var account = this.props.account;
      // const scriptProtocol = ("https:" === document.location.protocol ? "https://ssl" : "http://www");
      var scriptSrc = "//google-analytics.com/analytics.js";
      jQuery.getScript(scriptSrc, function () {
        // Track Route changes
        ga("create", account, "auto");
        if (_this.props.history) {
          _this.props.history.listen(function (newLocation) {
            ga("send", "pageview", newLocation.pathname);
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("div", { key: "google-analytics" });
    }
  }], [{
    key: "propTypes",
    value: {
      account: _react2["default"].PropTypes.string.isRequired,
      history: _react2["default"].PropTypes.object
    },
    enumerable: true
  }]);

  return GoogleAnalytics;
})(_react2["default"].Component);

exports.GoogleAnalytics = GoogleAnalytics;