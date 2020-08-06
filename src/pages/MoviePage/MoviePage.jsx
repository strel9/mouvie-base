import React from 'react';

import Tab1 from '../../Components/Tab1/Tab1';
import Image from '../../Components/image/Image';
import { Col, Row, Container, Tabs, Tab, Sonnet } from 'react-bootstrap';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useSelector, useDispatch } from 'react-redux';

import './MoviePage.css';

const MoviePage = () => {
	const movie = useSelector(({ movies }) => movies.selectedMovieObj);
	console.log(movie);
	return (
		<Container>
			<Row>
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
						<CircularProgressbar
							className="circular-progressbar__card"
							value={movie.vote_average * 10}
							text={`${movie.vote_average * 10}%`}
							strokeWidth={7}
							styles={buildStyles({
								textColor: '#1B69D9',
								pathColor: '#1B69D9',
								trailColor: '',
							})}
						/>
						<div>лайк компонент</div>
					</div>
					<p>{movie.overview}</p>
				</Col>
			</Row>
			<div>
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Details">
						<Tab1 movie={movie} />
					</Tab>
					<Tab eventKey="profile" title="Video">
						<Image />
					</Tab>
					<Tab eventKey="contact" title="Actors">
						<Image />
					</Tab>
				</Tabs>
			</div>
		</Container>
	);
};

export default MoviePage;
