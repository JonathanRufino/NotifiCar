import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import Login from './components/Login';

export default () => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
        <Scene key="root">
            <Scene key='login' component={Login} title="Login" hideNavBar />
            <Scene key='welcome' component={Welcome} title="Bem-Vindo" hideNavBar />
        </Scene>
    </Router>
);
