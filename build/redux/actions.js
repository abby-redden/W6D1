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
