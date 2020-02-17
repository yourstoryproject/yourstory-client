import InformationCard from '../InformationCard';
import React from 'react';
import { render } from '@testing-library/react';

describe('InformationCard', () => {
	it('should render', () => {
		const component = render(<InformationCard />);
		expect(component).toMatchSnapshot();
	});
});
