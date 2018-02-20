import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './components/Main';
import Login from './components/Login';

export default () => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
        <Scene key="root">
            <Scene key='login' component={Login} title="Login" hideNavBar />
            <Scene key='main' component={Main} title="Main" hideNavBar />
        </Scene>
    </Router>
);
