import EmailAggregationForm from '../EmailAggregationForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('EmailAggregationForm', () => {
	it('should render', () => {
		const component = shallow(<EmailAggregationForm />);
		expect(component).toMatchSnapshot();
	});
});
