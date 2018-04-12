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
        justifyContent: 'space-around',
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
    facebookButtonContainer: {
        width: 0.7 * Values.SCREEN_WIDTH,
        justifyContent: 'center',
        backgroundColor: Colors.FACEBOOK_BLUE,
        height: 45,
        borderRadius: 50,
    },
    facebookButtonText: {
        color: Colors.WHITE,
        textAlign: 'center',
        fontSize: 0.045 * Values.SCREEN_WIDTH,
        marginHorizontal: 30,
    },
});

export default styles;
