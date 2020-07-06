import React, { Component } from 'react';
import { Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';

import Rating from './Rating';
import FontAwesome from 'react-fontawesome';
import Image from './image/Image';
import nullMovie from '../assets/images/no_foto.jpg';

// import PropTypes from 'prop-types';

export default class MovieItem extends Component {
	state = {
		willWatch: false,
	};

	render() {
		const { movie, removeMovie, addMovieToWillWatch, removeMovieToWillWatch } = this.props;
		// const percentage = 66;

		return (
			<Row>
				<div className="card-img col-6">
					{movie.poster_path ? (
						<>
							<Image
								className="card-img-top"
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt="card-img"
							/>
							{/* <img
								className="card-img-top"
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt=""
							/> */}
						</>
					) : (
						<img className="card-img-top" src={nullMovie} alt="" />
					)}
				</div>
				<div className="card-body col-6">
					{/* <h9 className="card-descr">{movie.overview}</h9> */}
					{/* <div className="mb-0">Rating: {movie.vote_average}</div> */}
					<FontAwesome className="" name="heart" size="2x" style={{ color: 'rgb(27, 105, 217)' }} />
					<Rating vote={movie.vote_average} />
					{/* {console.log(movie.release_date.split('-')[0])} */}
					{/* {console.log(movie.id)} */}
					<div className="d-flex justify-content-between align-items-center">
						{this.state.willWatch ? (
							<button
								type="button"
								className="btn btn-success"
								onClick={() => {
									this.setState({
										willWatch: false,
									});
									removeMovieToWillWatch(movie);
								}}>
								Remove Watch
							</button>
						) : (
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									this.setState({
										willWatch: true,
									});
									addMovieToWillWatch(movie);
								}}>
								Will Watch
							</button>
						)}
						<button className="btn btn-primary" onClick={removeMovie.bind(null, movie)}>
							Del movie
						</button>
					</div>

					<h6 className="card-title">{movie.title}</h6>
					<div>Подробнее...</div>
				</div>
			</Row>
		);
	}
}

// const MovieItem = (props) => {
//     const { movie, removeMovie, addMovieToWillWatch } = props;

//     return (
//         <div className="card">
//             <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="" />
//             <div className="card-body">
//                 <h6 className="card-title">{movie.title}</h6>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <p className="mb-0">Rating: {movie.vote_average}</p>
//                     <button
//                         type="button"
//                         className="btn btn-secondary"
//                         onClick={addMovieToWillWatch.bind(null, movie)} >Will Watch
//                         </button>
//                 </div>
//                 <button
//                     className="btn btn-primary" onClick={removeMovie.bind(null, movie)}>Del movie
//                     </button>
//             </div>
//         </div>
//     )
// }

// export default MovieItem;
