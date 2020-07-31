import React from 'react';
import FontAwesome from 'react-fontawesome';

const like = willWatch ? (
	<Button
		className="card-item__like"
		variant="danger"
		onClick={() => {
			setWillWatch(false);
			// this.setState({
			// 	willWatch: ,
			// });
			removeMovieToWillWatch(movie);
		}}>
		<FontAwesome className="" name="heart" size="1x" style={{ color: 'rgb(27, 105, 217)' }} />
	</Button>
) : (
	<Button
		className="card-item__like"
		variant="light"
		onClick={() => {
			setWillWatch(true);
			// this.setState({
			// 	willWatch: ,
			// });
			addMovieToWillWatch(movie);
		}}>
		<FontAwesome className="" name="heart" size="1x" style={{ color: 'rgb(27, 105, 217)' }} />
	</Button>
);

const LikeButton = ({ movie }) => {
	const [willWatch, setWillWatch] = useState(false);

	return <>{like}</>;
};

export default LikeButton;
