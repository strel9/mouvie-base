export const setSortBy = (value) => ({
	type: 'SET_SORT_BY',
	// payload: 'popularity.desc',
	payload: value,
});

export const setMoviesWillWatch = (movies) => ({
	type: 'SET_MOVIES_WILLWATCH',
	payload: movies,
});

export const setTotalPages = (pages) => ({
	type: 'SET_TOTAL_PAGES',
	payload: pages,
});

export const setCurrentPage = (page) => ({
	type: 'SET_CURRENT_PAGE',
	payload: page,
});

export const setMoviesGenre = (value) => ({
	type: 'SET_MOVIES_GENRE',
	payload: value,
});

export const setMoviesGenreActive = (value) => ({
	type: 'SET_MOVIES_GENRE_ACTIVE',
	payload: value,
});

export const setSortByPrimaryReleaseYear = (value) => ({
	type: 'SET_SORT_BY_PRIMARY_RELEASE_YEAR',
	payload: value,
});
