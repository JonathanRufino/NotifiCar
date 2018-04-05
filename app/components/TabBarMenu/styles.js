import { StyleSheet, Platform } from 'react-native';

import { Colors } from '../../commom';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.RED_MIDDLE,
        elevation: 4,
        marginBottom: 6,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
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
        color: Colors.WHITE,
        fontSize: 20,
        marginLeft: 20
    },
    tabBarStyle: {
        backgroundColor: Colors.RED_MIDDLE,
        elevation: 0
    },
    indicatorStyle: {
        backgroundColor: Colors.WHITE,
    },
});

export default styles;
