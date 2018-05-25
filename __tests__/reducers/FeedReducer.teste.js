import FeedReducer from '../../app/redux/reducers/FeedReducer';
import * as Types from '../../app/redux/actions/types';

describe('Feed Reducer', () => {
    it('has a default state', () => {
        expect(FeedReducer(undefined, { type: 'unexpected' })).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle SHOW_DIALOG_FEED', () => {
        const action = {
            type: Types.SHOW_DIALOG_FEED,
            payload: true,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: true,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle WRITE_VEHICLE_FEED', () => {
        const action = {
            type: Types.WRITE_VEHICLE_FEED,
            payload: 'ABC-1234',
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: 'ABC-1234',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle UPDATE_VEHICLE_ERROR_FEED', () => {
        const action = {
            type: Types.UPDATE_VEHICLE_ERROR_FEED,
            payload: 'Placa inválida',
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: 'Placa inválida',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle OCCURRENCE_TYPE_LOAD', () => {
        const action = {
            type: Types.OCCURRENCE_TYPE_LOAD,
            payload: {
                occurrence_type1: {
                    type: 'Farol Aceso',
                    occurrences_count: 4
                },
                occurrence_type2: {
                    type: 'Alarme disparado',
                    occurrences_count: 6
                }
            },
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: [
                { occurrences_count: 6, type: 'Alarme disparado' }, 
                { occurrences_count: 4, type: 'Farol Aceso' }
            ],
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle CHANGE_OCCURRENCE_TYPE', () => {
        const action = {
            type: Types.CHANGE_OCCURRENCE_TYPE,
            payload: 'Vidro Aberto',
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Vidro Aberto',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle OCCURRENCE_TYPE_IS_LOADING', () => {
        const action = {
            type: Types.OCCURRENCE_TYPE_IS_LOADING,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle OCCURRENCE_TYPE_LOADING_FINISHED', () => {
        const action = {
            type: Types.OCCURRENCE_TYPE_LOADING_FINISHED,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: false,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle SAVING_OCCURRENCE', () => {
        const action = {
            type: Types.SAVING_OCCURRENCE,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle ADD_OCCURRENCE_SUCCESS', () => {
        const action = {
            type: Types.ADD_OCCURRENCE_SUCCESS,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
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
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
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
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {
                "occurrence1": {"date": "23/05/2100", "occurrence_type": "Farol Aceso", "photo": "https://firebasestorage...", "time": "22:20", "userID": "1596793017075805", "vehicle": "ABC-1234"}, 
                "occurrence2": {"date": "23/05/1995", "occurrence_type": "Vidro Aberto", "photo": "NO IMAGE", "time": "22:27", "userID": "1596793017075805", "vehicle": "ZYX-4321"},
            },
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle FETCH_OCCURRENCES_IS_LOADING', () => {
        const action = {
            type: Types.FETCH_OCCURRENCES_IS_LOADING,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: true,
        });
    });

    it('can handle ADD_OCCURRENCE_TYPE_COUNT_SUCCESS', () => {
        const action = {
            type: Types.ADD_OCCURRENCE_TYPE_COUNT_SUCCESS,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });

    it('can handle ADD_OCCURRENCE_TYPE_COUNT_ERROR', () => {
        const action = {
            type: Types.ADD_OCCURRENCE_TYPE_COUNT_ERROR,
        };
      
        expect(FeedReducer(undefined, action)).toEqual({
            vehicle: '',
            dialogIsVisible: false,
            vehicleError: '',
            occurrenceTypes: {},
            occurrencesOfTheDay: {},
            pickerValueHolder: 'Farol Aceso',
            isLoadingPicker: true,
            error: '',
            isLoadingListOfOccurrences: false,
        });
    });
});

