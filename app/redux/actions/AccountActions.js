import firebaseApp from '../../services/firebase';

import * as Types from './types';
import { fetchOccurrencesOfTheDay } from './FeedActions';

export const writeVehicle = (vehicle) => ({
    type: Types.WRITE_VEHICLE,
    payload: vehicle
});

export const addVehicle = (userID, vehicle) => (dispatch) => {
    dispatch({
        type: Types.SAVING_VEHICLE,
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
            type: Types.ADD_VEHICLE_SUCCESS,
        }))
        .catch(error => dispatch({
            type: Types.ADD_VEHICLE_ERROR,
            payload: error
        }));
    
    dispatch(fetchOccurrencesOfTheDay(userID));
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
        .then(() => dispatch({ type: Types.REMOVE_VEHICLE }))
        .catch(error => dispatch({
            type: Types.ADD_VEHICLE_ERROR,
            payload: error
        }));

    dispatch(fetchOccurrencesOfTheDay(userID));
};

export const showDialog = (dialogIsVisible) => ({
    type: Types.SHOW_DIALOG,
    payload: dialogIsVisible
});

export const updateVehicleError = (error) => ({
    type: Types.UPDATE_VEHICLE_ERROR,
    payload: error
});

export const fetchUserVehicles = userID => dispatch => {
    dispatch({ type: Types.FETCH_VEHICLES_IS_LOADING });

    firebaseApp.database().ref(`/users/${userID}/vehicles/`)
        .orderByKey()
        .on('value', snapshot => {
            dispatch({
                type: Types.FETCH_USER_VEHICLES,
                payload: snapshot.val()
            });
        });
};
