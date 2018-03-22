import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../commom';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    modal: {
        marginHorizontal: 0.05 * width,
        height: 0.5 * height,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
    },
    container: {
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        padding: 15,
        flex: 1,
    },
    inputField: {
        height: 0.25 * width,
        width: 0.57 * width,
        fontSize: 0.120 * width,
        alignSelf: 'center',
    },
    title: {
        fontSize: 0.07 * width,
        alignSelf: 'center',
    },
    error: {
        color: Colors.RED,
        alignSelf: 'center',
    }
});

export default styles;
