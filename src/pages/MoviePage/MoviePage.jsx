import React from 'react';

import Image from '../../Components/image/Image';
import { Col, Row, Container } from 'react-bootstrap';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useSelector, useDispatch } from 'react-redux';

const MoviePage = () => {
	const movie = useSelector(({ movies }) => movies.selectedMovieObj);
	console.log(movie);
	return (
		<Container>
			<Row>
				<Col xs={12} sm={12} md={3} lg={3}>
					<Image
						className=""
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt="card-img"
					/>
				</Col>
				<Col xs={12} sm={12} md={9} lg={9}>
					<h2>{movie.title}</h2>
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
					<div>лайк кнопка</div>
					<p>{movie.title}</p>
					<p>{movie.overview}</p>
				</Col>
			</Row>
			<div>
				<div>табы</div>
				<div>строка</div>
			</div>
		</Container>
	);
};

export default MoviePage;
