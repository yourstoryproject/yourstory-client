import firebase from 'firebase';

const Timestamp = firebase.firestore.Timestamp;
const fStore = firebase.firestore();
const fsRef = fStore.collection('identities');

export const add = name => {
	if (typeof name !== 'string') {
		return new Error(
			'Unable to create document, Identity should be a string',
		);
	}

	name = encodeURI(name.toLowerCase());

	return fsRef.doc(name).set({
		created_on: new Timestamp.now(),
	});
};

export const get = (key = {}) => {
	fsRef.get(key).then(queryRes => {
		return queryRes.docs.map(res => res.id);
	});
};

export const addNew = identities => {
	identities.forEach(identity => {
		fsRef
			.doc(identity)
			.get()
			.then(doc => {
				console.log(doc);
				if (!doc.id) {
					add(identity).then(() => {
						console.log('Created identity tag for : ', identity);
					});
				} else {
					console.log('Identity already exists : ', identity);
				}
			});
	});
};
