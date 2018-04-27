import { StyleSheet, Platform } from 'react-native';

import { Values, Colors } from '../../commom';

const styles = StyleSheet.create({
    inputField: {
        width: '80%',
        fontSize: 0.120 * Values.SCREEN_WIDTH,
        fontFamily: 'Mandatory',
        alignSelf: 'center',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
                borderBottomColor: Colors.BLACK,
            }
        }),
        backgroundColor: Colors.LIGHT_GRAY,
        borderColor: Colors.GRAY,
        borderWidth: 5,
        borderRadius: 10,
        marginVertical: 10,
    },
});

export default styles;
