import {
    SHOW_DIALOG_FEED,
    WRITE_VEHICLE_FEED,
} from '../actions/types';

const INITIAL_STATE = {
    vehicle: '',
    dialogIsVisible: false,
    vehicleError: '',
    types_ocurrence: {},
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
        default:
            return state;
    }
};
