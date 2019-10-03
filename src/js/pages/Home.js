import EmailAggregationForm from '../components/EmailAggregationForm';
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
	padding: 16px;
`;

export default class Home extends React.Component {
	render() {
		return (
			<HomeContainer>
				<EmailAggregationForm />
			</HomeContainer>
		);
	}
}
