import firebase from 'firebase';

import {
    WRITE_VEHICLE,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_ERROR,
    SHOW_DIALOG,
    UPDATE_VEHICLE_ERROR,
    FETCH_USER_VEHICLES,
} from './types';

export const writeVehicle = (vehicle) => ({
    type: WRITE_VEHICLE,
    payload: vehicle
});

export const addVehicle = (userID, vehicle) => (dispatch) => {
    firebase.database().ref(`/vehicles/${userID}`)
        .push({ vehicle })
        .then(() => dispatch({
            type: ADD_VEHICLE_SUCCESS,
        }))
        .catch((error) => dispatch({
            type: ADD_VEHICLE_ERROR,
            payload: error
        }));
};

export const showDialog = (dialogIsVisible) => ({
    type: SHOW_DIALOG,
    payload: dialogIsVisible
});

export const updateVehicleError = (error) => ({
    type: UPDATE_VEHICLE_ERROR,
    payload: error
});

export const fetchUserVehicles = userID => dispatch => {
    firebase.database().ref(`/vehicles/${userID}`)
        .on('value', snapshot => {
            dispatch({
                type: FETCH_USER_VEHICLES,
                payload: snapshot.val()
            });
        });
};
