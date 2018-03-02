import { USER_LOGIN_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    accessToken: '',
    userID: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userID
            };
        default:
            return state;
    }
};
