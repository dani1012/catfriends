import React from 'react';
import Card from './Card';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });



it ('expects to render Card component', () => {
	const wrapper = shallow(<Card/>);
	expect(toJson(wrapper)).toMatchSnapshot();
})


it ('expects to render Card component', () => {
	const wrapper = shallow(<Card/>);
	expect((wrapper).length).toEqual(1);
})