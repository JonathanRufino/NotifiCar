import { StyleSheet } from 'react-native';

import { Colors, Values } from '../../commom';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
        width: Values.SCREEN_WIDTH,
        flexDirection: 'row',
    },
    licensePlate: {
        fontSize: 25,
        color: Colors.BLACK,
        fontFamily: 'Mandatory',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: Colors.DARK_GRAY,
    },
    time: {
        fontSize: 20,
        color: Colors.DARK_GRAY,
        marginRight: 10
    },
    icon: {
        height: 32, 
        width: 32,
    },
    infoContainer: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 7,
        marginLeft: 20
    },
});

export default styles;
