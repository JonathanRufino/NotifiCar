import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../app/redux/actions/FeedActions';
import * as Types from '../../app/redux/actions/types';
import firebaseApp from '../../app/services/firebase';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Feed Actions Sync Methods', () => {
    it('should create an action to write a vehicle', () => {
        const vehicle = 'ABC-1234';
        const expectedAction = {
          type: Types.WRITE_VEHICLE_FEED,
          payload: vehicle
        };

        expect(actions.writeVehicle(vehicle)).toEqual(expectedAction);
    });

    it('should create an action to update the vehicle error', () => {
        const error = 'Placa Inválida';
        const expectedAction = {
          type: Types.UPDATE_VEHICLE_ERROR_FEED,
          payload: error
        };

        expect(actions.updateVehicleError(error)).toEqual(expectedAction);
    });

    it('should create an action to change the occurrence type', () => {
        const occurrenceType = 'Vidro Aberto';
        const expectedAction = {
          type: Types.CHANGE_OCCURRENCE_TYPE,
          payload: occurrenceType
        };

        expect(actions.changeOccurrenceType(occurrenceType)).toEqual(expectedAction);
    });
});

