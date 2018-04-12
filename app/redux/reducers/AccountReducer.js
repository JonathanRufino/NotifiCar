import * as Types from '../actions/types';

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
        case Types.WRITE_VEHICLE:
            return {
                ...state,
                vehicle: action.payload,
                vehicleError: '',
            };
        case Types.ADD_VEHICLE_SUCCESS:
            return {
                ...state,
                dialogIsVisible: false,
                vehicle: '',
                isSavingVehicle: false,
            };
        case Types.ADD_VEHICLE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case Types.HANDLE_MODAL:
            return {
                ...state,
                dialogIsVisible: action.payload
            };
        case Types.UPDATE_VEHICLE_ERROR:
            return {
                ...state,
                vehicleError: action.payload
            };
        case Types.SHOW_DIALOG:
            return {
                ...state,
                dialogIsVisible: action.payload
            };
        case Types.FETCH_USER_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                isLoadingListOfVehicles: false
            };
        case Types.SAVING_VEHICLE:
            return {
                ...state,
                isSavingVehicle: true,
            };
        case Types.FETCH_VEHICLES_IS_LOADING:
            return {
                ...state,
                isLoadingListOfVehicles: true
            };
        default:
            return state;
    }
};

export default AccountReducer;
