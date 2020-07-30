import React from 'react';
// import { Route } from 'react-router-dom';

import '../styles.css';

import Header from './Header/Header';
import Home from '../pages/Home';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			{/* <Route path="/" component={Home} exact /> */}
		</>
	);
};
export default App;
