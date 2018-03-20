import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../commom';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
    },
    container: {
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        marginHorizontal: 0.1 * width,
        paddingHorizontal: 0.05 * width,
        paddingVertical: 0.02 * height,
        height: 0.4 * height,
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
    type_ocurrence: {
        fontSize: 0.03 * width,
        alignSelf: 'center',
    },
    error: {
        color: Colors.RED,
    }
});

export default styles;
