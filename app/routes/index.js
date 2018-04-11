import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { Platform } from 'react-native';

import styles from './styles';
import { Images } from '../commom';
import Splashscreen from './splashscreen';
import Main from './Main';
import Login from './Login';
import PrivacyPolicy from './privacy-policy';

const Routes = () => (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
        <Scene key="root">
            <Scene
                key='splashscreen'
                component={Splashscreen}
                hideNavBar
                type={ActionConst.RESET}
                initial
            />
            <Scene
                key='login'
                component={Login}
                title="Login"
                hideNavBar
                type={ActionConst.RESET}
            />
            <Scene
                key='main'
                component={Main}
                title="Main"
                hideNavBar
                type={ActionConst.RESET}
            />
            <Scene
                key='privacyPolicy'
                component={PrivacyPolicy}
                title='Política de Privacidade'
                backButtonImage={Platform.OS === 'ios' ?
                    Images.ARROW_BACK_IOS : Images.ARROW_BACK_ANDROID
                }
            />
        </Scene>
    </Router>
);

export default Routes;
