"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(htdocs, key, def) {
  var du = typeof def === 'string' ? def : typeof key === 'string' ? key : undefined;
  if (typeof htdocs !== 'string' && typeof du !== 'string') return undefined;
  typeof du === 'string' && du.length > 0 && /^[^/]/.exec(du) && (du = '/' + du);
  typeof htdocs === 'string' && (du = htdocs + (typeof du === 'string' ? du : ''));
  return du;
};

exports["default"] = _default;