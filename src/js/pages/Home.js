import React from 'react';
import Stories from '../components/Stories';

export default class Home extends React.Component {
	render() {
		return (
			<div className="home-container">
				<Stories />
			</div>
		);
	}
}
