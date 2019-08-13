import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Signin from './pages/Signin';
import { Signout } from './lib/firebase';
import FirebaseAuthProvider from './context/firebase-auth-context';
import firebase from 'firebase/app';

export default class App extends React.Component {
	state = {
		user: {
			email: '',
			uid: '',
		},
	};

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
			<FirebaseAuthProvider>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/user/signin" component={Signin} />
						<Route path="/user/signout" component={Signout} />
						{/* <Route path="/user/:userId" component={User} /> */}
						{/* <Route path="*" component={NotFound} /> */}
					</Switch>
				</Router>
			</FirebaseAuthProvider>
		);
	}
}
