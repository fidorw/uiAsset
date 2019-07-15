"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pubcoreUiResource = require("pubcore-ui-resource");

var _getDefault = _interopRequireDefault(require("./getDefault"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var A = _ref.A,
      key = _ref.key,
      def = _ref.def,
      isDev = _ref.isDev,
      htdocs = _ref.htdocs,
      optional = _ref.optional;
  var uri;
  optional = typeof optional === 'undefined' || optional == false ? false : true;
  var validated = (0, _pubcoreUiResource.validateKey)({
    R: A,
    key: Array.isArray(key) ? key[0] : key,
    def: (0, _getDefault["default"])(htdocs, key, def, optional),
    isDev: isDev,
    ctx: 'a'
  });
  validated.value && typeof validated.value.uri === 'string' && (uri = validated.value.uri);
  typeof uri === 'undefined' && optional && (uri = '');
  isDev && typeof uri === 'undefined' && (uri = validated.def.uri);
  return uri;
};

exports["default"] = _default;