import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from '../Components/Sidebar/Sidebar';
import MoviesList from '../Components/MoviesList/MoviesList';
import { Col, Row, Container } from 'react-bootstrap';

import { API_URL, API_KEY_3 } from '../utils/api';

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
	const [movies, setMovies] = React.useState([]);
	const [moviesGenre, setMoviesGenre] = React.useState([]);
	const [moviesGenreActive, setMoviesGenreActive] = React.useState([]);
	const [moviesWillWatch, setMoviesWillWatch] = React.useState([]);
	const [sortBy, setSortBy] = React.useState('popularity.desc');
	const [sortByPrimaryReleaseYear, setSortByPrimaryReleaseYear] = React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [totalPages, setTotalPages] = React.useState(null);

	useEffect(() => {
		getMovie();
		getMovieGenre();
	}, [sortBy, currentPage, moviesGenreActive, sortByPrimaryReleaseYear]);

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

	const getMovie = () => {
		// const { sort_by, currentPage, moviesGenreActive, sortByPrimaryReleaseYear } = this.state;
		fetch(
			`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&page=${currentPage}&with_genres=${moviesGenreActive}&primary_release_year=${sortByPrimaryReleaseYear}`,
		)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.results);
				setTotalPages(data.total_pages);
			});
		// .then((data) => );
		// this.setState({ movies: data.results, totalPages: data.total_pages }));
		// .then((data) => console.log(data));
	};

	const getMovieGenre = () => {
		// fetch(`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
		fetch(`${API_URL}genre/movie/list?api_key=${API_KEY_3}`)
			.then((response) => response.json())
			.then((data) => setMoviesGenre(data.genres));
		// .then((data) => console.log(data));
	};

	const removeMovie = (movie) => {
		const updateMovies = movies.filter((item) => item.id !== movie.id);
		setMovies(updateMovies);
	};

	const addMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = [...moviesWillWatch, movie];
		// updateMoviesWillWatch.push(movie);
		setMoviesWillWatch(updateMoviesWillWatch);
	};

	const removeMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = moviesWillWatch.filter((item) => item.id !== movie.id);
		// const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
		// updateMoviesWillWatch.push(movie);
		setMoviesWillWatch(updateMoviesWillWatch);
	};

	const paginationIncrease = () => {
		const updateCurrentPage = currentPage + 1;
		setCurrentPage(updateCurrentPage);
	};

	const paginationDecrease = () => {
		if (currentPage >= 2) {
			const updateCurrentPage = currentPage - 1;
			setCurrentPage(updateCurrentPage);
		}
	};

	const onChangeSortBy = (value) => {
		setSortBy(value);
	};

	const onChangeYear = (value) => {
		setSortByPrimaryReleaseYear(value);
	};

	const addMoviesGenre = (id) => {
		const updateCurrentGenre = [...moviesGenreActive, id];
		setMoviesGenreActive(updateCurrentGenre);
		setCurrentPage(1);
	};

	const removeMoviesGenre = (id) => {
		const updateCurrentGenre = moviesGenreActive.filter((item) => item !== id);
		setMoviesGenreActive(updateCurrentGenre);
	};

	return (
		<Container>
			{/* {console.log(this.state.movies)} */}
			<Row>
				<Col xs={12} sm={12} md={3} lg={3}>
					<Sidebar
						currentPage={currentPage}
						totalPages={totalPages}
						moviesWillWatch={moviesWillWatch}
						movies={movies}
						moviesGenre={moviesGenre}
						moviesGenreActive={moviesGenreActive}
						addMoviesGenre={addMoviesGenre}
						removeMoviesGenre={removeMoviesGenre}
						// sortBy={sortBy}
						onChangeSortBy={(e) => onChangeSortBy(e.target.value)}
						onChangeYear={(e) => onChangeYear(e.target.value)}
						paginationIncrease={paginationIncrease}
						paginationDecrease={paginationDecrease}
					/>
				</Col>

				<Col xs={12} sm={12} md={9} lg={9}>
					<MoviesList
						movies={movies}
						removeMovie={removeMovie}
						addMovieToWillWatch={addMovieToWillWatch}
						removeMovieToWillWatch={removeMovieToWillWatch}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
