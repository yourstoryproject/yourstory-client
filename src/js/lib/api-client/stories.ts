import { IStory } from 'types';
import firebase from 'firebase/app';
import apiClient from '.';

const Timestamp = firebase.firestore.Timestamp;
const fStore = firebase.firestore();
const fsRef = fStore.collection('stories');

interface ErrorMessage {
	error: string;
	message: string;
}

const createStory = (
	contentLink,
	description,
	identities,
	location,
	name,
	title,
) => {
	return {
		content_link: contentLink,
		created_on: Timestamp.now(),
		description,
		identities,
		location,
		name,
		title,
	};
};

export const add = ({
	contentLink = '',
	description = '',
	identities = [],
	location = '',
	name = '',
	title = '',
}: IStory): void => {
	name = encodeURI(name);

	fsRef
		.where('title', '==', title)
		.limit(1)
		.get()
		.then(
			(doc): Promise<void> => {
				let newStory;

				if (!doc.empty) {
					const errorMessage: ErrorMessage = {
						error: 'Unable to create story',
						message: 'Story already exists with title: ' + title,
					};

					console.error(errorMessage);
				} else {
					newStory = createStory(
						contentLink,
						description,
						identities,
						location,
						name,
						title,
					);

					return fsRef.add(newStory).then(doc => {
						//TODO: Return successful creation message

						apiClient.identities.addNew(identities);
					});
				}
			},
		);
};

export const get = (
	title: string,
): Promise<IStory[] | firebase.firestore.DocumentData[]> => {
	if (title) {
		return fsRef
			.where('title', '==', title)
			.get()
			.then(querySnapshot => querySnapshot.docs.map(doc => doc.data()));
	} else {
		return fsRef
			.get()
			.then(querySnapshot => querySnapshot.docs.map(doc => doc.data()));
	}
};
