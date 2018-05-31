import AccountReducer from '../../app/redux/reducers/AccountReducer';
import * as Types from '../../app/redux/actions/types';

describe('Account Reducer', () => {
    it('has a default state', () => {
        expect(AccountReducer(undefined, { type: 'unexpected' })).toEqual({
            vehicle: '',
            vehicles: {},
            error: '',
            dialogIsVisible: false,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle WRITE_VEHICLE', () => {
        const action = {
            type: Types.WRITE_VEHICLE,
            payload: 'ABC-1234',
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: 'ABC-1234',
            vehicles: {},
            error: '',
            dialogIsVisible: false,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle ADD_VEHICLE_SUCCESS', () => {
        const action = {
            type: Types.ADD_VEHICLE_SUCCESS,
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {},
            error: '',
            dialogIsVisible: false,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle ADD_VEHICLE_ERROR', () => {
        const action = {
            type: Types.ADD_VEHICLE_ERROR,
            payload: 'Placa inválida',
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {},
            error: 'Placa inválida',
            dialogIsVisible: false,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle HANDLE_MODAL', () => {
        const action = {
            type: Types.HANDLE_MODAL,
            payload: true,
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {},
            error: '',
            dialogIsVisible: true,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle UPDATE_VEHICLE_ERROR', () => {
        const action = {
            type: Types.UPDATE_VEHICLE_ERROR,
            payload: 'Informe a placa do veículo',
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {},
            error: '',
            dialogIsVisible: false,
            vehicleError: 'Informe a placa do veículo',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle SHOW_DIALOG', () => {
        const action = {
            type: Types.SHOW_DIALOG,
            payload: true,
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {},
            error: '',
            dialogIsVisible: true,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle FETCH_USER_VEHICLES', () => {
        const action = {
            type: Types.FETCH_USER_VEHICLES,
            payload: {
                id: 'abc123',
                vehicles: 'ABC-1234'
            },
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {"id": "abc123", "vehicles": "ABC-1234"},
            error: '',
            dialogIsVisible: false,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle SAVING_VEHICLE', () => {
        const action = {
            type: Types.SAVING_VEHICLE,
            payload: true,
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {},
            error: '',
            dialogIsVisible: false,
            vehicleError: '',
            isSavingVehicle: true,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle FETCH_VEHICLES_IS_LOADING', () => {
        const action = {
            type: Types.FETCH_VEHICLES_IS_LOADING,
            payload: true,
        };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicle: '',
            vehicles: {},
            error: '',
            dialogIsVisible: false,
            vehicleError: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: true,
        });
    });
});
