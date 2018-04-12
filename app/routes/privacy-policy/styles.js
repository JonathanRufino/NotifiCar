import { StyleSheet } from 'react-native';

import { Values, Colors } from '../../commom';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: '5%',
    },
    h1: {
        fontSize: 0.06 * Values.SCREEN_WIDTH,
        marginVertical: 20,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 0.05 * Values.SCREEN_WIDTH,
        marginVertical: 15,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 0.045 * Values.SCREEN_WIDTH,
        marginVertical: 15,
        fontWeight: '500',
    },
    h4: {
        fontSize: 0.040 * Values.SCREEN_WIDTH,
        marginVertical: 15,
        fontWeight: '500',
    },
    p: {
        fontSize: 0.035 * Values.SCREEN_WIDTH,
        marginVertical: 10,
    },
    link: {
        color: Colors.BLUE,
        textDecorationLine: 'underline',
    },
    lastItem: {
        marginBottom: 50,
    }
});

export default styles;
