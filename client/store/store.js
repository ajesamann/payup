import { combineReducers } from 'redux';
import { alertReducer } from './reducers/AlertReducer';
import { balanceReducer } from './reducers/BalanceReducer';

export default combineReducers({
    alert: alertReducer,
    balance: balanceReducer
});