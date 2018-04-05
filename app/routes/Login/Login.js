import React, { Component } from 'react';
import {
    View, Text, ImageBackground, Alert, ActivityIndicator, StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

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

    _onLoginFinished(error, result) {
        if (error) {
            Alert.alert(result.error);
        } else if (result.isCancelled) {
            Alert.alert(Texts.Errors.LOGIN_CANCELLED);
        } else {
            AccessToken.getCurrentAccessToken()
                .then(data => {
                    this.props.userLoginSuccess(
                        data.accessToken.toString(),
                        data.userID);
                })
                .then(() => Actions.main());
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
                <StatusBar backgroundColor={Colors.RED_DARK} barStyle="light-content" />

                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>
                        { Texts.APP_NAME }
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <LoginButton
                        publishPermissions={['publish_actions']}
                        onLoginFinished={(error, result) => this._onLoginFinished(error, result)}
                    />
                </View> 
            </View>
        );
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={Images.LOGIN_BACKGROUND}
            >
                { this._renderLogin() }
             </ImageBackground>
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
