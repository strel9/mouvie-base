import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FontAwesome from 'react-fontawesome';

import { setMoviesWillWatch } from '../redux/actions/filters';


const LikeButton = ({ movie }) => {
	const dispatch = useDispatch();
	const moviesWillWatch = useSelector(({ filters }) => filters.moviesWillWatch);

	
	const addMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = [...moviesWillWatch, movie.id];
		dispatch(setMoviesWillWatch(updateMoviesWillWatch));
	};

	const removeMovieToWillWatch = (movie) => {

		const updateMoviesWillWatch = moviesWillWatch.filter((item) => item !== movie.id);
		
		dispatch(setMoviesWillWatch(updateMoviesWillWatch));
	};

	const buttonLike = moviesWillWatch.includes(movie.id) ? (
		<button
			className="like-btn --active"
			onClick={() => {
				removeMovieToWillWatch(movie);
			}}>
			<FontAwesome
				className="like-btn__icon"
				name="heart"
				style={{ color: 'rgb(27, 105, 217)' }}
			/>
		</button>
	) : (
		<button
			className="like-btn"
			onClick={() => {
				addMovieToWillWatch(movie);
			}}>
			<FontAwesome
				className="like-btn__icon"
				name="heart"
				style={{ color: 'rgb(27, 105, 217)' }}
			/>
		</button>
	);

	return <>{buttonLike}</>;
};

export default LikeButton;
