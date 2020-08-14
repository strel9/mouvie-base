import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URL, API_KEY_3 } from '../../utils/api';

import { Col, Row, Container, Tabs, Tab, Sonnet } from 'react-bootstrap';

import Tab1 from '../../Components/Tab1/Tab1';
import Image from '../../Components/image/Image';
import LikeButton from '../../Components/LikeButton';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MoviePage = () => {
	const movie = useSelector(({ movies }) => movies.selectedMovieObj);
	// console.log(movie.id);

	useEffect(() => {
		// getMovie();

		fetch(
			`${API_URL}movie/${movie.id}/images?api_key=${API_KEY_3}`,
			// `${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&page=${currentPage}&with_genres=${moviesGenreActive}&primary_release_year=${sortByPrimaryReleaseYear}`,
		)
			.then((response) => response.json())

			// .then((data) => console.log(`https://image.tmdb.org/t/p/w500${data.backdrops[0].file_path}`));
			.then((data) => {
				setMoviePoster1(data.backdrops[0].file_path);
				setMoviePoster2(data.backdrops[1].file_path);
			});
	}, []);

	useEffect(() => {
		// getMovie();

		fetch(
			`${API_URL}movie/${movie.id}/videos?api_key=${API_KEY_3}`,
			// https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
			// `${API_URL}find/${movie.id}?api_key=${API_KEY_3}`,
			// `${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&page=${currentPage}&with_genres=${moviesGenreActive}&primary_release_year=${sortByPrimaryReleaseYear}`,
		)
			.then((response) => response.json())
			// .then((data) => console.log(data.results[0].key));
			.then((data) => setMovieTrailer(data.results[0].key));
		// .then((data) => {
		// 	setMoviePoster1(data.backdrops[0].file_path);
		// 	setMoviePoster2(data.backdrops[1].file_path);
		// });
	}, []);
	const [moviePoster1, setMoviePoster1] = useState('');
	const [moviePoster2, setMoviePoster2] = useState('');
	const [movieTrailer, setMovieTrailer] = useState('');
	// console.log(movieTrailer);

	return (
		<div className="movie-page__wrapper">
			<Container>
				<Row className="movie-page">
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
							<div>
								<LikeButton className="" movie={movie} />
							</div>
						</div>
						<p>{movie.overview}</p>
					</Col>
				</Row>
				<div>
					<Tabs defaultActiveKey="trailer" id="uncontrolled-tab-example">
						<Tab eventKey="home" title="Details">
							<Tab1 movie={movie} />
						</Tab>
						<Tab eventKey="trailer" title="Trailer">
							<iframe
								className=""
								// name={name}
								// title={name}
								// key={key}
								src={'https://www.youtube.com/embed/' + movieTrailer}></iframe>
						</Tab>
						<Tab eventKey="posters" title="Posters">
							<div>
								<Image
									className=""
									src={`https://image.tmdb.org/t/p/w500${moviePoster1}`}
									alt="img"
								/>
								<Image
									className=""
									src={`https://image.tmdb.org/t/p/w500${moviePoster2}`}
									alt="img"
								/>
							</div>
						</Tab>
					</Tabs>
				</div>
			</Container>
		</div>
	);
};

export default MoviePage;
