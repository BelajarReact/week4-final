import {combineReducers} from 'redux';
import  loginReducer from './loginReducer'
import  stopwatch from './stopwatchReducer'

export default combineReducers({loginReducer,stopwatch});
