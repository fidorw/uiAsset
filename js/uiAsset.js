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

var _httpClient = _interopRequireDefault(require("@pubcore/http-client"));

var _https = _interopRequireDefault(require("https"));

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

var _default = function _default(A, key, def, optional, host) {
  if ((0, _pubcoreUiResource.envIsDev)()) {
    var uri = (0, _getAssetUri["default"])({
      A: A,
      key: key,
      def: def,
      isDev: (0, _pubcoreUiResource.envIsDev)(),
      htdocs: htdocs,
      optional: optional,
      autoupdateOff: true
    });
    var agent = new _https["default"].Agent({
      rejectUnauthorized: false
    });
    (0, _httpClient["default"])({
      uri: 'https://' + (host || window.location.host) + uri,
      httpsAgent: agent
    }).then(function (response) {
      if (response.status != 200) throw 'ERROR_ASSET_NOT_FOUND ' + uri;
    }, function (error) {
      throw 'ERROR_ASSET_NOT_FOUND ' + uri;
    });
  }

  return (0, _getAssetUri["default"])({
    A: A,
    key: key,
    def: def,
    isDev: (0, _pubcoreUiResource.envIsDev)(),
    htdocs: htdocs,
    optional: optional
  });
};

exports["default"] = _default;