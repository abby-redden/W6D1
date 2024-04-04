import { createStore } from 'redux';
import stopwatchReducer from './reducer';

const store = createStore(stopwatchReducer);

export default store;