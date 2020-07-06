import React, { Component } from 'react';
import { Row, Col, Button, ToggleButton } from 'react-bootstrap';
// import Icon from './icon/Icon';
// import Rating from './Rating';
import FontAwesome from 'react-fontawesome';
import Image from './image/Image';
import nullMovie from '../assets/images/no_foto.jpg';

import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
				<Col xs={12} lg={6} className="card-img">
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
				</Col>
				<Col xs={12} lg={6} className="card-body">
					{/* <h9 className="card-descr">{movie.overview}</h9> */}
					{/* <div className="mb-0">Rating: {movie.vote_average}</div> */}

					<div className="d-flex justify-content-between align-items-center">
						<Button className="btn btn-primary" onClick={removeMovie.bind(null, movie)}>
							<FontAwesome
								className=""
								name="trash"
								size="1x"
								style={{ color: 'rgb(27, 105, 217)' }}
							/>{' '}
						</Button>
						<div style={{ width: 50, height: 50 }}>
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
						{this.state.willWatch ? (
							<Button
								type="button"
								className="btn btn-success"
								onClick={() => {
									this.setState({
										willWatch: false,
									});
									removeMovieToWillWatch(movie);
								}}>
								<FontAwesome
									className=""
									name="heart"
									size="1x"
									style={{ color: 'rgb(27, 105, 217)' }}
								/>
							</Button>
						) : (
							<Button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									this.setState({
										willWatch: true,
									});
									addMovieToWillWatch(movie);
								}}>
								<FontAwesome
									className=""
									name="heart"
									size="1x"
									style={{ color: 'rgb(27, 105, 217)' }}
								/>
							</Button>
						)}
					</div>

					{/* {console.log(movie.release_date.split('-')[0])} */}
					{/* {console.log(movie.id)} */}

					<h6 className="card-title">{movie.title}</h6>
					<div>Подробнее...</div>
				</Col>
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
