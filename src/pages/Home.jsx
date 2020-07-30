import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL, API_KEY_3 } from '../utils/api';

import Sidebar from '../Components/Sidebar/Sidebar';
import MoviesList from '../Components/MoviesList/MoviesList';

import { Col, Row, Container } from 'react-bootstrap';

import {
	setSortBy,
	setTotalPages,
	setMoviesGenre,
	setSortByPrimaryReleaseYear,
	// setMoviesGenreActive,
} from '../redux/actions/filters';
import { setMovies } from '../redux/actions/movies';

function Home() {
	// state = {
	// 	movies: [],
	// 	moviesGenre: [],
	// 	moviesGenreActive: [],
	// 	moviesWillWatch: [],
	// 	sort_by: 'popularity.desc',
	// 	sortByPrimaryReleaseYear: null,
	// 	currentPage: 1,
	// 	totalPages: null,
	// };
	const dispatch = useDispatch();
	// const [movies, setMovies] = React.useState([]);
	// const movies = useSelector((state) => state.movies);
	const {
		sortBy,
		moviesGenre,
		currentPage,
		sortByPrimaryReleaseYear,
		moviesGenreActive,
	} = useSelector(({ filters }) => filters);
	// const [sortBy, setSortBy] = React.useState('popularity.desc');
	// const [moviesGenre, setMoviesGenre] = React.useState([]);
	// const [moviesWillWatch, setMoviesWillWatch] = React.useState([]);
	// const [totalPages, setTotalPages] = React.useState(null);
	// const [currentPage, setCurrentPage] = React.useState(1);
	// const [sortByPrimaryReleaseYear, setSortByPrimaryReleaseYear] = React.useState([]);
	// const [moviesGenreActive, setMoviesGenreActive] = React.useState([]);

	useEffect(() => {
		// getMovie();
		fetch(
			`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&page=${currentPage}&with_genres=${moviesGenreActive}&primary_release_year=${sortByPrimaryReleaseYear}`,
		)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data.results);
				dispatch(setMovies(data.results));
				dispatch(setTotalPages(data.total_pages));
				// setTotalPages(data.total_pages);
			});
		// getMovieGenre();
		fetch(`${API_URL}genre/movie/list?api_key=${API_KEY_3}`)
			.then((response) => response.json())
			.then((data) => dispatch(setMoviesGenre(data.genres)));
			// .then((data) => console.log(data.genres));
	}, [sortBy, currentPage, sortByPrimaryReleaseYear, moviesGenreActive, moviesGenre]);

	// componentDidMount() {
	// 	getMovie();
	// 	getMovieGenre();
	// }

	// componentDidUpdate(prevState) {
	// 	if (
	// 		prevState.sort_by !== this.state.sort_by ||
	// 		prevState.currentPage !== this.state.currentPage ||
	// 		prevState.moviesGenreActive !== this.state.moviesGenreActive ||
	// 		prevState.sortByPrimaryReleaseYear !== this.state.sortByPrimaryReleaseYear
	// 	) {
	// 		this.getMovie();
	// 		this.getMovieGenre();
	// 	}
	// }

	// const getMovie = () => {
	// 	fetch(
	// 		`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&page=${currentPage}&with_genres=${moviesGenreActive}&primary_release_year=${sortByPrimaryReleaseYear}`,
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setMovies(data.results);
	// 			setTotalPages(data.total_pages);
	// 		});
	// };

	// const getMovieGenre = () => {
	// 	fetch(`${API_URL}genre/movie/list?api_key=${API_KEY_3}`)
	// 		.then((response) => response.json())
	// 		.then((data) => setMoviesGenre(data.genres));
	// };

	// const removeMovie = (movie) => {
	// 	const updateMovies = movies.filter((item) => item.id !== movie.id);
	// 	setMovies(updateMovies);
	// };

	const onChangeSortBy = (value) => {
		dispatch(setSortBy(value));
	};

	const onChangeYear = (value) => {
		dispatch(setSortByPrimaryReleaseYear(value));
	};

	return (
		<Container>
			{/* {console.log(this.state.movies)} */}
			<Row>
				<Col xs={12} sm={12} md={3} lg={3}>
					<Sidebar
						// currentPage={currentPage}
						// totalPages={totalPages}
						// moviesWillWatch={moviesWillWatch}
						// moviesGenre={moviesGenre}
						// moviesGenreActive={moviesGenreActive}
						// addMoviesGenre={addMoviesGenre}
						// removeMoviesGenre={removeMoviesGenre}
						onChangeSortBy={(e) => onChangeSortBy(e.target.value)}
						onChangeYear={(e) => onChangeYear(e.target.value)}
						// paginationIncrease={paginationIncrease}
						// paginationDecrease={paginationDecrease}
					/>
				</Col>

				<Col xs={12} sm={12} md={9} lg={9}>
					<MoviesList
					// movies={movies}
					// removeMovie={removeMovie}
					// addMovieToWillWatch={addMovieToWillWatch}
					// removeMovieToWillWatch={removeMovieToWillWatch}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
