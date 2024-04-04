import { START_STOPWATCH, STOP_STOPWATCH, RESET_STOPWATCH, TICK } from '../redux/actions';

const initialState = {
  time: 0,
  isRunning: false,
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_STOPWATCH:
      return { ...state, isRunning: true };
    case STOP_STOPWATCH:
      return { ...state, isRunning: false };
    case RESET_STOPWATCH:
      return { ...state, time: 0, isRunning: false };
    case TICK:
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
};

export default stopwatchReducer;