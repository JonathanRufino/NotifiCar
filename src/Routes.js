import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './components/Welcome';

export default () => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
        <Scene key="root">
            <Scene key='welcome' component={Welcome} title="Bem-Vindo" hideNavBar />
        </Scene>
    </Router>
);
