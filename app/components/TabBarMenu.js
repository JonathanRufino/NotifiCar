import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginButton } from 'react-native-fbsdk';
import { userLoginSuccess } from '../actions/AuthenticationActions';

class TabBarMenu extends Component {
    render() {
        return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#114D44" />

            <View style={styles.viewPrincipal}>
                <View style={styles.viewTitle}>
                    <Text style={styles.txtTitle}> NotifiCar </Text>
                </View>

                <View style={styles.viewElements}>
                    <View style={styles.viewButton}>
                        <LoginButton
                            onLogoutFinished={() => { 
                                this.props.userLoginSuccess('');
                                Actions.login();
                            }} 
                        />
                    </View>
                </View>
            </View>

            <TabBar {...this.props} style={styles.tabBarStyle} />
        </View>
        );
    }
}

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

export default connect(null, { userLoginSuccess })(TabBarMenu);
