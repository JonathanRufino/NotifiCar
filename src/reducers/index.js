import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AccountReducer from './AccountReducer';

export default combineReducers({
    AuthenticationReducer,
    AccountReducer
});
