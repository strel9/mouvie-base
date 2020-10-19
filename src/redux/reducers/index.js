import { combineReducers } from 'redux';

import filters from './filters';
import movies from './movies';

const rootReducer = combineReducers({
	filters,
	movies,
});

export default rootReducer;
