import firebaseApp from '../../services/firebase';

import * as Types from './types';
import Values from '../../commom/values';

export const showDialog = (dialogIsVisible) => dispatch => {
    dispatch({ type: Types.SHOW_DIALOG_FEED, payload: dialogIsVisible });
    dispatch({ type: Types.OCCURRENCE_TYPE_IS_LOADING });
        
    if (dialogIsVisible) {
        firebaseApp.database().ref('/occurrence_types/')
        .on('value', snapshot => {
            dispatch({ type: Types.OCCURRENCE_TYPE_LOAD, payload: snapshot.val() });
            dispatch({ type: Types.OCCURRENCE_TYPE_LOADING_FINISHED });
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

export const addOccurrence = (userID, occurrenceType, vehicle) => (dispatch) => {
    dispatch({
        type: Types.SAVING_OCCURRENCE,
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

    firebaseApp.database().ref(`/occurrences/${year}/${month}/${day}/`)
        .push()
        .set({ userID, vehicle: vehicle.toUpperCase(), occurrence_type: occurrenceType, time })
        .then(() => dispatch({
            type: Types.ADD_OCCURRENCE_SUCCESS,
        }))
        .catch(error => dispatch({
            type: Types.ADD_OCCURRENCE_ERROR,
            payload: error
        }));
};

export const changeOccurrenceType = (occurrenceType) => ({
    type: Types.CHANGE_OCCURRENCE_TYPE,
    payload: occurrenceType
});

export const fetchOccurrencesOfTheDay = () => dispatch => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    dispatch({ type: Types.FETCH_OCCURRENCES_IS_LOADING });

    firebaseApp.database().ref(`/occurrences/${year}/${month}/${day}/`)
        .limitToLast(10)
        .on('value', snapshot => {
            dispatch({
                type: Types.FETCH_OCCURRENCES_OF_THE_DAY,
                payload: snapshot.val()
            });
        });
};
