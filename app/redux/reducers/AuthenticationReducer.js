import * as Types from '../actions/types';

const INITIAL_STATE = {
    accessToken: '',
    userID: '',
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CHECKING_USER_IS_LOGGED:
            return {
                ...state,
                isLoading: true,
            };
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userID: action.payload.userID,
                isLoading: false,
            };
        case Types.USER_IS_LOGGED:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userID: action.payload.userID,
                isLoading: false,
            };
        case Types.USER_IS_NOT_LOGGED:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};
