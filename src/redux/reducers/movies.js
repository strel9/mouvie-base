const initialState = {
	items: [],
	isLoaded: false,
	selectedMovieObj: {},
};

const movies = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_MOVIES':
			// console.log(state);
			return {
				...state,
				items: action.payload,
			};

		case 'SET_SELECTED_MOVIE_OBJ':
			// console.log(state);
			return {
				...state,
				selectedMovieObj: action.payload,
			};
		// console.log(state);

		// case 'INC':
		// 	return state + 1;

		// case 'DEC':
		// 	return state - 1;

		default:
			return state;
	}
};

export default movies;
