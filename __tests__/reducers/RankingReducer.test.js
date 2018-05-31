import RankingReducer from '../../app/redux/reducers/RankingReducer';
import * as Types from '../../app/redux/actions/types';

describe('Ranking Reducer', () => {
    it('has a default state', () => {
        expect(RankingReducer(undefined, { type: 'unexpected' })).toEqual({
            isLoadingListOfRanking: false,
            occurrencesTypeRankingPodium: [],
            occurrencesTypeRankingList: [],
            totalOccurrenceType: 0,
        });
    });

    it('can handle FETCH_OCCURRENCES_TYPE_RANKING_IS_LOADING', () => {
        const action = {
            type: Types.FETCH_OCCURRENCES_TYPE_RANKING_IS_LOADING,
        };
      
        expect(RankingReducer(undefined, action)).toEqual({
            isLoadingListOfRanking: true,
            occurrencesTypeRankingPodium: [],
            occurrencesTypeRankingList: [],
            totalOccurrenceType: 0,
        });
    });

    it('can handle FETCH_OCCURRENCES_TYPE_RANKING_LIST', () => {
        const action = {
            type: Types.FETCH_OCCURRENCES_TYPE_RANKING_LIST,
            payload: {
                occurrence_type1: {
                    type: 'Alarme Disparado',
                    occurrences_count: 0
                },
                occurrence_type2: {
                    type: 'Farol Aceso',
                    occurrences_count: 1
                },
                occurrence_type3: {
                    type: 'Pneu Furado',
                    occurrences_count: 2
                },
                occurrence_type4: {
                    type: 'Bloqueando a Passagem',
                    occurrences_count: 3
                }
            },
        };
      
        expect(RankingReducer(undefined, action)).toEqual({
            isLoadingListOfRanking: false,
            occurrencesTypeRankingPodium: [],
            occurrencesTypeRankingList: {
                "occurrence_type1": {"occurrences_count": 0, "type": "Alarme Disparado"}, 
                "occurrence_type2": {"occurrences_count": 1, "type": "Farol Aceso"}, 
                "occurrence_type3": {"occurrences_count": 2, "type": "Pneu Furado"}, 
                "occurrence_type4": {"occurrences_count": 3, "type": "Bloqueando a Passagem"}},
            totalOccurrenceType: 0,
        });
    });

    it('can handle FETCH_OCCURRENCES_TYPE_RANKING_IMAGES', () => {
        const action = {
            type: Types.FETCH_OCCURRENCES_TYPE_RANKING_IMAGES,
            payload: {
                occurrence_type1: {
                    type: 'Alarme Disparado',
                    occurrences_count: 0
                },
                occurrence_type2: {
                    type: 'Farol Aceso',
                    occurrences_count: 1
                },
                occurrence_type3: {
                    type: 'Pneu Furado',
                    occurrences_count: 2
                },
            },
        };
      
        expect(RankingReducer(undefined, action)).toEqual({
            isLoadingListOfRanking: false,
            occurrencesTypeRankingPodium: {
                "occurrence_type1": {"occurrences_count": 0, "type": "Alarme Disparado"}, 
                "occurrence_type2": {"occurrences_count": 1, "type": "Farol Aceso"}, 
                "occurrence_type3": {"occurrences_count": 2, "type": "Pneu Furado"}
            },
            occurrencesTypeRankingList: [],
            totalOccurrenceType: 0,
        });
    });

    it('can handle FETCH_OCCURRENCES_TYPE_RANKING_TOTAL', () => {
        const action = {
            type: Types.FETCH_OCCURRENCES_TYPE_RANKING_TOTAL,
            payload: 10
        };
      
        expect(RankingReducer(undefined, action)).toEqual({
            isLoadingListOfRanking: false,
            occurrencesTypeRankingPodium: [],
            occurrencesTypeRankingList: [],
            totalOccurrenceType: 10,
        });
    });
});
