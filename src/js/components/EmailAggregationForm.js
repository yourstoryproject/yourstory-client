import React from 'react';
import styled from 'styled-components';

const NAME = 'entry.1139116789';

const FormModule = styled.form`
	display: flex;
	flex-direction: column;
	padding: 8px;

	input {
		margin: 4px auto;
		min-width: 90%;
		padding: 8px;
	}

	button {
		background-color: #fd0000;
		border-radius: 4px;
		color: #fff;
		font-weight: 600;
		margin: 4px auto;
		min-width: 40%;
		padding: 8px;
		text-transform: uppercase;
		transition: box-shadow 0.5s ease;
		letter-spacing: 0.1em;
	}

	button:hover,
	button:focus {
		box-shadow: 0 0.5em 0.5em -0.4em #000;
		cursor: pointer;
		transform: translateY(-0.25em);
	}

	@media (min-width: 768px) {
		flex-direction: row;
		margin: auto;
		width: 90%;

		input {
			flex-grow: 1;
			margin: 4px;
			min-width: unset;
		}

		button {
			margin: 4px;
			min-width: unset;
		}
	}
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Label = styled.h3`
	margin: 12px;
	text-align: center;
`;

const EmailAggregationForm = () => {
	return (
		<React.Fragment>
			<Label>Stay up to date with our story.</Label>
			<FormModule
				action="https://docs.google.com/forms/d/e/1FAIpQLSeR36w3vsYw1-9bh6QeYZlNKTCHx-ad7Xvs0o4UfknO6bHA9Q/formResponse"
				method="post"
			>
				<FormGroup>
					<input name={NAME} placeholder="First Name" type="text" />

					<input
						name="emailAddress"
						placeholder="Email Address"
						type="email"
					/>
				</FormGroup>

				<button type="submit">Sign up</button>
			</FormModule>
		</React.Fragment>
	);
};

export default EmailAggregationForm;
