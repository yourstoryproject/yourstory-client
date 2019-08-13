import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar-container">
				<Link to="/user/signin">Signin</Link>
				<Link to="/user/signout">Signout</Link>
			</div>
		);
	}
}
