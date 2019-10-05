import firebase from 'firebase/app';

export interface IStory {
	contentLink: string;
	createdOn: firebase.firestore.Timestamp;
	description: string;
	id: string;
	identities: IIdentity[];
	location: string;
	name: string;
	title: string;
}

export interface IIdentity {
	createdOn: firebase.firestore.Timestamp;
	id: string;
	name: string;
}
