export const setMovies = (movies) => ({
	type: 'SET_MOVIES',
	payload: movies,
});

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload: false,
});

export const setSelectedMovieObj = (movie) => ({
	type: 'SET_SELECTED_MOVIE_OBJ',
	payload: movie,
});
