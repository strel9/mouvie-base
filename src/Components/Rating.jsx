import React from 'react';

// Import react-circular-progressbar module and styles
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rating = ({ vote }) => {
	return (
		<>
			<CircularProgressbar
				value={vote * 10}
				text={`${vote * 10}%`}
				strokeWidth={7}
				styles={buildStyles({
					textColor: '#1B69D9',
					pathColor: '#1B69D9',
					trailColor: '',
				})}
			/>
		</>
	);
};

export default Rating;
