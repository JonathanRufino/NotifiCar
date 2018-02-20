import { USER_LOGIN_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    accessToken: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { ...state, accessToken: action.payload };
        default:
            return state;
    }
};
