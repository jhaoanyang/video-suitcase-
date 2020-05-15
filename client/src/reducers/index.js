import { combineReducers } from 'redux';

import videoReducer from './videoReducer'
import collectReducer from './collectReducer'

export default combineReducers({
    video: videoReducer,
    collect: collectReducer
});