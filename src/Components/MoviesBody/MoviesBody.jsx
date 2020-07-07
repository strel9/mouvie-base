import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import MoviesList from '../MoviesList/MoviesList';
import { Col, Row, Container } from 'react-bootstrap';

import { API_URL, API_KEY_3 } from '../../utils/api';

export default class MoviesBody extends Component {
	state = {
		movies: [],
		moviesGenre: [],
		moviesGenreActive: [],
		moviesWillWatch: [],
		currentPage: 1,
		totalPages: null,
		sort_by: 'popularity.desc',
		sortByPrimaryReleaseYear: null,
	};

	componentDidMount() {
		this.getMovie();
		this.getMovieGenre();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.sort_by !== this.state.sort_by ||
			prevState.currentPage !== this.state.currentPage ||
			prevState.moviesGenreActive !== this.state.moviesGenreActive ||
			prevState.sortByPrimaryReleaseYear !== this.state.sortByPrimaryReleaseYear
		) {
			this.getMovie();
			this.getMovieGenre();
		}
	}

	getMovie = () => {
		const { sort_by, currentPage, moviesGenreActive, sortByPrimaryReleaseYear } = this.state;
		fetch(
			`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${sort_by}&page=${currentPage}&with_genres=${moviesGenreActive}&primary_release_year=${sortByPrimaryReleaseYear}`,
		)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.results, totalPages: data.total_pages }));
		// .then((data) => console.log(data));
	};

	getMovieGenre = () => {
		// fetch(`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
		fetch(`${API_URL}genre/movie/list?api_key=${API_KEY_3}`)
			.then((response) => response.json())
			.then((data) => this.setState({ moviesGenre: data.genres }));
		// .then((data) => console.log(data));
	};

	removeMovie = (movie) => {
		const updateMovies = this.state.movies.filter(function (item) {
			return item.id !== movie.id;
		});
		// console.log(updateMovies)
		this.setState({
			movies: updateMovies,
		});
	};

	addMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
		// updateMoviesWillWatch.push(movie);
		this.setState({
			moviesWillWatch: updateMoviesWillWatch,
		});
	};

	removeMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
			return item.id !== movie.id;
		});

		// const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
		// updateMoviesWillWatch.push(movie);
		this.setState({
			moviesWillWatch: updateMoviesWillWatch,
		});
	};

	paginationIncrease = () => {
		// debugger;
		const updateCurrentPage = this.state.currentPage + 1;
		this.setState({
			currentPage: updateCurrentPage,
		});
		console.log(this.state.currentPage);
	};

	paginationDecrease = () => {
		if (this.state.currentPage >= 2) {
			console.log(this.state.currentPage);

			const updateCurrentPage = this.state.currentPage - 1;
			this.setState({
				currentPage: updateCurrentPage,
			});
		}
	};

	onChangePopularity = (value) => {
		this.setState({
			sort_by: value,
		});
	};

	onChangeYear = (value) => {
		this.setState({
			sortByPrimaryReleaseYear: value,
		});
	};

	addMoviesGenre = (id) => {
		const updateCurrentGenre = [...this.state.moviesGenreActive, id];
		this.setState({
			moviesGenreActive: updateCurrentGenre,
			currentPage: 1,
		});
	};

	removeMoviesGenre = (id) => {
		const updateCurrentGenre = this.state.moviesGenreActive.filter((item) => item !== id);
		this.setState({
			moviesGenreActive: updateCurrentGenre,
		});
	};

	render() {
		const {
			movies,
			moviesGenre,
			moviesGenreActive,
			moviesWillWatch,
			currentPage,
			totalPages,
			sort_by,
			// sort_year,
		} = this.state;

		const {
			onChangePopularity,
			onChangeYear,
			// updateSortBy,
			removeMovie,
			addMoviesGenre,
			removeMoviesGenre,
			addMovieToWillWatch,
			removeMovieToWillWatch,
			paginationIncrease,
			paginationDecrease,
		} = this;
		// console.log("render", this.state.sort_by)
		// console.log("render-state", this.state)

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
							sort_by={sort_by}
							onChangePopularity={(e) => onChangePopularity(e.target.value)}
							onChangeYear={(e) => onChangeYear(e.target.value)}
							paginationIncrease={paginationIncrease}
							paginationDecrease={paginationDecrease}
						/>
					</Col>

					<Col xs={12} sm={12} md={9} lg={9}>
						<MoviesList
							movies={movies}
							// sort_by={sort_by}
							// sort_year={sort_year}
							// updateSortBy={updateSortBy}
							removeMovie={removeMovie}
							addMovieToWillWatch={addMovieToWillWatch}
							removeMovieToWillWatch={removeMovieToWillWatch}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}
