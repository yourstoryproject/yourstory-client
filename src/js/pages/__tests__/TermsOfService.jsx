import TermsOfService from '../TermsOfService';
import React from 'react';
import { shallow } from 'enzyme';

describe('TermsOfService', () => {
	it('should render', () => {
		const component = shallow(<TermsOfService />);
		expect(component).toMatchSnapshot();
	});
});
