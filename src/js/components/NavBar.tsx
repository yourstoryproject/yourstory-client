import { FirebaseAuthContext } from '../context/firebase-auth-context';
import { Link } from 'react-router-dom';
import autobind from 'autobind-decorator';
import React from 'react';

export default class NavBar extends React.Component {
	static contextType = FirebaseAuthContext;

	@autobind
	handleSignOut(): void {
		this.context.signOut();
	}

	render() {
		return (
			<FirebaseAuthContext.Consumer>
				{context => (
					<div className="navbar-container">
						<Link to={'/home'}>{'Home'}</Link>

						{context.isUserSignedIn ? (
							<button
								onClick={this.handleSignOut}
								title={'Sign Out'}
							>
								{'Sign Out'}
							</button>
						) : (
							<Link to="/user/signin">{'Signin'}</Link>
						)}
					</div>
				)}
			</FirebaseAuthContext.Consumer>
		);
	}
}
