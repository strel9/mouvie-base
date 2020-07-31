import React from 'react';
import { Route } from 'react-router-dom';

import '../styles.css';

import Header from './Header/Header';
import Home from '../pages/Home/Home';
import MoviePage from '../pages/MoviePage/MoviePage';

const App = () => {
	return (
		<>
			<Header />
			{/* <Home /> */}
			<Route path="/movie-base/" component={Home} exact />
			<Route path="/movie-base/movie-page/" component={MoviePage} exact />
		</>
	);
};
export default App;
