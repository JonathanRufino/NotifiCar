import { StyleSheet } from 'react-native';

import { Colors, Values } from '../../commom';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 0.15 * Values.SCREEN_WIDTH,
        color: Colors.BLACK,
    }
});

export default styles;
