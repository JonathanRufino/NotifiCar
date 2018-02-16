import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { USER_LOGIN_SUCCESS } from './types';

export const userLoginSuccess = (text) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: text
    }
}