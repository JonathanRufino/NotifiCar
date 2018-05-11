import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../commom';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    screenImages: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    screenList: {
        flex: 2,
        alignItems: 'center',
    },
    screenImagesIndividual: {
        flex: 1,
        alignItems: 'center',
    },
    firstPlace: {
        height: 75, 
        width: 75,
    },
    secondPlace: {
        height: 75, 
        width: 75,
        marginTop: 40,
    },
    thirdPlace: {
        height: 75, 
        width: 75,
        marginTop: 70,
    },
    totalTypeOcurrence: {
        color: Colors.BLACK,
        fontSize: 15,
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
