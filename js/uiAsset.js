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
exports["default"] = exports.initAutoupdateAssetDefaults = exports.initAssetDefaults = exports.uiAssetOptional = exports.initHtdocsDefaultPath = void 0;

var _pubcoreHttp = _interopRequireDefault(require("pubcore-http"));

var _pubcoreUiResource = require("pubcore-ui-resource");

var _getAssetUri = _interopRequireDefault(require("./getAssetUri"));

var _uiAsset = _interopRequireDefault(require("./uiAsset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//only fol default not for A
var htdocs;

var initHtdocsDefaultPath = function initHtdocsDefaultPath(htdocsDefaultPath) {
  return htdocs = htdocsDefaultPath;
};

exports.initHtdocsDefaultPath = initHtdocsDefaultPath;

var uiAssetOptional = function uiAssetOptional(A, key, def) {
  return (0, _uiAsset["default"])(A, key, def, true);
};

exports.uiAssetOptional = uiAssetOptional;

var initAssetDefaults = function initAssetDefaults(defaults) {
  (0, _pubcoreUiResource.initDefaults)(defaults, 'asset');
};

exports.initAssetDefaults = initAssetDefaults;

var initAutoupdateAssetDefaults = function initAutoupdateAssetDefaults(c) {
  (0, _pubcoreUiResource.initAutoupdateDefaults)(c, 'asset');
};

exports.initAutoupdateAssetDefaults = initAutoupdateAssetDefaults;

var _default = function _default(A, key, def, optional) {
  var uri = (0, _getAssetUri["default"])({
    A: A,
    key: key,
    def: def,
    isDev: (0, _pubcoreUiResource.envIsDev)(),
    htdocs: htdocs,
    optional: optional
  });

  if ((0, _pubcoreUiResource.envIsDev)()) {
    //TODO check for physical file persistance validated.def.uri
    //TODO check for physical file persistance validated.value.uri if not undefined
    (0, _pubcoreHttp["default"])(uri, null, 'GET').then(function (response) {
      return uri;
    }, function (error) {
      //throw 'ERROR_ASSET_NOT_EXISTS '+uri
      return uri;
    });
  } else {
    return uri;
  }
};

exports["default"] = _default;