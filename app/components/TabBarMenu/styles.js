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
        marginRight: 20,
        alignItems: 'center',
    },
    viewButton: {
        justifyContent: 'center'
    },
    title: {
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
    toolbarIcons: {
        marginRight: 15,
    }
});

export default styles;
