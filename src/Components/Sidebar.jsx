import React from 'react';

import { Col, Form, Button, Pagination } from 'react-bootstrap';

// import PropTypes from 'prop-types';
// import classNames from 'classnames'

const Sidebar = ({
	moviesWillWatch,
	moviesGenre,
	moviesGenreActive,
	currentPage,
	total_pages,
	addMoviesGenre,
	removeMoviesGenre,
	onChangePopularity,
	onChangeYear,
	paginationIncrease,
	paginationDecrease,
	// movies,
	// updateSortBy,
	// sort_by,
}) => {
	const getMoviesYearRelease = () => {
		let years = [];
		for (let index = new Date().getFullYear(); index > 1970; index--) {
			years.push(index);
		}
		return years;
	};
	const years = getMoviesYearRelease();

	const popularity = ['popularity.desc', 'revenue.desc', 'vote_average.desc'];

	return (
		<Col xs={12} md={3} lg={3}>
			<div>Буду смотреть: {moviesWillWatch.length}</div>
			<h3>Filters</h3>
			<Form>
				<div>
					<Form.Label>Sort By:</Form.Label>
					<Form.Control as="select" onChange={onChangePopularity}>
						{popularity.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</Form.Control>
				</div>
				<div>
					<Form.Label>Release Year:</Form.Label>
					<Form.Control as="select" onChange={onChangeYear}>
						<option>выбирите год</option>
						{years.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</Form.Control>
				</div>
				<div>
					<Form.Label>Выберите жанр:</Form.Label>
					<div className="d-flex">
						<div>
							{moviesGenre.map(({ name, id }) => {
								const isActive = moviesGenreActive.indexOf(id) !== -1;
								/* console.log(moviesGenre) */
								// console.log(isActive);
								// console.log(moviesGenre.indexOf(id) !== -1);

								return (
									<Button
										key={id}
										className={isActive ? 'active' : ''}
										onClick={
											// () => addMoviesGenre(id)
											() => (isActive ? removeMoviesGenre(id) : addMoviesGenre(id))
										}>
										{name}
									</Button>
								);
							})}
							{/* <Button
								key={123}
								// className={isActive ? 'active' : ''}
								onClick={
									() => console.log('name')
									// isActive ? removeMoviesGenre(moviesGenre) : addMoviesGenre(moviesGenre)
								}>
								ACTIONNN
							</Button>
							<Button
								key={124}
								// className={isActive ? 'active' : ''}
								onClick={
									() => console.log('name')
									// isActive ? removeMoviesGenre(moviesGenre) : addMoviesGenre(moviesGenre)
								}>
								DRAMA
							</Button> */}
						</div>
					</div>
				</div>

				<button className="btn-primary">Сбросить фильтр</button>

				<div className="pagination">
					<div className="btn-group">
						<Button className="btn-primary" onClick={() => paginationDecrease()}>
							Назад
						</Button>

						<div>{`${currentPage} из ${total_pages}`}</div>

						<Button
							className="btn-primary"
							onClick={() => {
								paginationIncrease();
							}}>
							Вперед
						</Button>
					</div>
				</div>
			</Form>
		</Col>
	);
};

export default Sidebar;
