import * as Types from '../actions/types';

const INITIAL_STATE = {
    isLoadingListOfRanking: false,
    occurrencesTypeRankingPodium: {},
    occurrencesTypeRankingList: {},
    totalOccurrenceType: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.FETCH_OCCURRENCES_TYPE_RANKING_IS_LOADING:
            return {
                ...state,
                isLoadingListOfRanking: true
            };
        case Types.FETCH_OCCURRENCES_TYPE_RANKING_LIST:
            return {
                ...state,
                occurrencesTypeRankingList: action.payload,
                isLoadingListOfRanking: false
            };
        case Types.FETCH_OCCURRENCES_TYPE_RANKING_IMAGES:
            return {
                ...state,
                occurrencesTypeRankingPodium: action.payload,
            };
        case Types.FETCH_OCCURRENCES_TYPE_RANKING_TOTAL:
            return {
                ...state,
                occurrencesTypeRankingPodium: action.payload,
            };
        default:
            return state;
    }
};
