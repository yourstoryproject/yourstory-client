import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { uiConfig } from '../lib/auth';

export default class Signin extends React.Component {
	render() {
		return (
			<div className="signin-container">
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
				/>
			</div>
		);
	}
}
