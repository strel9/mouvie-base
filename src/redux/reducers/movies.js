const initialState = {
	items: [],
	isLoaded: true,
	selectedMovieObj: {},
};

const movies = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_MOVIES':
			return {
				...state,
				items: action.payload,
				isLoaded: false,
			};

		case 'SET_LOADED':
			return {
				...state,
				isLoaded: action.payload,
			};

		case 'SET_SELECTED_MOVIE_OBJ':
			return {
				...state,
				selectedMovieObj: action.payload,
			};

		default:
			return state;
	}
};

export default movies;
