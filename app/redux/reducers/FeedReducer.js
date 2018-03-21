import {
    SHOW_DIALOG_FEED,
    WRITE_VEHICLE_FEED,
    UPDATE_VEHICLE_ERROR_FEED,
    OCURRENCE_TYPE_LOAD,
    CHANGE_OCURRENCE_TYPE,
    OCURRENCE_TYPE_IS_LOADING,
    OCURRENCE_TYPE_LOADING_FINISHED,
} from '../actions/types';

const INITIAL_STATE = {
    vehicle: '',
    dialogIsVisible: false,
    vehicleError: '',
    ocurrenceTypes: {},
    pickerValueHolder: 'Farol Aceso',
    isLoadingPicker: true,
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
        default:
            return state;
    }
};
