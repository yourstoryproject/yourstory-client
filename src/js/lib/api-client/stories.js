import firebase from 'firebase';

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
	// check for duplicate titles is not working
	let story = fsRef
		.where('title', '==', title)
		.limit(1)
		.get()
		.then(storiess => storiess);

	name = encodeURI(name);

	if (story.empty) {
		return {
			error: 'Unable to create story',
			message: 'Story already exists with title: ' + title,
		};
	} else {
		story = createStory(
			contentLink,
			description,
			identities,
			location,
			name,
			title,
		);

		return fsRef.add(story).then(doc => {
			console.log('story created : ', doc.id, doc);
		});
	}
};
