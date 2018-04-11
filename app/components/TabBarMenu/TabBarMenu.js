import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginManager } from 'react-native-fbsdk';

import styles from './styles';
import { Colors, Texts, Images } from '../../commom';
import { userLoginSuccess } from '../../redux/actions/AuthenticationActions';

class TabBarMenu extends Component {
    render() {
        return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.RED_DARK} barStyle="light-content" />

            <View style={styles.viewPrincipal}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>
                        { Texts.APP_NAME }
                    </Text>
                </View>

                <View style={styles.viewElements}>
                    <TouchableOpacity
                        style={styles.toolbarIcons}
                        onPress={() => {
                            Alert.alert(
                                Texts.Messages.EXITING,
                                Texts.Messages.WANT_TO_EXIT,
                                [
                                    {
                                        text: Texts.Buttons.CANCEL,
                                        onPress: () => false
                                    },
                                    {
                                        text: Texts.Buttons.EXIT,
                                        onPress: () => {
                                            LoginManager.logOut();
                                            this.props.userLoginSuccess('');
                                            Actions.login();
                                        }
                                    },
                                ],
                                { cancelable: false }
                            );
                        }}
                    >
                        <Image source={Images.LOGOUT} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.privacyPolicy()}>
                        <Image source={Images.DOT_MENU} />
                    </TouchableOpacity>
                </View>
            </View>

            <TabBar
                {...this.props}
                indicatorStyle={styles.indicatorStyle}
                style={styles.tabBarStyle}
            />
        </View>
        );
    }
}

export default connect(null, { userLoginSuccess })(TabBarMenu);
