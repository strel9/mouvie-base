import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import MovieItem from '../MovieItem/MovieItem';
// import MovieTabs from './MovieTabs'
const MoviesList = ({ removeMovie }) => {
	const movieItems = useSelector(({ movies }) => movies.items);

	// console.log(movies.items, '1');
	// console.log(movies, '2');
	// debugger;

	return (
		<Row>
			{movieItems.map((movie) => {
				return (
					<Col xs={6} md={6} lg={4} className="card mb-4" key={movie.id}>
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
