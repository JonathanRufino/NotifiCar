import _ from 'lodash';

import * as Types from '../actions/types';

const INITIAL_STATE = {
    vehicle: '',
    dialogIsVisible: false,
    vehicleError: '',
    occurrenceTypes: {},
    occurrencesOfTheDay: {},
    pickerValueHolder: 'Farol Aceso',
    isLoadingPicker: true,
    error: '',
    isLoadingListOfOccurrences: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SHOW_DIALOG_FEED:
            return {
                ...state,
                dialogIsVisible: action.payload
            };
        case Types.WRITE_VEHICLE_FEED:
            return {
                ...state,
                vehicle: action.payload,
                vehicleError: ''
            };
        case Types.UPDATE_VEHICLE_ERROR_FEED:
            return {
                ...state,
                vehicleError: action.payload
            };
        case Types.OCCURRENCE_TYPE_LOAD:
            return {
                ...state,
                occurrenceTypes: _.sortBy(action.payload, ['type'])
            };
        case Types.CHANGE_OCCURRENCE_TYPE:
            return {
                ...state,
                pickerValueHolder: action.payload
            };
        case Types.OCCURRENCE_TYPE_IS_LOADING:
            return {
                ...state,
                isLoadingPicker: true
            };
        case Types.OCCURRENCE_TYPE_LOADING_FINISHED:
            return {
                ...state,
                isLoadingPicker: false
            };
        case Types.SAVING_OCCURRENCE:
            return {
                ...state,
                isLoadingPicker: true
            };
        case Types.ADD_OCCURRENCE_SUCCESS:
            return {
                ...state,
                dialogIsVisible: false,
                vehicle: '',
                isLoadingPicker: false
            }; 
        case Types.ADD_OCCURRENCE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case Types.FETCH_OCCURRENCES_OF_THE_DAY:
            return {
                ...state,
                occurrencesOfTheDay: action.payload,
                isLoadingListOfOccurrences: false
            };
        case Types.FETCH_OCCURRENCES_IS_LOADING:
            return {
                ...state,
                isLoadingListOfOccurrences: true
            };
        default:
            return state;
    }
};
