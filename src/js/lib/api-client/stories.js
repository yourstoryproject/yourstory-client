import firebase from 'firebase';
import apiClient from '../api-client';

const Timestamp = firebase.firestore.Timestamp;
const fStore = firebase.firestore();
const fsRef = fStore.collection('stories');

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
		created_on: new Timestamp.now(),
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
}) => {
	name = encodeURI(name);

	fsRef
		.where('title', '==', title)
		.limit(1)
		.get()
		.then(doc => {
			let newStory;

			if (!doc.empty) {
				return {
					error: 'Unable to create story',
					message: 'Story already exists with title: ' + title,
				};
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
		});
};
