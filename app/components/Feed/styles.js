import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../commom';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        height: 0.4 * height,
        width: 0.8 * width,
    },
    occurrenceList: {
        flex: 1,
    },
    indicator: {
        flex: 1,
    },
    separator: {
        height: 1,
        width: '90%',
        backgroundColor: Colors.GRAY,
        alignSelf: 'center',
    }
});

export default styles;
