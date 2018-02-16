import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { userLoginSuccess } from '../actions/AuthenticationActions';

class Login extends Component {
    render () {
        return (
            <ImageBackground style={{flex: 1, opacity: 100}} source={require('../imgs/login_background.png')}>
                <View style={styles.container}>
                    <View style={styles.viewText}>
                        <Text style={styles.txtTitle}>NotifiCar</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <LoginButton
                                publishPermissions={["publish_actions"]}
                                onLoginFinished={
                                    (error, result) => {
                                        if (error) {
                                            alert("Login has error: " + result.error);
                                        } else if (result.isCancelled) {
                                            alert("Login is cancelled");
                                        } else {
                                            AccessToken.getCurrentAccessToken()
                                            .then(
                                                (data) => {
                                                this.props.userLoginSuccess(data.accessToken.toString());
                                                }
                                            ).then(
                                                Actions.welcome()
                                            )
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    viewText: {
        flex: 3, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewButton: {
        flex: 2,
        alignItems: 'center'
    },
    txtTitle: {
        fontSize: 25, 
        color: '#000', 
        backgroundColor: 'transparent'
    }
})

const mapStateToProps = state => (
    {
        accessToken: state.AuthenticationReducer.accessToken
    }
);

export default connect(mapStateToProps, { userLoginSuccess })(Login);