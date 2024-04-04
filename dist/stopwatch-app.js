"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _stopwatch = _interopRequireDefault(require("./components/stopwatch"));
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Stopwatch"), /*#__PURE__*/_react.default.createElement(_stopwatch.default, null));
}

//** COLLABORATED WITH MY PROGRAM PARTNER ON THIS */
var _default = exports.default = App;
//# sourceMappingURL=App.js.map

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

"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("./redux/store"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, /*#__PURE__*/_react.default.createElement(_App.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tick = exports.stopStopwatch = exports.startStopwatch = exports.resetStopwatch = exports.TICK = exports.STOP_STOPWATCH = exports.START_STOPWATCH = exports.RESET_STOPWATCH = void 0;
const START_STOPWATCH = exports.START_STOPWATCH = 'START_STOPWATCH';
const STOP_STOPWATCH = exports.STOP_STOPWATCH = 'STOP_STOPWATCH';
const RESET_STOPWATCH = exports.RESET_STOPWATCH = 'RESET_STOPWATCH';
const TICK = exports.TICK = 'TICK';
const startStopwatch = () => ({
  type: START_STOPWATCH
});
exports.startStopwatch = startStopwatch;
const stopStopwatch = () => ({
  type: STOP_STOPWATCH
});
exports.stopStopwatch = stopStopwatch;
const resetStopwatch = () => ({
  type: RESET_STOPWATCH
});
exports.resetStopwatch = resetStopwatch;
const tick = () => ({
  type: TICK
});
exports.tick = tick;
//# sourceMappingURL=actions.js.map

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _actions = require("../redux/actions");
const initialState = {
  time: 0,
  isRunning: false
};
const stopwatchReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions.START_STOPWATCH:
      return {
        ...state,
        isRunning: true
      };
    case _actions.STOP_STOPWATCH:
      return {
        ...state,
        isRunning: false
      };
    case _actions.RESET_STOPWATCH:
      return {
        ...state,
        time: 0,
        isRunning: false
      };
    case _actions.TICK:
      return {
        ...state,
        time: state.time + 1
      };
    default:
      return state;
  }
};
var _default = exports.default = stopwatchReducer;
//# sourceMappingURL=reducer.js.map

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
