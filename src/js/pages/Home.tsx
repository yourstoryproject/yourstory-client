import EmailAggregationForm from 'components/EmailAggregationForm';
import heroBg from 'resources/images/hero-bg.jpg';
import LazyHero from 'react-lazy-hero';
import InformationCard from 'components/InformationCard';
import logo from 'resources/images/logo-banner-black.png';
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
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
			<LazyHero
				imageSrc={heroBg.toString()}
				opacity={0.3}
				style={{
					minHeight: '100vh',
					width: '100%',
				}}
			>
				<LogoBanner alt="Your Story Project Logo" src={logo} />

				<InformationCard />

				<EmailAggregationForm />
			</LazyHero>
		</HomeContainer>
	);
};

export default Home;
