import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FontAwesome from 'react-fontawesome';

import { setMoviesWillWatch } from '../../redux/actions/filters';

// const like =
// );

const LikeButton = ({ movie }) => {
	const dispatch = useDispatch();
	// const [willWatch, setWillWatch] = useState(false);
	const moviesWillWatch = useSelector(({ filters }) => filters.moviesWillWatch);

	// const [willWatch, setWillWatch] = useState(false);
	// state = {
	// 	willWatch: false,
	// };

	// const movies = useSelector((state) => state.movies);
	// const moviesWillWatch = useSelector(({ filters }) => filters.moviesWillWatch);

	const addMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = [...moviesWillWatch, movie.id];
		dispatch(setMoviesWillWatch(updateMoviesWillWatch));
	};

	const removeMovieToWillWatch = (movie) => {
		// console.log(movie);
		// console.log(moviesWillWatch);
		// console.log(updateMoviesWillWatch);

		const updateMoviesWillWatch = moviesWillWatch.filter((item) => item !== movie.id);
		// ;

		console.log(updateMoviesWillWatch);
		dispatch(setMoviesWillWatch(updateMoviesWillWatch));
	};

	const buttonLike = moviesWillWatch.includes(movie.id) ? (
		<button
			className="like-btn --active"
			// variant="danger"
			onClick={() => {
				// setWillWatch(false);
				// this.setState({
				// 	willWatch: ,
				// });
				removeMovieToWillWatch(movie);
			}}>
			<FontAwesome
				className="like-btn__icon"
				name="heart"
				size="1x"
				style={{ color: 'rgb(27, 105, 217)' }}
			/>
		</button>
	) : (
		<button
			className="like-btn"
			// variant="light"
			onClick={() => {
				// setWillWatch(true);
				// this.setState({
				// 	willWatch: ,
				// });
				addMovieToWillWatch(movie);
			}}>
			<FontAwesome
				className="like-btn__icon"
				name="heart"
				size="1x"
				style={{ color: 'rgb(27, 105, 217)' }}
			/>
		</button>
	);

	return <>{buttonLike}</>;
};

export default LikeButton;
