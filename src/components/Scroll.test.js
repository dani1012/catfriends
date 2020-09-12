import React from 'react';
import Scroll from './Scroll';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });



it ('expects to render Scroll component', () => {
	const wrapper = shallow(<Scroll/>);
	expect(toJson(wrapper)).toMatchSnapshot();
})