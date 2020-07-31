import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Image from '../image/Image';
import imgNoFotoIdDb from '../../assets/images/no_foto.jpg';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './MovieItem.css';

import { useSelector, useDispatch } from 'react-redux';

import { setMoviesWillWatch } from '../../redux/actions/filters';

import { setSelectedMovieObj } from '../../redux/actions/movies';

// import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
	const dispatch = useDispatch();
	const [willWatch, setWillWatch] = useState(false);
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
		const updateMoviesWillWatch = moviesWillWatch.filter((item) => item.id !== movie.id);
		// setMoviesWillWatch(updateMoviesWillWatch);
	};

	const moviesWillWatch = useSelector(({ filters }) => filters.moviesWillWatch);

	// const  = this.props;
	const cardImage = movie.poster_path ? (
		<>
			<Image
				className="card-img-top"
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt="card-img"
			/>
		</>
	) : (
		<Image className="card-img-top" src={imgNoFotoIdDb} alt="card-img" />
	);

	const buttonLike = willWatch ? (
		<Button
			className="card-item__like"
			variant="danger"
			onClick={() => {
				setWillWatch(false);
				// this.setState({
				// 	willWatch: ,
				// });
				removeMovieToWillWatch(movie);
			}}>
			<FontAwesome className="" name="heart" size="1x" style={{ color: 'rgb(27, 105, 217)' }} />
		</Button>
	) : (
		<Button
			className="card-item__like"
			variant="light"
			onClick={() => {
				setWillWatch(true);
				// this.setState({
				// 	willWatch: ,
				// });
				addMovieToWillWatch(movie);
			}}>
			<FontAwesome className="" name="heart" size="1x" style={{ color: 'rgb(27, 105, 217)' }} />
		</Button>
	);

	// const buttonTrash = (
	// 	<Button className="btn btn-light" onClick={removeMovie.bind(null, movie)}>
	// 		<FontAwesome className="" name="trash" size="1x" style={{ color: 'rgb(27, 105, 217)' }} />{' '}
	// 	</Button>
	// );

	return (
		<Row className="card-item-relative">
			<Col xs={12} lg={12} className="">
				<Link
					to={`/movie-base/movie-page/`}
					onClick={() => {
						dispatch(setSelectedMovieObj(movie));
					}}>
					{cardImage}
				</Link>
				{/* <Link className="" to={`/movie/${movie.id}/details`}>
						Подробнее
					</Link> */}

				<div>
					<h5 className="card-title pt-2">{movie.title}</h5>

					<div className="card__progressbar" style={{ width: 50, height: 50 }}>
						<CircularProgressbar
							value={movie.vote_average * 10}
							text={`${movie.vote_average * 10}%`}
							strokeWidth={7}
							styles={buildStyles({
								textColor: '#1B69D9',
								pathColor: '#1B69D9',
								trailColor: '',
							})}
						/>
					</div>
					{buttonLike}
				</div>
			</Col>
		</Row>
	);
};

export default MovieItem;
