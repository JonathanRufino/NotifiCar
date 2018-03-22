import { StyleSheet } from 'react-native';

import { Colors } from '../../commom';

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.GRAY,
        backgroundColor: Colors.LIGHT_GRAY,
        borderWidth: 5,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: 275,
    },
    text: {
        fontSize: 10,
        color: '#000',
    }
});

export default styles;
