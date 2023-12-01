import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import rootReducer from '../reducers';
// reducer, applyMiddleware(thunk)
const store = createStore(rootReducer)

export default store;