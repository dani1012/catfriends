import React from 'react';
import CardList from './CardList';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {robots} from './robots';

Enzyme.configure({ adapter: new Adapter() });



it ('expects to render CardList component', () => {
	const wrapper = shallow(<CardList robots = {robots}/>);
	expect(toJson(wrapper)).toMatchSnapshot();
})




//run all the tests and see coverage of all files -using this command
// npm t -- --coverage --watchAll=false