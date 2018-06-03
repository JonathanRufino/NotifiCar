import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from '../../app/redux/actions/FeedActions';
import * as Types from '../../app/redux/actions/types';
import firebaseApp from '../../app/services/firebase';
import * as utils from '../../app/utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Feed Actions Sync Methods', () => {
    // let store;
    // let date;
    // let occurrences;

    beforeAll(() => {
        // store = mockStore({});
        // date = utils.getDateAsArray();
        // occurrences = [
        //     {
        //         date: `${date[0]}/${date[1] + 1}/${date[2]}`,
        //         occurrence_type: '',
        //         photo: 'NO IMAGE',
        //         time: '12:00',
        //         userID: 'teste1',
        //         vehicle: 'XYZ-6789'
        //     },
        //     {
        //         date: `${date[0]}/${date[1] + 1}/${date[2]}`,
        //         occurrence_type: '',
        //         photo: 'NO IMAGE',
        //         time: '12:30',
        //         userID: 'teste2',
        //         vehicle: 'XYZ-6789'
        //     },
        // ];
    });

    afterEach(async () => {
        // await firebaseApp.database()
        //     .ref('test')
        //     .remove();
    });

    it('should fetch occurrences from user vehicles', async () => {
        // await firebaseApp.database()
        //     .ref(`test/occurrences/${date[0]}/${date[1]}/${date[2]}/`)
        //     .push()
        //     .set(occurrences[0]);

        // const userOccurrences = await actions.fetchOccurrencesOfTheDay('abc');
        // console.log(userOccurrences)

        // expect(userOccurrences.length).toEqual(1);
    });
});
