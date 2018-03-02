import {
    WRITE_VEHICLE,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_ERROR,
    HANDLE_MODAL,
    GET_USER_DATA,
    UPDATE_VEHICLE_ERROR,
    SHOW_DIALOG,
} from '../actions/types';

const INITIAL_STATE = {
    vehicle: '',
    vehicles: [],
    error: '',
    dialogIsVisible: false,
    userData: {},
    vehicleError: '',
};

const AccountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WRITE_VEHICLE:
            return {
                ...state,
                vehicle: action.payload,
                vehicleError: '',
            };
        case ADD_VEHICLE_SUCCESS:
            return {
                ...state,
                dialogIsVisible: false,
            };
        case ADD_VEHICLE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case HANDLE_MODAL:
            return {
                ...state,
                dialogIsVisible: action.payload
            };
        case GET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            };
        case UPDATE_VEHICLE_ERROR:
            return {
                ...state,
                vehicleError: action.payload
            };
        case SHOW_DIALOG:
            return {
                ...state,
                dialogIsVisible: action.payload
            };
        default:
            return state;
    }
};

export default AccountReducer;
