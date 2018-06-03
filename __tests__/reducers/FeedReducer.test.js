import FeedReducer from '../../app/redux/reducers/FeedReducer';
import * as Types from '../../app/redux/actions/types';

describe('Feed Reducer', () => {
    it('has a default state', () => {
        expect(FeedReducer(undefined, { type: 'unexpected' })).toEqual({
            occurrencesOfTheDay: {},
            isLoadingPicker: false,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle SAVING_OCCURRENCE', () => {
        const action = { type: Types.SAVING_OCCURRENCE };

        expect(FeedReducer(undefined, action)).toEqual({
            occurrencesOfTheDay: {},
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle ADD_OCCURRENCE_SUCCESS', () => {
        const action = { type: Types.ADD_OCCURRENCE_SUCCESS };
      
        expect(FeedReducer(undefined, action)).toEqual({
            occurrencesOfTheDay: {},
            isLoadingPicker: false,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle ADD_OCCURRENCE_ERROR', () => {
        const action = {
            type: Types.ADD_OCCURRENCE_ERROR,
            payload: 'Houve um erro ao enviar verifique sua conexão'
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            occurrencesOfTheDay: {},
            isLoadingPicker: false,
            error: 'Houve um erro ao enviar verifique sua conexão',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle FETCH_OCCURRENCES_OF_THE_DAY', () => {
        const action = {
            type: Types.FETCH_OCCURRENCES_OF_THE_DAY,
            payload: {
                occurrence1: {
                    date: '23/05/2100',
                    occurrence_type: 'Farol Aceso',
                    photo: 'https://firebasestorage...',
                    time: '22:20',
                    userID: '1596793017075805',
                    vehicle: 'ABC-1234'
                },
                occurrence2: {
                    date: '23/05/1995',
                    occurrence_type: 'Vidro Aberto',
                    photo: 'NO IMAGE',
                    time: '22:27',
                    userID: '1596793017075805',
                    vehicle: 'ZYX-4321'
                },
            },
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            occurrencesOfTheDay: {
                occurrence1: {
                    date: '23/05/2100',
                    occurrence_type: 'Farol Aceso',
                    photo: 'https://firebasestorage...',
                    time: '22:20',
                    userID: '1596793017075805',
                    vehicle: 'ABC-1234'
                }, 
                occurrence2: {
                    date: '23/05/1995',
                    occurrence_type: 'Vidro Aberto',
                    photo: 'NO IMAGE',
                    time: '22:27',
                    userID: '1596793017075805',
                    vehicle: 'ZYX-4321'
                },
            },
            isLoadingPicker: false,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle FETCH_OCCURRENCES_IS_LOADING', () => {
        const action = { type: Types.FETCH_OCCURRENCES_IS_LOADING };

        expect(FeedReducer(undefined, action)).toEqual({
            occurrencesOfTheDay: {},
            isLoadingPicker: false,
            error: '',
            isLoadingListOfOccurrences: true,
        });
    });

    it('can handle ADD_OCCURRENCE_TYPE_COUNT_SUCCESS', () => {
        const action = { type: Types.ADD_OCCURRENCE_TYPE_COUNT_SUCCESS };

        expect(FeedReducer(undefined, action)).toEqual({
            occurrencesOfTheDay: {},
            isLoadingPicker: false,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle ADD_OCCURRENCE_TYPE_COUNT_ERROR', () => {
        const action = { type: Types.ADD_OCCURRENCE_TYPE_COUNT_ERROR };

        expect(FeedReducer(undefined, action)).toEqual({
            occurrencesOfTheDay: {},
            isLoadingPicker: false,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });
});
