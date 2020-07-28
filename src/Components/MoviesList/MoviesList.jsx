import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Col, Row, Form, Button, Pagination } from 'react-bootstrap';

import MovieItem from '../MovieItem/MovieItem';
// import MovieTabs from './MovieTabs'
export default class MoviesList extends Component {
	render() {
		const {
			movies,
			// sort_by,
			// updateSortBy,
			removeMovie,
			addMovieToWillWatch,
			removeMovieToWillWatch,
		} = this.props;

		return (
			<Row>
				{movies.map((movie) => {
					return (
						<Col xs={6} md={6} lg={4} className="card mb-4" key={movie.id}>
							<MovieItem
								movie={movie}
								removeMovie={removeMovie}
								addMovieToWillWatch={addMovieToWillWatch}
								removeMovieToWillWatch={removeMovieToWillWatch}
							/>
						</Col>
					);
				})}
			</Row>
		);
	}
}
