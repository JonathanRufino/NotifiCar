import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../commom';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        height: 0.4 * height,
        width: 0.8 * width,
    },
    vehiclesList: {
        width,
        marginTop: 10
    },
    indicator: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 25,
    },
    button: {
        width: 75,
        height: 75,
        backgroundColor: Colors.RED_LIGHT,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 40,
        height: 40
    },
    listItem: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
});

export default styles;
