import React, { Component } from 'react';
import { View, Image, Text, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Texts, Colors, Images } from '../../commom';
import { checkUserIsLogged } from '../../redux/actions/AuthenticationActions';

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => this.props.checkUserIsLogged(), 2000);
    }

    _setStatusBar() {
        if (Platform.OS === 'android') {
            return <StatusBar backgroundColor={Colors.RED_DARK} />;
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                { this._setStatusBar() }

                <Image
                    style={styles.logo}
                    source={Images.LOGO_WHITE}
                    resizeMode='contain'
                />
                <Text style={styles.title}>
                    { Texts.APP_NAME }
                </Text>
            </View>
        );
    }
}

export default connect(null, { checkUserIsLogged })(SplashScreen);
