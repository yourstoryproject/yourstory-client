import PrivacyPolicy from '../PrivacyPolicy';
import React from 'react';
import { shallow } from 'enzyme';

describe('PrivacyPolicy', () => {
	it('should render', () => {
		const component = shallow(<PrivacyPolicy />);
		expect(component).toMatchSnapshot();
	});
});
