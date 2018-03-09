import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import styles from './styles';
import { Images } from '../../commom';
import {
    userLoginSuccess,
    checkUserLogged
} from '../../redux/actions/AuthenticationActions';

class Login extends Component {
    componentWillMount() {
        this.props.checkUserLogged();
    }
    
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={Images.LOGIN_BACKGROUND}>
                <View style={styles.container}>
                    <View style={styles.viewText}>
                        <Text style={styles.txtTitle}>NotifiCar</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <LoginButton
                            publishPermissions={['publish_actions']}
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        Alert.alert(`Login has error: ${result.error}`);
                                    } else if (result.isCancelled) {
                                        Alert.alert('Login is cancelled');
                                    } else {
                                        AccessToken.getCurrentAccessToken()
                                        .then((data) => {
                                            this.props.userLoginSuccess(
                                                data.accessToken.toString(),
                                                data.userID);
                                        })
                                        .then(() => Actions.main());
                                    }
                                }
                            }
                        />
                    </View> 
                </View>
             </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    accessToken: state.AuthenticationReducer.accessToken
});

export default connect(mapStateToProps, {
    userLoginSuccess, checkUserLogged
})(Login);
