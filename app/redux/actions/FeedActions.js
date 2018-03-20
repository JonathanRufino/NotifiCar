import {
    SHOW_DIALOG_FEED,
    WRITE_VEHICLE_FEED,
} from './types';

export const showDialog = (dialogIsVisible) => ({
    type: SHOW_DIALOG_FEED,
    payload: dialogIsVisible
});

export const writeVehicle = (vehicle) => ({
    type: WRITE_VEHICLE_FEED,
    payload: vehicle
});
