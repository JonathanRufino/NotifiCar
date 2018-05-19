import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../commom';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    screenImages: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    screenList: {
        marginTop: 30,
        flex: 5,
        alignItems: 'center',
    },
    screenImagesIndividual: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenTotal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstPlace: {
        height: 50, 
        width: 50,
    },
    crown: {
        height: 30, 
        width: 30,
    },
    secondPlace: {
        height: 50, 
        width: 50,
        marginTop: 80,
    },
    thirdPlace: {
        height: 50, 
        width: 50,
        marginTop: 80,
    },
    ocurrenceType: {
        color: Colors.BLACK,
        fontSize: 13,
    },
    totalTextOcurrenceType: {
        color: Colors.BLACK,
        fontSize: 18,
    },
    totalOcurrenceType: {
        color: Colors.GREEN_LIGHT,
        fontSize: 18,
    },
    indicator: {
        flex: 1,
    },
    rankingList: {
        width,
    },
    separator: {
        height: 1,
        width: '90%',
        backgroundColor: Colors.GRAY,
        alignSelf: 'center',
    }
});

export default styles;
