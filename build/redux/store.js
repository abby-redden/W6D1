"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reducer = _interopRequireDefault(require("./reducer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const store = (0, _redux.createStore)(_reducer.default);
var _default = exports.default = store;
//# sourceMappingURL=store.js.map
