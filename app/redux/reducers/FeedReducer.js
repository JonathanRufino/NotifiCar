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
} from '../actions/types';

const INITIAL_STATE = {
    vehicle: '',
    dialogIsVisible: false,
    vehicleError: '',
    ocurrenceTypes: {},
    ocurrencesOfTheDay: {},
    pickerValueHolder: 'Farol Aceso',
    isLoadingPicker: true,
    error: '',
    isLoadingListOfOcurrences: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_DIALOG_FEED:
            return {
                ...state,
                dialogIsVisible: action.payload
            };
        case WRITE_VEHICLE_FEED:
            return {
                ...state,
                vehicle: action.payload,
                vehicleError: ''
            };
        case UPDATE_VEHICLE_ERROR_FEED:
            return {
                ...state,
                vehicleError: action.payload
            };
        case OCURRENCE_TYPE_LOAD:
            return {
                ...state,
                ocurrenceTypes: action.payload
            };
        case CHANGE_OCURRENCE_TYPE:
            return {
                ...state,
                pickerValueHolder: action.payload
            };
        case OCURRENCE_TYPE_IS_LOADING:
            return {
                ...state,
                isLoadingPicker: true
            };
        case OCURRENCE_TYPE_LOADING_FINISHED:
            return {
                ...state,
                isLoadingPicker: false
            };
        case SAVING_OCURRENCE:
            return {
                ...state,
                isLoadingPicker: true
            };
        case ADD_OCURRENCE_SUCCESS:
            return {
                ...state,
                dialogIsVisible: false,
                vehicle: '',
                isLoadingPicker: false
            }; 
        case ADD_OCURRENCE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_OCURRENCES_OF_THE_DAY:
            return {
                ...state,
                ocurrencesOfTheDay: action.payload,
                isLoadingListOfOcurrences: false
            };
        case FETCH_OCURRENCES_IS_LOADING:
            return {
                ...state,
                isLoadingListOfOcurrences: true
            };
        default:
            return state;
    }
};
