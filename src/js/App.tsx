import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import FirebaseAuthProvider, {
	FirebaseAuthContext,
} from 'context/firebase-auth-context';
import Home from 'pages/Home';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import React from 'react';
import styled from 'styled-components';
import TermsOfService from 'pages/TermsOfService';

const Base = styled.div`
	height: 100%;
	margin: auto;
`;

const Footer = styled.footer`
	bottom: 0;
	height: auto;
	position: absolute;
	width: 100%;
	z-index: 10;
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
							<Route
								path="/privacy-policy"
								component={PrivacyPolicy}
							/>
							<Route
								path="/terms-of-service"
								component={TermsOfService}
							/>
							{/* <Route path="/user/signin" component={Signin} /> */}
							<Route path="/(home)?" component={Home} />
							{/* <Route path="/" component={Home} /> */}
							{/* <Route path="/user/:userId" component={User} /> */}
							{/* <Route path="*" component={NotFound} /> */}
						</Switch>
						<Footer>
							<div>
								<Link className="link" to="/terms-of-service">
									Terms of Service
								</Link>
								<Link className="link" to="/privacy-policy">
									Privacy Policy
								</Link>
							</div>
							<div>
								© 2020 Your Story Project. All Rights Reserved.
							</div>
						</Footer>
					</Router>
				</FirebaseAuthProvider>
			</Base>
		);
	}
}
