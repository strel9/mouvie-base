import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Col, Row, Form, Button, Pagination } from 'react-bootstrap';

import MovieItem from './MovieItem';
// import MovieTabs from './MovieTabs'
export default class MoviesList extends Component {
	render() {
		const {
			currentPage,
			movies,
			sort_by,
			sort_year,
			updateSortBy,
			removeMovie,
			addMovieToWillWatch,
			removeMovieToWillWatch,
		} = this.props;

		return (
			<>
				<Row className="mb-4">
					<Col xs={12}>{/* <MovieTabs sort_by={sort_by} updateSortBy={updateSortBy} /> */}</Col>
				</Row>
				<Row>
					{movies.map((movie) => {
						// рендерить только соответсвующие году movies.release_date обрезать какой то функцией до первого -
						return (
							<Col xs={6} md={6} className="mb-4" key={movie.id}>
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
			</>
		);
	}
}
