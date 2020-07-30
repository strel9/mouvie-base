const initialState = {
	items: [],
	isLoaded: false,
};

const movies = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_MOVIES':
			// console.log(state);
			return {
				...state,
				items: action.payload,
			};
		// console.log(state);

		// case 'INC':
		// 	return state + 1;

		// case 'DEC':
		// 	return state - 1;

		default:
			return state;
	}
};

export default movies;
