import { StyleSheet } from 'react-native';

import { Colors } from '../../commom';

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.GRAY,
        backgroundColor: Colors.LIGHT_GRAY,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 345,
        flexDirection: 'row',
    },
    text: {
        fontSize: 12,
        color: Colors.BLACK,
    },
    textTime: {
        fontSize: 12,
        color: Colors.BLACK,
        marginRight: 10
    },
    photo: {
        height: 32, 
        width: 32,
        marginLeft: 8,
    },
    itemView: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 7,
        marginLeft: 20
    },
});

export default styles;
