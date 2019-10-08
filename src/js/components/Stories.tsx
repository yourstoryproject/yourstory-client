import React, { useState, useEffect } from 'react';
import apiClient from '../lib/api-client';
import { IStory } from 'types';

const Stories = () => {
	const [stories, setStories] = useState([]);
	const [title, setTitle] = useState('');
	const [page, setPage] = useState(0);

	useEffect(() => {
		apiClient.stories
			.get(title)
			.then((response): void => setStories(response));
	}, [title]);

	return (
		<div>
			{stories.map((story: IStory, index: number) => {
				// Add story card
				return (
					<div key={`${story.id}-${story.createdOn}-${index}`}>
						{story.title}
						{story.description}
					</div>
				);
			})}
		</div>
	);
};

export default Stories;
