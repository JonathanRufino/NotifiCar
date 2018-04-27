import { StyleSheet } from 'react-native';

import { Colors } from '../../commom';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.RED_LIGHT,
        borderRadius: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    text: {
        color: Colors.WHITE,
        fontWeight: '400',
        fontSize: 20,
    }
});

export default styles;
