import firebaseApp from '../../services/firebase';

import {
    SHOW_DIALOG_FEED,
    WRITE_VEHICLE_FEED,
    UPDATE_VEHICLE_ERROR_FEED,
    OCURRENCE_TYPE_LOAD,
    CHANGE_OCURRENCE_TYPE,
    OCURRENCE_TYPE_IS_LOADING,
    OCURRENCE_TYPE_LOADING_FINISHED,
} from './types';

export const showDialog = (dialogIsVisible) => dispatch => {
    dispatch({ type: SHOW_DIALOG_FEED, payload: dialogIsVisible });
    dispatch({ type: OCURRENCE_TYPE_IS_LOADING });
        
    if (dialogIsVisible) {
        firebaseApp.database().ref('/ocurrence_types/')
        .on('value', snapshot => {
            dispatch({ type: OCURRENCE_TYPE_LOAD, payload: snapshot.val() });
            dispatch({ type: OCURRENCE_TYPE_LOADING_FINISHED });
        });
    }   
};

export const writeVehicle = (vehicle) => ({
    type: WRITE_VEHICLE_FEED,
    payload: vehicle
});

export const updateVehicleError = (error) => ({
    type: UPDATE_VEHICLE_ERROR_FEED,
    payload: error
});

export const changeOcurrenceType = (ocurrenceType) => ({
    type: CHANGE_OCURRENCE_TYPE,
    payload: ocurrenceType
});
