import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Image from './image/Image';
// import Button from '../button/Button';
// import Input from '../input/Input';

import logo from '../assets/images/logo.svg';

const Header = () => {
	return (
		<div className="header d-flex align-items-center">
			<div className="container">
				<Navbar className="navbar d-flex justify-content-between align-items-center">
					{/* <div>лого</div> */}
					<Link className="navbar-item d-flex" to="/movie-base/">
						<Image src={logo} alt="logo" width={80} height={80} />
					</Link>
					{/* <div className="d-flex align-items-center">
						<Input type="text" placeholder="поиск" id={'1'}></Input>
						<div>Логин пользователя</div>
						<Button>Войти</Button>
					</div> */}
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
