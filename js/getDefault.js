"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getDefaultURI = _interopRequireDefault(require("./getDefaultURI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default(htdocs, key, def, optional, isDev) {
  var dynamic = false;
  var optional = typeof optional === 'undefined' || optional == false ? false : true;

  if (_typeof(def) !== 'object' || !def) {
    if (Array.isArray(key) && key.length > 0) {
      key = key[0] + (key[1] && typeof key[1] === 'string' ? key[1] : '');
      dynamic = true;
    }

    def = {
      uri: (0, _getDefaultURI["default"])(htdocs, key, def),
      dynamic: dynamic,
      optional: optional
    };
  }

  return def;
};

exports["default"] = _default;