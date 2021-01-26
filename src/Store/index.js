import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import initialState from './initialState';

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store