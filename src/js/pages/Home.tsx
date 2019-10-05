import EmailAggregationForm from 'components/EmailAggregationForm';
import React from 'react';
import logo from 'resources/images/logo-banner-768.png';
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

const Home = () => {
	return (
		<HomeContainer>
			<LogoBanner alt="Your Story Project Logo" src={logo} />
			<EmailAggregationForm />
		</HomeContainer>
	);
};

export default Home;
