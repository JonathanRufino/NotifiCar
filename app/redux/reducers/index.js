import { combineReducers } from 'redux';

import AuthenticationReducer from './AuthenticationReducer';
import AccountReducer from './AccountReducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
    AuthenticationReducer,
    AccountReducer,
    FeedReducer,
});
