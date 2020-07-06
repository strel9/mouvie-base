import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
			<div className="col-12 col-sm-9">
				<div className="row mb-4">
					<div className="col-12">
						{/* <MovieTabs sort_by={sort_by} updateSortBy={updateSortBy} /> */}
					</div>
				</div>
				<div className="row">
					{movies.map((movie) => {
						// рендерить только соответсвующие году movies.release_date обрезать какой то функцией до первого -
						return (
							<div className="col-6 mb-4" key={movie.id}>
								<MovieItem
									movie={movie}
									removeMovie={removeMovie}
									addMovieToWillWatch={addMovieToWillWatch}
									removeMovieToWillWatch={removeMovieToWillWatch}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
