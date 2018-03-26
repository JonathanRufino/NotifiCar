import * as Types from '../actions/types';

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
        case Types.OCURRENCE_TYPE_LOAD:
            return {
                ...state,
                ocurrenceTypes: action.payload
            };
        case Types.CHANGE_OCURRENCE_TYPE:
            return {
                ...state,
                pickerValueHolder: action.payload
            };
        case Types.OCURRENCE_TYPE_IS_LOADING:
            return {
                ...state,
                isLoadingPicker: true
            };
        case Types.OCURRENCE_TYPE_LOADING_FINISHED:
            return {
                ...state,
                isLoadingPicker: false
            };
        case Types.SAVING_OCURRENCE:
            return {
                ...state,
                isLoadingPicker: true
            };
        case Types.ADD_OCURRENCE_SUCCESS:
            return {
                ...state,
                dialogIsVisible: false,
                vehicle: '',
                isLoadingPicker: false
            }; 
        case Types.ADD_OCURRENCE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case Types.FETCH_OCURRENCES_OF_THE_DAY:
            return {
                ...state,
                ocurrencesOfTheDay: action.payload,
                isLoadingListOfOcurrences: false
            };
        case Types.FETCH_OCURRENCES_IS_LOADING:
            return {
                ...state,
                isLoadingListOfOcurrences: true
            };
        default:
            return state;
    }
};
