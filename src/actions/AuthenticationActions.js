import { 
    USER_LOGIN_SUCCESS, 
    CHECKING_USER_IS_LOGGED,
    USER_IS_LOGGED, 
    USER_IS_NOT_LOGGED
} from './types';
import { AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

export const userLoginSuccess = (text) => ({
    type: USER_LOGIN_SUCCESS,
    payload: text
});

export const checkUserLogged = () => dispatch => {
    dispatch({ type: CHECKING_USER_IS_LOGGED });

    AccessToken.getCurrentAccessToken().then(
        (data) => { 
            if (data != null) {
                userIsLogged(dispatch);
            } else {
                userIsNotLogged(dispatch);
            }
        }
    );
};

const userIsLogged = (dispatch) => {
    dispatch({ type: USER_IS_LOGGED });

    Actions.main();
};

const userIsNotLogged = (dispatch) => {
    dispatch({ type: USER_IS_NOT_LOGGED });
};
