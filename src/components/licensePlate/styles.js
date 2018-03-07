import { StyleSheet } from 'react-native';

import colors from '../../commom/colors';

const styles = StyleSheet.create({
    container: {
        borderColor: colors.gray,
        backgroundColor: colors.lightGray,
        borderWidth: 5,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: 275,
    },
    text: {
        fontFamily: 'Mandatory',
        fontSize: 50,
        color: '#000',
    }
});

export default styles;
