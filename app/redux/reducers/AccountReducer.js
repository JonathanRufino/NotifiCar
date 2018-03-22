import {
    WRITE_VEHICLE,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_ERROR,
    HANDLE_MODAL,
    UPDATE_VEHICLE_ERROR,
    SHOW_DIALOG,
    FETCH_USER_VEHICLES,
    SAVING_VEHICLE,
    FETCH_VEHICLES_IS_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
    vehicle: '',
    vehicles: {},
    error: '',
    dialogIsVisible: false,
    vehicleError: '',
    isSavingVehicle: false,
    isLoadingListOfVehicles: false,
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
                vehicle: '',
                isSavingVehicle: false,
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
        case FETCH_USER_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                isLoadingListOfVehicles: false
            };
        case SAVING_VEHICLE:
            return {
                ...state,
                isSavingVehicle: true,
            };
        case FETCH_VEHICLES_IS_LOADING:
            return {
                ...state,
                isLoadingListOfVehicles: true
            };
        default:
            return state;
    }
};

export default AccountReducer;
