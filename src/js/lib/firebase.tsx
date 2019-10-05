import 'firebase/auth';
import 'firebase/firestore';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import React from 'react';

const firebaseConfig: object = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const signOut = (): Promise<void | JSX.Element> => {
	return firebase
		.auth()
		.signOut()
		.then(() => <Redirect to="/home" />)
		.catch(error => {
			console.error('error : ', error);
		});
};

const fb: object = {
	auth: firebase.auth(),
};

export default fb;
