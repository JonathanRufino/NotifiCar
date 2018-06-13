import { StyleSheet } from 'react-native';

import { Colors, Values } from '../../commom';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        width: Values.SCREEN_WIDTH,
        flexDirection: 'row',
    },
    type: {
        fontSize: 22,
        color: Colors.BLACK,
    },
    count: {
        color: Colors.GREEN_LIGHT,
        alignItems: 'flex-end',
        fontSize: 18,
    },
    icon: {
        height: 32, 
        width: 32,
    },
    typeContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20
    },
    countContainer: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 20
    },
});

export default styles;
