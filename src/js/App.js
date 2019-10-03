import firebase from 'firebase/app';
import FirebaseAuthProvider, {
	FirebaseAuthContext,
} from './context/firebase-auth-context';
import Home from './pages/Home';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Base = styled.div`
	max-width: 768px;
	margin: auto;
`;

export default class App extends React.Component {
	static contextType = FirebaseAuthContext;

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
			<Base>
				<FirebaseAuthProvider>
					<Router>
						{/* <NavBar /> */}
						<Switch>
							{/* <Route path="/user/signin" component={Signin} /> */}
							<Route path="/home" component={Home} />
							<Route path="/" component={Home} />
							{/* <Route path="/user/:userId" component={User} /> */}
							{/* <Route path="*" component={NotFound} /> */}
						</Switch>
					</Router>
				</FirebaseAuthProvider>
			</Base>
		);
	}
}
