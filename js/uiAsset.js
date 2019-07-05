"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "initEnvIsDev", {
  enumerable: true,
  get: function get() {
    return _pubcoreUiResource.initEnvIsDev;
  }
});
Object.defineProperty(exports, "initDefaults", {
  enumerable: true,
  get: function get() {
    return _pubcoreUiResource.initDefaults;
  }
});
Object.defineProperty(exports, "initAutoupdateDefaults", {
  enumerable: true,
  get: function get() {
    return _pubcoreUiResource.initAutoupdateDefaults;
  }
});
exports["default"] = exports.uiAssetOptional = exports.initHtdocsDefaultPath = void 0;

var _pubcoreUiResource = require("pubcore-ui-resource");

var _getDefault = _interopRequireDefault(require("./getDefault"));

var _uiAsset = _interopRequireDefault(require("./uiAsset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var htdocs;

var initHtdocsDefaultPath = function initHtdocsDefaultPath(htdocsDefaultPath) {
  return htdocsDefaultPath = htdocs;
};

exports.initHtdocsDefaultPath = initHtdocsDefaultPath;

var uiAssetOptional = function uiAssetOptional(A, key, def) {
  return (0, _uiAsset["default"])(A, key, def, true);
};

exports.uiAssetOptional = uiAssetOptional;

var _default = function _default(A, key, def, optional) {
  var uri;
  var optional = typeof optional === 'undefined' || optional == false ? false : true;
  var validated = (0, _pubcoreUiResource.validateKey)({
    R: A,
    key: Array.isArray(key) ? key[0] : key,
    def: (0, _getDefault["default"])(htdocs, key, def, optional),
    isDev: (0, _pubcoreUiResource.envIsDev)()
  });
  validated.value && typeof validated.value.uri === 'string' && (uri = validated.value.uri);
  typeof uri === 'undefined' && optional && (uri = '');

  if ((0, _pubcoreUiResource.envIsDev)()) {
    //TODO check for physical file persistance validated.def.uri
    //TODO check for physical file persistance validated.value.uri if not undefined
    typeof uri === 'undefined' && (uri = validated.def.uri);
  }

  return uri;
};

exports["default"] = _default;