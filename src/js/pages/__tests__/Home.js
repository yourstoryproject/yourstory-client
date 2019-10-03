import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';

describe('Home', () => {
	it('should render', () => {
		const component = shallow(<Home />);
		expect(component).toMatchSnapshot();
	});
});
