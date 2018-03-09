import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './routes/index';
import reduxStore from './redux/store';

class App extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <Routes /> 
            </Provider>
        );
    }
}

export default App;
