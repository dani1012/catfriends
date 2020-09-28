import React from 'react';
import CounterButton from './CounterButton';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });


it('expect to render CounterButton component', () => {
    const wrapper = shallow(<CounterButton/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});


it('updateCount: should increment state.count by 1', () => {
    const wrapper = shallow(<CounterButton/>);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    instance.updateCount();
    expect(instance.state.count).toBe(1);
});


it('clicks the button', () => {
    const wrapper = shallow(<CounterButton/>);
    wrapper.find('#counter').simulate('click');
    wrapper.find('#counter').simulate('click');
    expect(wrapper.state('count')).toEqual(2);
    expect(wrapper.props().children).toEqual(["Count:", 2]);
});


it('updates component only when state changes', () => {
    const wrapper = shallow(<CounterButton/>);
    const nextState = {count :0}
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(nextState)
    expect(shouldUpdate).toBe(false) 
})
