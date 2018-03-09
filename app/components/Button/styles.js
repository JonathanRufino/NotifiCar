import { StyleSheet } from 'react-native';

import { Colors } from '../../commom';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BLUE,
        borderRadius: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.WHITE,
        fontWeight: '100',
        fontSize: 20,
    }
});

export default styles;
