import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';

import styles from './styles';
import { Colors, Images } from '../../commom';
import { checkUserIsLogged } from '../../redux/actions/AuthenticationActions';

class Splashscreen extends Component {
    componentDidMount() {
        // SplashScreen.hide();
        this.props.checkUserIsLogged();
    }

    render() {
        return (
            <View style={styles.screen}>
                <StatusBar style='light-content' backgroundColor={Colors.RED_DARK} />

                <Image
                    style={styles.logo}
                    source={Images.LOGO_SPLASHSCREEN}
                    resizeMode='contain'
                />
            </View>
        );
    }
}

export default connect(null, { checkUserIsLogged })(Splashscreen);
