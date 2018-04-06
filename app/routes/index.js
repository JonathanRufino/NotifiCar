import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import styles from './styles';
import Splashscreen from './splashscreen';
import Main from './Main';
import Login from './Login';

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
        </Scene>
    </Router>
);

export default Routes;
