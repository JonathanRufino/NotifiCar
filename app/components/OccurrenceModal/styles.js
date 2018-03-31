import { StyleSheet, Platform } from 'react-native';

import { Colors, Values } from '../../commom';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        padding: 15,
    },
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
    title: {
        fontSize: 0.07 * Values.SCREEN_WIDTH,
        alignSelf: 'center',
    },
    type_occurrence: {
        fontSize: 0.04 * Values.SCREEN_WIDTH,
        alignSelf: 'center',
    },
    picker_occurrence: {
        alignSelf: 'center',
    },
    error: {
        color: Colors.RED,
        alignSelf: 'flex-start',
    },
});

export default styles;
