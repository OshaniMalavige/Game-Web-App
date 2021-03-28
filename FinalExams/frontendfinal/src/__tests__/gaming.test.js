import React from 'react';
import {shallow} from 'enzyme';
import AddNewGame from "../Components/Gaming/AddNewGame";

describe('AddNewGame Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<AddNewGame/>).find('form.newGaming').exists()).toBe(true)
    })
})
it('renders a name input', () => {
    expect(shallow(<AddNewGame />).find('#name').length).toEqual(1)
})

describe('Name input', () => {

    it('should respond to change event and change the state of the AddNewGame Component', () => {

        const wrapper = shallow(<AddNewGame />);
        wrapper.find('#name').simulate('change', {target: {name: 'name', value: 'Ludo'}});

        expect(wrapper.state('name')).toEqual('Ludo');
    })
})

