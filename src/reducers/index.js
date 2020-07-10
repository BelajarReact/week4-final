import {combineReducers} from 'redux';

import  {loginReducer} from './loginReducer'
import  {stopWatchReducer} from './stopwatchReducer'

export default combineReducers({loginReducer:loginReducer,stopWatchReducer:stopWatchReducer});