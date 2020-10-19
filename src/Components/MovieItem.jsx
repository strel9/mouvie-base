import React from 'react';
import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import LikeButton from './LikeButton';

// Import react-circular-progressbar module and styles
import {
	CircularProgressbar,
	// CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// Animation
// import { easeQuadInOut } from 'd3-ease';
// import AnimatedProgressProvider from './AnimatedProgressProvider';
// import ChangingProgressProvider from './ChangingProgressProvider';

// import { setMoviesWillWatch } from '../../redux/actions/filters';
// import { setSelectedMovieObj } from '../redux/actions/movies';

import Image from './image/Image';
import imgNoFotoIdDb from '../assets/images/no_foto.jpg';

const MovieItem = ({ movie }) => {
	// const dispatch = useDispatch();
	// const [willWatch, setWillWatch] = useState(false);
	// state = {
	// 	willWatch: false,
	// };

	// const movies = useSelector((state) => state.movies);
	// const moviesWillWatch = useSelector(({ filters }) => filters.moviesWillWatch);

	// const addMovieToWillWatch = (movie) => {
	// 	const updateMoviesWillWatch = [...moviesWillWatch, movie.id];
	// 	dispatch(setMoviesWillWatch(updateMoviesWillWatch));
	// };

	// const removeMovieToWillWatch = (movie) => {
	// 	const updateMoviesWillWatch = moviesWillWatch.filter((item) => item.id !== movie.id);
	// 	// setMoviesWillWatch(updateMoviesWillWatch);
	// };

	// const moviesWillWatch = useSelector(({ filters }) => filters.moviesWillWatch);

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

	// const buttonTrash = (
	// 	<Button className="btn btn-light" onClick={removeMovie.bind(null, movie)}>
	// 		<FontAwesome className="" name="trash" size="1x" style={{ color: 'rgb(27, 105, 217)' }} />{' '}
	// 	</Button>
	// );

	return (
		<div className="card">
			<Row className="card-item">
				<Col xs={12} lg={12} className="">
					<Link to={`/movie-base/movie/${movie.id}`}>{cardImage}</Link>

					<div>
						<h5 className="card-title mt-2">{movie.title}</h5>

						<div className="card__progressbar" style={{ width: 50, height: 50 }}>
							<CircularProgressbar
								className=""
								background
								backgroundPadding={6}
								value={movie.vote_average * 10}
								text={`${movie.vote_average * 10}%`}
								strokeWidth={9}
								styles={buildStyles({
									backgroundColor: '#FFFFFF',
									textColor: '#1B69D9',
									// textSize: '25',
									pathColor: '#1B69D9',
									trailColor: '',
								})}
							/>
						</div>
						<div className="card__like-btn">
							<LikeButton movie={movie} />
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default MovieItem;
