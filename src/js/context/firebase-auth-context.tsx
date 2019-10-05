import autobind from 'autobind-decorator';
import React from 'react';
import firebase from 'firebase/app';
import { signOut } from 'lib/firebase';
import { Function } from '@babel/types';
import { User } from 'firebase';

interface FirebaseContext {
	authStatusReported: boolean;
	email: string;
	isUserSignedIn: boolean;
	signOut: Function;
	uid: string;
}

const defaultFirebaseContext: FirebaseContext = {
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
		firebase.auth().onAuthStateChanged((user: User) => {
			if (user) {
				this.setState({
					authStatusReported: true,
					email: user.email,
					isUserSignedIn: !!user,
					signOut: this.handleSignOut,
					uid: user.uid,
				});
			}
		});
	}

	@autobind
	handleSignOut(): void {
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
