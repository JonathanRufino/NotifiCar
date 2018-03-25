import { AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import * as Types from './types';

export const checkUserIsLogged = () => dispatch => {
    dispatch({ type: Types.CHECKING_USER_IS_LOGGED });

    AccessToken.getCurrentAccessToken()
        .then(data => { 
            if (data !== null) {
                userIsLogged(data, dispatch);
            } else {
                userIsNotLogged(dispatch);
            }
        }
    );
};

const userIsLogged = (data, dispatch) => {
    dispatch({
        type: Types.USER_IS_LOGGED,
        payload: {
            accessToken: data.accessToken,
            userID: data.userID
        }
    });

    Actions.main();
};

const userIsNotLogged = (dispatch) => {
    dispatch({ type: Types.USER_IS_NOT_LOGGED });
};

export const userLoginSuccess = (accessToken, userID) => ({
    type: Types.USER_LOGIN_SUCCESS,
    payload: {
        accessToken,
        userID,
    }
});
