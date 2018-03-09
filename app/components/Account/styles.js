import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    modal: {
        flex: 1,
        height: 0.4 * height,
        width: 0.8 * width,
    }
});

export default styles;
