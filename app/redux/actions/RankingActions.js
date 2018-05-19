import _ from 'lodash';

import firebaseApp from '../../services/firebase';
import * as Types from './types';

export const fetchOccurrencesTypeRanking = () => dispatch => {
    dispatch({ type: Types.FETCH_OCCURRENCES_TYPE_RANKING_IS_LOADING });

    firebaseApp.database().ref('/occurrence_types/')
        .orderByChild('occurrences_count')
        .on('value', snapshot => {
            let occurrenceTypeArray = [];
            let count;
            let totalOccurrenceType = 0;
        
            const occurrenceTypeArrayList = [];
            const occurrenceTypeArrayPodium = [];

            occurrenceTypeArray = _.map(snapshot.val(), 
                (val, uid) => ({ ...val, uid }));
            
            occurrenceTypeArray = _.sortBy(occurrenceTypeArray, ['occurrences_count']).reverse();

            for (count = 0; count < occurrenceTypeArray.length; count++) {
                if (count <= 2) {
                    occurrenceTypeArrayPodium.push(occurrenceTypeArray[count]);
                } else {
                    occurrenceTypeArrayList.push(occurrenceTypeArray[count]);
                }
            }

            for (count = 0; count < occurrenceTypeArray.length; count++) {
                totalOccurrenceType += occurrenceTypeArray[count].occurrences_count;     
            }

            dispatch({ type: Types.FETCH_OCCURRENCES_TYPE_RANKING_IMAGES, 
                payload: occurrenceTypeArrayPodium });
            dispatch({ type: Types.FETCH_OCCURRENCES_TYPE_RANKING_LIST, 
                payload: occurrenceTypeArrayList });
            dispatch({ type: Types.FETCH_OCCURRENCES_TYPE_RANKING_TOTAL, 
                payload: totalOccurrenceType });
        });
};
