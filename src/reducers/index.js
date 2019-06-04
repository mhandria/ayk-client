import { combineReducers } from 'redux';

import mediaReducer from './mediaList';

/**
 * what we want to store:
 * - media filters => list of string
 * - media lists => list of object
 * - current media selected => object 
 */

export default combineReducers({
    mediaReducer
})