import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { Signout } from './lib/firebase';
import styles from 'styled-components';
import { theme, ThemeContext } from './context/theme-context';
import FirebaseAuthProvider from './context/firebase-auth-context';
import firebase from 'firebase/app';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			theme,
			user: {
				email: '',
				uid: '',
			},
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user: {
						email: user.email,
						uid: user.uid,
					},
				});
			} else {
				console.log('No user signed in');
			}
		});
	}

	render() {
		return (
			<ThemeContext.Provider value={theme}>
				<FirebaseAuthProvider>
					<Router>
						<Switch>
							<Route path="/user/signin" component={Signin} />
							<Route path="/user/signout" component={Signout} />
							{/* <Route path="/user/:userId" component={User} /> */}
							<Route exact path="/" component={Home} />
							{/* <Route path="*" component={NotFound} /> */}
						</Switch>
					</Router>
				</FirebaseAuthProvider>
			</ThemeContext.Provider>
		);
	}
}

App.contextType = ThemeContext;
