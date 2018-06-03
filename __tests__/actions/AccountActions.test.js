import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from '../../app/redux/actions/AccountActions';
import * as Types from '../../app/redux/actions/types';
import firebaseApp from '../../app/services/firebase';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Account Actions Async Methods', () => {
    it('should execute addVehicle', () => {
        const store = mockStore({});

        return store.dispatch(dispatch =>
            firebaseApp.database().ref('/users/test/vehicles') // Some async action with promise
                .child('ABC-1234')
                .set(true)
                .then(() => dispatch({ type: Types.ADD_VEHICLE_SUCCESS })))
        .then(() => {
            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: Types.ADD_VEHICLE_SUCCESS
            });
        });
    });

    it('should execute fetchUserVehicles', () => {
        const store = mockStore({});

        return store.dispatch(dispatch => firebaseApp.database()
            .ref('/users/test/vehicles') // Some async action with promise
            .child('ABC-1234')
            .set(false)
            .then(() => dispatch({ type: Types.FETCH_VEHICLES_IS_LOADING })))
        .then(() => {
            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: Types.FETCH_VEHICLES_IS_LOADING
            });
        });
    });

    it('should execute removeVehicle', () => {
        const store = mockStore({});

        return store.dispatch(dispatch => firebaseApp.database()
            .ref('/users/test/vehicles')
            .child('ABC-1234')
            .remove()
            .then(() => dispatch({ type: Types.REMOVE_VEHICLE })))
        .then(() => {
            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: Types.REMOVE_VEHICLE
            });
        });
    });    
});
