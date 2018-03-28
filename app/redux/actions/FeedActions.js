import firebaseApp from '../../services/firebase';

import * as Types from './types';

export const showDialog = (dialogIsVisible) => dispatch => {
    dispatch({ type: Types.SHOW_DIALOG_FEED, payload: dialogIsVisible });
    dispatch({ type: Types.OCURRENCE_TYPE_IS_LOADING });
        
    if (dialogIsVisible) {
        firebaseApp.database().ref('/ocurrence_types/')
        .on('value', snapshot => {
            dispatch({ type: Types.OCURRENCE_TYPE_LOAD, payload: snapshot.val() });
            dispatch({ type: Types.OCURRENCE_TYPE_LOADING_FINISHED });
        });
    }   
};

export const writeVehicle = (vehicle) => ({
    type: Types.WRITE_VEHICLE_FEED,
    payload: vehicle
});

export const updateVehicleError = (error) => ({
    type: Types.UPDATE_VEHICLE_ERROR_FEED,
    payload: error
});

export const addOcurrence = (userID, ocurrenceType, vehicle) => (dispatch) => {
    dispatch({
        type: Types.SAVING_OCURRENCE,
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }
    const time = `${hour}:${minute}`;

    firebaseApp.database().ref(`/ocurrences/${year}/${month}/${day}/`)
        .push()
        .set({ userID, vehicle, ocurrence_type: ocurrenceType, time })
        .then(() => dispatch({
            type: Types.ADD_OCURRENCE_SUCCESS,
        }))
        .catch(error => dispatch({
            type: Types.ADD_OCURRENCE_ERROR,
            payload: error
        }));
};

export const changeOcurrenceType = (ocurrenceType) => ({
    type: Types.CHANGE_OCURRENCE_TYPE,
    payload: ocurrenceType
});

export const fetchOcurrencesOfTheDay = () => dispatch => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    dispatch({ type: Types.FETCH_OCURRENCES_IS_LOADING });

    firebaseApp.database().ref(`/ocurrences/${year}/${month}/${day}/`).limitToLast(20)
        .on('value', snapshot => {
            dispatch({
                type: Types.FETCH_OCURRENCES_OF_THE_DAY,
                payload: snapshot.val()
            });
        });
};
