import autobind from 'autobind-decorator';
import React from 'react';
import firebase from 'firebase/app';
import { signOut } from '../lib/firebase';
import { Redirect } from 'react-router-dom';

const defaultFirebaseContext = {
	authStatusReported: false,
	email: '',
	isUserSignedIn: false,
	signOut: null,
	uid: '',
};

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext);

export default class FirebaseAuthProvider extends React.Component {
	state = defaultFirebaseContext;

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					authStatusReported: true,
					email: user.email,
					isUserSignedIn: !!user,
					signOut: this.signOut,
					uid: user.uid,
				});
			}
		});
	}

	@autobind
	signOut() {
		signOut().then(() => {
			this.setState(defaultFirebaseContext);
		});
	}

	render() {
		const {
			props: { children },
			state: { authStatusReported, isUserSignedIn },
		} = this;

		return (
			<FirebaseAuthContext.Provider value={this.state}>
				{children}
			</FirebaseAuthContext.Provider>
		);
	}
}
