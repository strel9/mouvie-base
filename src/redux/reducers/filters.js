const initialState = {
	movies: [],
	moviesGenre: [],
	moviesGenreActive: [],
	moviesWillWatch: [],
	currentPage: 1,
	totalPages: null,
	sort_by: 'popularity.desc',
	sortByPrimaryReleaseYear: null,
};

const filters = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sort_by: action.payload,
			};

		// case 'INC':
		// 	return state + 1;

		// case 'DEC':
		// 	return state - 1;

		default:
			return state;
	}
};

export default filters;
