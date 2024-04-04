"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _actions = require("../redux/actions");
require("./stopwatch.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Stopwatch = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const time = (0, _reactRedux.useSelector)(state => state.time);
  const isRunning = (0, _reactRedux.useSelector)(state => state.isRunning);
  (0, _react.useEffect)(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => dispatch((0, _actions.tick)()), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, dispatch]);
  const toggleRunning = () => {
    dispatch(isRunning ? (0, _actions.stopStopwatch)() : (0, _actions.startStopwatch)());
  };
  const reset = () => {
    dispatch((0, _actions.resetStopwatch)());
  };
  const formatTimeUnit = unit => {
    return unit.toString().padStart(2, "0");
  };
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor(time % 360000 / 6000);
  const seconds = Math.floor(time % 6000 / 100);
  const milliseconds = time % 100;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "stopwatch-container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "stopwatch-time"
  }, formatTimeUnit(hours), ":", formatTimeUnit(minutes), ":", formatTimeUnit(seconds), ":", formatTimeUnit(milliseconds)), /*#__PURE__*/_react.default.createElement("div", {
    className: "stopwatch-buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "stopwatch-button",
    onClick: toggleRunning
  }, isRunning ? "Stop" : "Start"), /*#__PURE__*/_react.default.createElement("button", {
    className: "stopwatch-button",
    onClick: reset
  }, "Reset")));
};
var _default = exports.default = Stopwatch;
//# sourceMappingURL=stopwatch.js.map
