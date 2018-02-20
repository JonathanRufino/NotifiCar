import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './components/Principal';
import Login from './components/Login';

export default () => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
        <Scene key="root">
            <Scene key='login' component={Login} title="Login" hideNavBar />
            <Scene key='principal' component={Principal} title="Principal" hideNavBar />
        </Scene>
    </Router>
);
