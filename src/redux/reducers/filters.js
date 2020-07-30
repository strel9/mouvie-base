const initialState = {
	sortBy: 'popularity.desc',
	moviesGenre: [{ id: 28, name: 'Action' }],
	moviesGenreActive: [],
	sortByPrimaryReleaseYear: null,
	moviesWillWatch: [716333, 578013, 654210],
	currentPage: 1,
	totalPages: null,
};

const filters = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.payload,
			};
		case 'SET_MOVIES_WILLWATCH':
			return {
				...state,
				moviesWillWatch: action.payload,
			};
		case 'SET_TOTAL_PAGES':
			return {
				...state,
				totalPages: action.payload,
			};
		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			};
		case 'SET_MOVIES_GENRE_ACTIVE':
			return {
				...state,
				moviesGenreActive: action.payload,
			};
		case 'SET_SORT_BY_PRIMARY_RELEASE_YEAR':
			return {
				...state,
				sortByPrimaryReleaseYear: action.payload,
			};

		default:
			return state;
	}
};

export default filters;
