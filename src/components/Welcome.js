import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoginButton } from 'react-native-fbsdk';
import { userLoginSuccess } from '../actions/AuthenticationActions';

class Welcome extends Component {
    render () {
        return (
            <View>
                <Text style={{ fontSize: 20 }}> Seja Bem-Vindo </Text>
                <LoginButton
                    onLogoutFinished={() => { 
                        this.props.userLoginSuccess('');
                        Actions.login();
                    }} 
                />
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        accessToken: state.AuthenticationReducer.accessToken
    }
);

export default connect(mapStateToProps, { userLoginSuccess })(Welcome);