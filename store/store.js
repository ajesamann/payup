import { combineReducers } from 'redux';
import { alertReducer } from './reducers/AlertReducer';

export default combineReducers({
    alert: alertReducer
});