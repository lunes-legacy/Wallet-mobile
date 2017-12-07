import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reducers from './reducers';

let store = applyMiddleware(thunk, multi, promise)(createStore)(reducers);

export default store;
