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
