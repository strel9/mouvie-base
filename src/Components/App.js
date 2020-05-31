import React from "react";
// import moviesData from '../moviesData'
import MovieItem from './MovieItem'
import MovieTabs from './MovieTabs'
import { API_URL, API_KEY_3 } from "../utils/api"

import "../styles.css";
import logo from '../Components/logo.svg'


// console.log(moviesData);



class App extends React.Component {

	constructor() {
		super();
		this.state = {
			// state = {
			movies: [],
			moviesWillWatch: [],
			sort_by: "popularity.desc"
		}
		console.log("constructor")
	}

	componentDidMount() {
		console.log("didmount")
		this.getMovie()
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("didUodate")
		console.log("prev", prevProps, prevState)
		console.log("this", this.props, this.state)
		if (prevState.sort_by !== this.state.sort_by) {
			console.log("call api")
			this.getMovie()
		}
	}

	getMovie = () => {
		// fetch(`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
		fetch(`${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.results }))
		// console.log("after fetch")
	}

	removeMovie = (movie) => {
		const updateMovies = this.state.movies.filter(function (item) {
			return item.id !== movie.id;
		})
		// console.log(updateMovies)
		this.setState({
			movies: updateMovies
		})
	}

	addMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
		// updateMoviesWillWatch.push(movie);
		this.setState({
			moviesWillWatch: updateMoviesWillWatch
		})
	}

	removeMovieToWillWatch = (movie) => {
		const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
			return item.id !== movie.id;
		})

		// const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
		// updateMoviesWillWatch.push(movie);
		this.setState({
			moviesWillWatch: updateMoviesWillWatch
		})
	}

	updateSortBy = value => {
		this.setState({
			sort_by: value
		})
	}

	render() {
		const { movies, moviesWillWatch } = this.state;
		console.log("render", this.state.sort_by)
		console.log("render-state", this.state)

		return (

			<>
				<div className="header d-flex align-items-center">
					<div className="container">
						<div className="navbar d-flex justify-content-between align-items-center">
							{/* <div>лого</div> */}
							<a className="navbar-item d-flex" href="/">
								<img className="" src={logo} alt="logo" />
							</a>
							<div className="d-flex align-items-center">
								{/* <label> */}
								<input type="text" placeholder="поиск"></input>
								{/* </label> */}
								<div>
									Логин пользователя
									</div>
								<button className="btn btn-primary">
									Войти
									</button>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">

						<div className="col-3">
							<div> Буду смотреть: {moviesWillWatch.length}</div>
							<h3>Фильтры</h3>
							<form>
								<button className="btn-primary">Сбросить фильтр</button>

								<div>
									<label>Соритровать по:</label>
									<select></select>
								</div>
								<div>
									<label>Год релиза:</label>
									<select></select>
								</div>
								<div>
									<label>Выберите жанр:</label>
									<div>
										<input type="checkbox"></input>
										<label>Боевик</label>
									</div>
									<div>
										<input type="checkbox"></input>
										<label>Комедия</label>
									</div>
								</div>
								<div className="pagination">
									<div className="btn-group">
										<button className="btn-primary">Назад</button>
										<button className="btn-primary">Вперед</button>
									</div>
									<div>
										1 из 500
										</div>
								</div>

							</form>

						</div>

						<div className="col-9">
							<div className="row mb-4">
								<div className="col-12">
									<MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
								</div>
							</div>
							<div className="row">
								{movies.map(
									movie => {
										return (
											<div className="col-6 mb-4" key={movie.id}>
												<MovieItem
													movie={movie}
													removeMovie={this.removeMovie}
													addMovieToWillWatch={this.addMovieToWillWatch}
													removeMovieToWillWatch={this.removeMovieToWillWatch} />
											</div>
										)
									})}
							</div>
						</div>
					</div>
				</div>

			</>
		);
	}

}
export default App;