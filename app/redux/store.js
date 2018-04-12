import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default reduxStore;
