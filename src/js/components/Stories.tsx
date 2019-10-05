import React from 'react';
import apiClient from '../lib/api-client';
import { IStory } from 'types';

export default class Stories extends React.Component {
	state = {
		stories: [],
	};

	componentWillMount() {
		apiClient.stories.get('').then((stories: IStory[]): void => {
			this.setState({ stories });
		});
	}

	render() {
		const { stories } = this.state;

		return <div>{stories && stories.map(story => story.title)}</div>;
	}
}
