import AccountReducer from '../../app/redux/reducers/AccountReducer';
import * as Types from '../../app/redux/actions/types';

describe('Account Reducer', () => {
    it('has a default state', () => {
        expect(AccountReducer(undefined, { type: 'unexpected' })).toEqual({
            vehicles: {},
            error: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: false,
        });
    });

    it('can handle ADD_VEHICLE_SUCCESS', () => {
        const action = { type: Types.ADD_VEHICLE_SUCCESS };
      
        expect(AccountReducer(undefined, action)).toEqual({
            vehicles: {},
            error: '',
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
            vehicles: {},
            error: 'Placa inválida',
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
            vehicles: {"id": "abc123", "vehicles": "ABC-1234"},
            error: '',
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
            vehicles: {},
            error: '',
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
            vehicles: {},
            error: '',
            isSavingVehicle: false,
            isLoadingListOfVehicles: true,
        });
    });
});
