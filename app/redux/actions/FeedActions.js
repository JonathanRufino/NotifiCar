import * as Types from './types';
import firebaseApp from '../../services/firebase';

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

    let occurrenceTypeKey;
    const occurrencesOfTime = [];
    let lastOccurrenceKey;
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }
    const time = `${hour}:${minute}`;

    firebaseApp.database().ref(`/occurrences/${year}/${month}/${day}/`)
        .push()
        .set({ userID, vehicle: vehicle.toUpperCase(), occurrence_type: occurrenceType, time })
        .then(() => dispatch({ type: Types.ADD_OCCURRENCE_SUCCESS }))
        .then(() => {
            firebaseApp.database().ref('/occurrence_types/')
            .orderByChild('type')
            .equalTo(occurrenceType)
            .on('value', (snapshot) => {
                occurrenceTypeKey = Object.keys(snapshot.val())[0];

                firebaseApp.database().ref(`/occurrences/${year}/${month}/${day}/`)
                .orderByChild('time')
                .equalTo(time)
                .on('value', (snapshotOccurrence) => {
                    snapshotOccurrence.forEach((data) => {
                        occurrencesOfTime.push(data.key);
                    });
                    
                    lastOccurrenceKey = occurrencesOfTime.slice(-1)[0];

                    firebaseApp.database().ref(`/occurrence_types/${occurrenceTypeKey}/occurrences`)
                    .child(lastOccurrenceKey)
                    .set(true)
                    .then(() => dispatch({
                        type: Types.ADD_OCCURRENCE_TYPE_COUNT_SUCCESS,
                    }))
                    .catch(error => dispatch({
                        type: Types.ADD_OCCURRENCE_TYPE_COUNT_ERROR,
                        payload: error
                    }));
                });
            });
        })
        .catch(error => dispatch({
            type: Types.ADD_OCCURRENCE_ERROR,
            payload: error
        }));
    
    firebaseApp.database().ref(`/users/${userID}/`)
        .child('occurrencesCount')
        .transaction(occurrencesCount => occurrencesCount + 1);
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
        .orderByChild('time')
        .limitToLast(10)
        .on('value', snapshot => {
            const occurrences = [];

            snapshot.forEach(item => {
                occurrences.push({ key: item.key, occurrence: item.val() });
            });

            dispatch({
                type: Types.FETCH_OCCURRENCES_OF_THE_DAY,
                payload: occurrences.reverse()
            });
        });
};
