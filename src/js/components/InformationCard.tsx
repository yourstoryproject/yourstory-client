import React from 'react';
import styled from 'styled-components';

const InformationContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 4px;
	height: auto;
	max-width: 300px;
	padding: 24px;
	margin: auto;
`;

const InformationCard: React.FunctionComponent = () => {
	return (
		<InformationContainer>
			<p>
				In this project we will explore several stories about love,
				loss, success, and failure. These stories we will explore
				intersecting identities and the many strugles we may share.
			</p>
		</InformationContainer>
	);
};

export default InformationCard;
