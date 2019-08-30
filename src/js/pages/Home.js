import React from 'react';

import stuff from '../lib/api-client';
console.log('HOME PAGE : ', stuff);
export default class Home extends React.Component {
	render() {
		//		stuff.storiesRef.add({
		//			contentLink: 'test link',
		//			description: 'test description',
		//			identities: ['gay', 'test'],
		//			location: 'test',
		//			name: 'test',
		//			title: 'test title',
		//		});

		return <div className="home-container">Hello</div>;
	}
}
