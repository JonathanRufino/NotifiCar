import * as Types from '../actions/types';

const INITIAL_STATE = {
    occurrencesOfTheDay: {},
    isLoadingPicker: false,
    error: '',
    isLoadingListOfOccurrences: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SAVING_OCCURRENCE:
            return {
                ...state,
                isLoadingPicker: true
            };
        case Types.ADD_OCCURRENCE_SUCCESS:
            return {
                ...state,
                isLoadingPicker: false
            }; 
        case Types.ADD_OCCURRENCE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case Types.FETCH_OCCURRENCES_OF_THE_DAY:
            return {
                ...state,
                occurrencesOfTheDay: action.payload,
                isLoadingListOfOccurrences: false
            };
        case Types.FETCH_OCCURRENCES_IS_LOADING:
            return {
                ...state,
                isLoadingListOfOccurrences: true
            };
        case Types.ADD_OCCURRENCE_TYPE_COUNT_SUCCESS:
            return {
                ...state,
            };
        case Types.ADD_OCCURRENCE_TYPE_COUNT_ERROR:
            return {
                ...state,
            };
        default:
            return state;
    }
};
