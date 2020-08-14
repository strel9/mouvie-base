import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from '../pages/Home';
import MoviePage from '../pages/MoviePage/MoviePage';

import './App.css';

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
