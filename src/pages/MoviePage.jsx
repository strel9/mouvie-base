import React, { useEffect, useState } from 'react';

import { API_URL, API_KEY_3 } from '../utils/api';

import { Col, Row, Container, Tabs, Tab } from 'react-bootstrap';

import Image from '../Components/image/Image';
import LikeButton from '../Components/LikeButton';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MoviePage = ({ movieId }) => {
	// const [moviePosters, setMoviePoster1] = useState('');
	// console.log(movie.poster_path);
	// console.log(movie.backdrop_path);
	// console.log(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`);

	useEffect(() => {
		fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY_3}`)
			.then((response) => response.json())
			.then((data) => setMovie(data));

		fetch(`${API_URL}movie/${movieId}/videos?api_key=${API_KEY_3}`)
			.then((response) => response.json())
			.then((data) => setMovieTrailer(data.results[0].key));
	}, [movieId]);

	const [movieTrailers, setMovieTrailer] = useState('');
	const [movie, setMovie] = useState({});

	return (
		<Container>
			<Row className="movie-page mt-2">
				<Col xs={12} sm={12} md={3} lg={3}>
					<Image
						className="movie-page__img"
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt="card-img"
					/>
				</Col>
				<Col xs={12} sm={12} md={9} lg={9}>
					<h2>{movie.title}</h2>
					<div className="d-flex">
						<div className="movie-page__progressbar" style={{ width: 50, height: 50 }}>
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
						<div className="d-flex align-items-center">
							<LikeButton className="" movie={movie} />
						</div>
					</div>
					<p>{movie.overview}</p>
				</Col>
			</Row>
			<div>
				<Tabs defaultActiveKey="trailer" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Details">
						<div>
							<span>Date of release: </span>
							{movie.release_date}
						</div>
						<div>
							<span>Original language: </span>
							{movie.original_language}
						</div>
					</Tab>
					<Tab eventKey="trailer" title="Trailer">
						{movieTrailers ? (
							<iframe
								className=""
								title={movieTrailers}
								src={`https://www.youtube.com/embed/${movieTrailers}`}></iframe>
						) : (
							''
						)}
					</Tab>
					<Tab eventKey="posters" title="Posters">
						<div>
							{movie ? (
								<>
									<Image
										className=""
										src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
										alt="img"
									/>
								</>
							) : (
								''
							)}
						</div>
					</Tab>
				</Tabs>
			</div>
		</Container>
	);
};

export default MoviePage;
