import React from 'react';
import { FirebaseAuthContext } from '../context/firebase-auth-context';
import { Link } from 'react-router-dom';
import { ENTER, SPACE } from '../lib/key-constants';

export default class NavBar extends React.Component {
	static contextType = FirebaseAuthContext;

	handleSignOut(event) {
		event.preventDefault();

		if ((event && event.key === SPACE) || event.key === ENTER) {
			this.context.signOut();
		}
	}

	render() {
		return (
			<FirebaseAuthContext.Consumer>
				{context => (
					<div className="navbar-container">
						<Link to={'/home'}>{'Home'}</Link>

						{context.isUserSignedIn ? (
							<a
								alt={'Sign Out'}
								onClick={context.signOut}
								onKeyDown={this.handleSignOut}
								title={'Sign Out'}
							>
								{'Sign Out'}
							</a>
						) : (
							<Link to="/user/signin">{'Signin'}</Link>
						)}
					</div>
				)}
			</FirebaseAuthContext.Consumer>
		);
	}
}
