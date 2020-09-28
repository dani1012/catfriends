import React from 'react';
import MainPage from './MainPage';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
 


it('expects to render MainPage component', () => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	} 
	const wrapper = shallow(<MainPage {...mockProps}/>)
	expect(toJson(wrapper)).toMatchSnapshot();
});


it('filters robots', () => {

	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 2,
			name: 'Obi',
			email: 'obi@gmail.com'
		}],
		searchField: 'o',
		isPending: false
	} 

	const wrapper2 = shallow(<MainPage {...mockProps2}/>);
	expect(wrapper2.instance().filteredRobots()).toEqual([{
			id: 2,
			name: 'Obi',
			email: 'obi@gmail.com'
		}])
});


it('renders h1 instead of CardList while isPending equals true', () => {

	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true
	} 

	const wrapper3 = shallow(<MainPage {...mockProps3}/>); 
	expect(wrapper3.find('h1').length).toEqual(1);
    expect(wrapper3.find('CardList').exists()).toEqual(false);

	// expect(toJson(wrapper3)).toMatchSnapshot();
});



