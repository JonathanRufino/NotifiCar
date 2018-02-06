import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
    componentWillMount() { 
        firebase.initializeApp({ 
          apiKey: 'AIzaSyBV6uxiIPE5z1ea2InyvDzszjmlqV7oof0',
          authDomain: 'notificar-1995.firebaseapp.com',
          databaseURL: 'https://notificar-1995.firebaseio.com',
          projectId: 'notificar-1995',
          storageBucket: 'notificar-1995.appspot.com',
          messagingSenderId: '817709173141' });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes /> 
            </Provider>
        );
    }
}

export default App;
