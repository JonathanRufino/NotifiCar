import firebase from 'firebase';
import { AccessToken } from 'react-native-fbsdk';

import {
    WRITE_VEHICLE,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_ERROR,
    SHOW_DIALOG,
    GET_USER_DATA,
    UPDATE_VEHICLE_ERROR,
} from './types';

export const writeVehicle = (vehicle) => ({
    type: WRITE_VEHICLE,
    payload: vehicle
});

export const addVehicle = (userID, vehicle) => {
    const vehiclesRef = firebase.database().ref('vehicles');

    return (dispatch) => {
        vehiclesRef.child(userID.toString())
            .child('license_plate')
            .child(vehicle.toString())
            .set(true)
            .then(() => dispatch({
                type: ADD_VEHICLE_SUCCESS,
            }))
            .catch((error) => dispatch({
                type: ADD_VEHICLE_ERROR,
                payload: error
            }));
    };
};

export const showDialog = (dialogIsVisible) => ({
    type: SHOW_DIALOG,
    payload: dialogIsVisible
});

export const getUserData = () => {
    return (dispatch) => {
        AccessToken.getCurrentAccessToken()
            .then(user => dispatch({
                type: GET_USER_DATA,
                payload: user
            }));
    };
};

export const updateVehicleError = (error) => ({
    type: UPDATE_VEHICLE_ERROR,
    payload: error
});
