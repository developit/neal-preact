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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var ImageList = (function (_React$Component) {
  _inherits(ImageList, _React$Component);

  function ImageList() {
    _classCallCheck(this, ImageList);

    _get(Object.getPrototypeOf(ImageList.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ImageList, [{
    key: "render",
    value: function render() {
      var _className = (0, _classnames2["default"])("neal-image-list list-inline", { centered: this.props.centered });
      return _react2["default"].createElement(
        "ul",
        { className: _className },
        this.props.children
      );
    }
  }], [{
    key: "propTypes",
    value: {
      centered: _react2["default"].PropTypes.bool.isRequired
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      centered: true
    },
    enumerable: true
  }]);

  return ImageList;
})(_react2["default"].Component);

exports.ImageList = ImageList;

var ImageListItem = (function (_React$Component2) {
  _inherits(ImageListItem, _React$Component2);

  function ImageListItem() {
    _classCallCheck(this, ImageListItem);

    _get(Object.getPrototypeOf(ImageListItem.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ImageListItem, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "li",
        { className: "neal-image-list-item" },
        _react2["default"].createElement(
          "a",
          { href: this.props.url, target: "_blank" },
          _react2["default"].createElement("img", { src: this.props.src })
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      src: _react2["default"].PropTypes.string.isRequired,
      url: _react2["default"].PropTypes.string
    },
    enumerable: true
  }]);

  return ImageListItem;
})(_react2["default"].Component);

exports.ImageListItem = ImageListItem;