import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#115E54',
        elevation: 4,
        marginBottom: 6
    },
    viewPrincipal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTitle: {
        height: 50,
        justifyContent: 'center'
    },
    viewElements: {
        flexDirection: 'row',
        marginRight: 20
    },
    viewButton: {
        justifyContent: 'center'
    },
    txtTitle: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 20
    },
    tabBarStyle: {
        backgroundColor: '#115E54',
        elevation: 0
    }
});

export default styles;
