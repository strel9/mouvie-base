import { createStore } from 'redux';
import reducer from '../reducers/filters';

const store = createStore(reducer);

export default store;
