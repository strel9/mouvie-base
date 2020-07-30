import { combineReducers } from 'redux';

import filters from './filters';
import movies from './movies';
// import cart from './cart';

const rootReducer = combineReducers({
	filters,
	movies,
	//   cart,
});

export default rootReducer;
