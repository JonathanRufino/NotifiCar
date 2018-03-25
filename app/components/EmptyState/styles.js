import { StyleSheet } from 'react-native';

import { Values } from '../../commom';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7,
    },
    image: {
        width: 0.35 * Values.SCREEN_WIDTH,
        height: 0.35 * Values.SCREEN_WIDTH,
    },
    title: {
        fontSize: 0.055 * Values.SCREEN_WIDTH,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 0.9 * Values.SCREEN_WIDTH,
        marginVertical: 15,
    },
    message: {
        fontSize: 0.045 * Values.SCREEN_WIDTH,
        textAlign: 'center',
        width: 0.6 * Values.SCREEN_WIDTH,
    },
});

export default styles;
