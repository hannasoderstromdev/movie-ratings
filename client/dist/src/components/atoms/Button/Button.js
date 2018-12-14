'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  border: 1px solid ', ';\n  height: 30px;\n  min-width: 30px;\n  outline: none;\n  color: ', ';\n  font-size: 1.6rem;\n  margin: 0;\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &:focus {\n    border: 1px solid ', ';\n  }\n'], ['\n  background-color: ', ';\n  border: 1px solid ', ';\n  height: 30px;\n  min-width: 30px;\n  outline: none;\n  color: ', ';\n  font-size: 1.6rem;\n  margin: 0;\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &:focus {\n    border: 1px solid ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Primary = _styledComponents2.default.button(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.black;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.textPrimary;
});

var Button = function Button(_ref5) {
  var children = _ref5.children,
      onClick = _ref5.onClick,
      disabled = _ref5.disabled;
  return _react2.default.createElement(
    Primary,
    { onClick: onClick, disabled: disabled },
    children
  );
};

Button.defaultProps = {
  disabled: false,
  onClick: function onClick() {
    return console.log('clicked');
  }
};

Button.propTypes = {
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};

exports.default = Button;

//# sourceMappingURL=Button.js.map