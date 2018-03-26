import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginButton } from 'react-native-fbsdk';

import styles from './styles';
import { userLoginSuccess } from '../../redux/actions/AuthenticationActions';

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

export default connect(null, { userLoginSuccess })(TabBarMenu);
