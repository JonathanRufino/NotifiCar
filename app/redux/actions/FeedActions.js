import firebaseApp from '../../services/firebase';

import {
    SHOW_DIALOG_FEED,
    WRITE_VEHICLE_FEED,
    UPDATE_VEHICLE_ERROR_FEED,
    OCURRENCE_TYPE_LOAD,
    CHANGE_OCURRENCE_TYPE,
    OCURRENCE_TYPE_IS_LOADING,
    OCURRENCE_TYPE_LOADING_FINISHED,
    SAVING_OCURRENCE,
    ADD_OCURRENCE_SUCCESS,
    ADD_OCURRENCE_ERROR,
    FETCH_OCURRENCES_OF_THE_DAY,
    FETCH_OCURRENCES_IS_LOADING,
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

export const addOcurrence = (userID, typeOcurrence, vehicle) => (dispatch) => {
    dispatch({
        type: SAVING_OCURRENCE,
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = `${hour}:${minute}`;

    firebaseApp.database().ref(`/ocurrences/${year}/${month}/${day}/`)
        .push()
        .set({ userID, vehicle, typeOcurrence, time })
        .then(() => dispatch({
            type: ADD_OCURRENCE_SUCCESS,
        }))
        .catch(error => dispatch({
            type: ADD_OCURRENCE_ERROR,
            payload: error
        }));
};

export const changeOcurrenceType = (ocurrenceType) => ({
    type: CHANGE_OCURRENCE_TYPE,
    payload: ocurrenceType
});

export const fetchOcurrencesOfTheDay = () => dispatch => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    dispatch({ type: FETCH_OCURRENCES_IS_LOADING });

    firebaseApp.database().ref(`/ocurrences/${year}/${month}/${day}/`).limitToLast(20)
        .on('value', snapshot => {
            dispatch({
                type: FETCH_OCURRENCES_OF_THE_DAY,
                payload: snapshot.val()
            });
        });
};
