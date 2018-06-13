import * as Types from '../actions/types';

const INITIAL_STATE = {
    occurrencesTypes: [],
    fetchingOccurrencesTypes: false,
};

const MainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.FETCH_OCCURRENCES_TYPES:
            return {
                ...state,
                fetchingOccurrencesTypes: true,
            };
        case Types.FETCH_OCCURRENCES_TYPES_SUCCESS:
            return {
                ...state,
                occurrencesTypes: action.payload,
                fetchingOccurrencesTypes: false,
            };
        case Types.FETCH_OCCURRENCES_TYPES_ERROR:
            return {
                ...state,
                fetchingOccurrencesTypes: false,
                occurrencesTypes: [],
            };
        default:
            return state;
    }
};

export default MainReducer;
