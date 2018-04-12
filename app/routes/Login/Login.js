import React, { Component } from 'react';
import {
    View, Image, Alert, ActivityIndicator, StatusBar, TouchableOpacity, Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import styles from './styles';
import { Images, Texts, Colors } from '../../commom';
import {
    userLoginSuccess,
    checkUserIsLogged
} from '../../redux/actions/AuthenticationActions';

class Login extends Component {
    componentWillMount() {
        this.props.checkUserIsLogged();
    }

    async _loginWithFacebook() {
        try {
            const result = await LoginManager.logInWithPublishPermissions(['publish_actions']);

            if (result.isCancelled) {
                Alert.alert(Texts.Errors.LOGIN_CANCELLED);
                return;
            }

            const data = await AccessToken.getCurrentAccessToken();
            this.props.userLoginSuccess(data.accessToken.toString(), data.userID);

            Actions.main();
        } catch (err) {
            Alert.alert(
                Texts.Errors.OOPS,
                Texts.Errors.GENERIC_ERROR
            );
        }
    }

    _renderLogin() {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator size='large' />
            );
        }

        return (
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={Images.LOGO_SPLASHSCREEN}
                    resizeMode='contain'
                />
                <TouchableOpacity
                    style={styles.facebookButtonContainer}
                    onPress={() => this._loginWithFacebook()}
                >
                    <Text style={styles.facebookButtonText}>
                        { Texts.Buttons.LOGIN_WITH_FACEBOOK }
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <StatusBar backgroundColor={Colors.RED_DARK} barStyle="light-content" />

                { this._renderLogin() }
             </View>
        );
    }
}

const mapStateToProps = state => ({
    accessToken: state.AuthenticationReducer.accessToken,
    isLoading: state.AuthenticationReducer.isLoading,
});

export default connect(mapStateToProps, {
    userLoginSuccess, checkUserIsLogged
})(Login);
