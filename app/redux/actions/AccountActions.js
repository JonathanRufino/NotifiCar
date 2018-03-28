import firebaseApp from '../../services/firebase';

import {
    WRITE_VEHICLE,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_ERROR,
    REMOVE_VEHICLE,
    SHOW_DIALOG,
    UPDATE_VEHICLE_ERROR,
    FETCH_USER_VEHICLES,
    SAVING_VEHICLE,
    FETCH_VEHICLES_IS_LOADING,
} from './types';

export const writeVehicle = (vehicle) => ({
    type: WRITE_VEHICLE,
    payload: vehicle
});

export const addVehicle = (userID, vehicle) => (dispatch) => {
    dispatch({
        type: SAVING_VEHICLE,
    });

    firebaseApp.database().ref(`/users/${userID}/vehicles`)
        .child(vehicle.toUpperCase())
        .set(true)
        .then(() => {
            firebaseApp.database().ref(`/vehicles/${vehicle.toUpperCase()}/`)
            .child(userID)
            .set(true);
        })
        .then(() => dispatch({
            type: ADD_VEHICLE_SUCCESS,
        }))
        .catch(error => dispatch({
            type: ADD_VEHICLE_ERROR,
            payload: error
        }));
};

export const removeVehicle = (userID, vehicle) => dispatch => {
    firebaseApp.database().ref(`/users/${userID}/vehicles`)
        .child(vehicle)
        .remove()
        .then(() => {
            firebaseApp.database().ref(`/vehicles/${vehicle.toUpperCase()}/`)
            .child(userID)
            .remove();
        })
        .then(() => dispatch({
            type: REMOVE_VEHICLE
        }))
        .catch(error => dispatch({
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
    dispatch({ type: FETCH_VEHICLES_IS_LOADING });

    firebaseApp.database().ref(`/users/${userID}/vehicles/`)
        .on('value', snapshot => {
            dispatch({
                type: FETCH_USER_VEHICLES,
                payload: snapshot.val()
            });
        });
};
