import { AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import { 
    USER_LOGIN_SUCCESS, 
    CHECKING_USER_IS_LOGGED,
    USER_IS_LOGGED, 
    USER_IS_NOT_LOGGED
} from './types';

export const userLoginSuccess = (accessToken, userID) => ({
    type: USER_LOGIN_SUCCESS,
    payload: {
        accessToken,
        userID,
    }
});

export const checkUserLogged = () => dispatch => {
    dispatch({ type: CHECKING_USER_IS_LOGGED });

    AccessToken.getCurrentAccessToken()
        .then((data) => { 
            if (data != null) {
                userIsLogged(data, dispatch);
            } else {
                userIsNotLogged(dispatch);
            }
        }
    );
};

const userIsLogged = (data, dispatch) => {
    dispatch({
        type: USER_IS_LOGGED,
        payload: {
            accessToken: data.accessToken,
            userID: data.userID
        }
    });

    Actions.main();
};

const userIsNotLogged = (dispatch) => {
    dispatch({ type: USER_IS_NOT_LOGGED });
};
