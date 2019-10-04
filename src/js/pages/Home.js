import EmailAggregationForm from '../components/EmailAggregationForm';
import logo from '../../resources/images/logo-banner-768.png';
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
`;

const LogoBanner = styled.img`
	margin: 24px auto;
	width: 90%;

	@media (min-width: 425px) {
		width: 70%;
	}

	@media (min-width: 768px) {
		width: 60%;
	}
`;

export default class Home extends React.Component {
	render() {
		return (
			<HomeContainer>
				<LogoBanner alt="Your Story Project Logo" src={logo} />
				<EmailAggregationForm />
			</HomeContainer>
		);
	}
}
