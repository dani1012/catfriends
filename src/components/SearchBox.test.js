import React from 'react';
import SearchBox from './SearchBox';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });



it ('expects to render Header component', () => {
	const wrapper = shallow(<SearchBox/>);
	expect(toJson(wrapper)).toMatchSnapshot();
})