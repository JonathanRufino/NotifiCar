import { StyleSheet, Platform } from 'react-native';

import { Colors, Values } from '../../commom';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 10,
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
    error: {
        color: Colors.RED,
        alignSelf: 'center',
    },
    inputContainer: {
        marginVertical: 50,
    },
    loading: {
        height: 50,
    },
});

export default styles;
