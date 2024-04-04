export const START_STOPWATCH = 'START_STOPWATCH';
export const STOP_STOPWATCH = 'STOP_STOPWATCH';
export const RESET_STOPWATCH = 'RESET_STOPWATCH';
export const TICK = 'TICK';

export const startStopwatch = () => ({ type: START_STOPWATCH });
export const stopStopwatch = () => ({ type: STOP_STOPWATCH });
export const resetStopwatch = () => ({ type: RESET_STOPWATCH });
export const tick = () => ({ type: TICK });