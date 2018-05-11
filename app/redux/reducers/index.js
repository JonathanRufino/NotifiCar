import { combineReducers } from 'redux';

import AuthenticationReducer from './AuthenticationReducer';
import AccountReducer from './AccountReducer';
import FeedReducer from './FeedReducer';
import RankingReducer from './RankingReducer';

export default combineReducers({
    AuthenticationReducer,
    AccountReducer,
    FeedReducer,
    RankingReducer,
});
