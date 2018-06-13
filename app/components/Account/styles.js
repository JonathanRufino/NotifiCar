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
    listItem: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    swipe: {
        backgroundColor: Colors.TRANSPARENT
    },
});

export default styles;
