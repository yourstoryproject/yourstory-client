import firebase from 'firebase/app';
import { IIdentity } from 'types';

const Timestamp = firebase.firestore.Timestamp;
const fStore = firebase.firestore();
const fsRef = fStore.collection('identities');

export const add = (name: string): Promise<void> => {
	name = encodeURI(name.toLowerCase());

	return fsRef
		.doc(name)
		.set({
			created_on: Timestamp.now(),
		})
		.then(() => {
			console.log('Created identity tag for : ', name);
		});
};

export const get = (key: object): Promise<any> => {
	return fsRef.get(key).then((queryRes): string[] => {
		return queryRes.docs.map(res => res.id);
	});
};

export const addNew = (identities: IIdentity[]): void => {
	identities.forEach((identity: IIdentity): void => {
		fsRef
			.doc(identity.id)
			.get()
			.then(doc => {
				if (!doc.id) {
					add(identity.name).then(() => {});
				} else {
					console.log('Identity already exists : ', name);
				}
			});
	});
};
