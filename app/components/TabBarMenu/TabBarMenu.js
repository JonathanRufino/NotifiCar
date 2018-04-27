import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Alert } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginManager } from 'react-native-fbsdk';
import ModalDropDown from 'react-native-modal-dropdown';

import styles from './styles';
import { Colors, Texts, Images } from '../../commom';
import { userLoginSuccess } from '../../redux/actions/AuthenticationActions';

const MenuOptions = {
    PRIVACY_POLICY: 'Políticas de Privacidade',
    LOGOUT: 'Sair'
};

class TabBarMenu extends Component {
    _onOptionSelected(option) {
        switch (option) {
            case MenuOptions.PRIVACY_POLICY:
                Actions.privacyPolicy();
                break;
            case MenuOptions.LOGOUT:
                setTimeout(() => {
                    Alert.alert(
                        Texts.Messages.EXITING,
                        Texts.Messages.WANT_TO_EXIT,
                        [
                            {
                                text: Texts.Buttons.CANCEL,
                                onPress: () => {}
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
                }, 500);
                break;
            default:
                break;
        }
    }
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
                    <ModalDropDown
                        options={[MenuOptions.PRIVACY_POLICY, MenuOptions.LOGOUT]}
                        onSelect={(index, value) => this._onOptionSelected(value)}
                    >
                        <Image source={Images.DOT_MENU} />
                    </ModalDropDown>
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
