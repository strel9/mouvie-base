import React from 'react';
import '../styles.css';

import Header from './Header/Header';
import MoviesBody from './MoviesBody';

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<MoviesBody />
			</>
		);
	}
}
export default App;
