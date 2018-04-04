import { StyleSheet, Dimensions } from 'react-native';

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
    }
});

export default styles;
