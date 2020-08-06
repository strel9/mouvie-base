import React from 'react';

const Tab1 = ({ movie }) => {
	return (
		<>
			<div>{movie.release_date}</div>
			<div>{movie.original_language}</div>
		</>
	);
};

export default Tab1;
