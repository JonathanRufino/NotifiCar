import { StyleSheet, Platform } from 'react-native';

import { Values, Colors } from '../../commom';

const styles = StyleSheet.create({
    inputField: {
        width: '80%',
        fontSize: 0.120 * Values.SCREEN_WIDTH,
        alignSelf: 'center',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
                borderBottomColor: Colors.BLACK,
            }
        })
    },
});

export default styles;
