import { StyleSheet } from 'react-native';

import { Colors, Values } from '../../commom';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.RED_MIDDLE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 0.4 * Values.SCREEN_WIDTH,
    },
});

export default styles;
