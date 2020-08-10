import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import MovieItem from '../MovieItem/MovieItem';

import { setMoviesWillWatch } from '../../redux/actions/filters';

// import MovieTabs from './MovieTabs'
const MoviesList = ({ removeMovie }) => {
	const movieItems = useSelector(({ movies }) => movies.items);

	return (
		<Row className="movies-list">
			{movieItems.map((movie) => {
				return (
					<Col xs={6} md={6} lg={4} className="mb-4" key={movie.id}>
						<MovieItem
							movie={movie}
							// removeMovie={removeMovie}
							// moviesWillWatch={moviesWillWatch}
							// addMovieToWillWatch={addMovieToWillWatch}
							// removeMovieToWillWatch={removeMovieToWillWatch}
						/>
					</Col>
				);
			})}
		</Row>
	);
};
export default MoviesList;
