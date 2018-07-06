import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as Types from '../../app/redux/actions/types';
import { fetchOccurrencesTypes } from '../../app/redux/actions/MainActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Main Actions', () => {
    const store = mockStore({});

    it('should trigger FETCH_OCCURRENCES_TYPES', async () => {
        store.dispatch(fetchOccurrencesTypes());

        const actions = store.getActions();

        expect(actions[0]).toEqual({ type: Types.FETCH_OCCURRENCES_TYPES });
    });  
});
