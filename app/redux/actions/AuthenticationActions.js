import { AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import FCM from 'react-native-fcm';
import { Platform } from 'react-native';

import * as Types from './types';
import firebaseApp from '../../services/firebase';

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

    checkUserDeviceToken(data, dispatch);
};

const checkUserDeviceToken = (data, dispatch) => {
    if (Platform.OS === 'ios') {
        FCM.getAPNSToken().then(token => {
            firebaseApp.database().ref(`/users/${data.userID}/`)
            .update({ token, userPlataform: Platform.OS })
            .then(() => {
                dispatch({ type: Types.CHECK_USER_TOKEN_DEVICE });
                Actions.main();
            });
        });
    } else {
        FCM.getFCMToken().then(token => {
            firebaseApp.database().ref(`/users/${data.userID}/`)
            .update({ token, platform: Platform.OS })
            .then(() => {
                dispatch({ type: Types.CHECK_USER_TOKEN_DEVICE });
                Actions.main();
            });
          });
    }
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
