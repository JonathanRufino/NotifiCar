import { StyleSheet } from 'react-native';
import colors from '../../commom/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        borderRadius: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontWeight: '100',
        fontSize: 20,
    }
});

export default styles;
