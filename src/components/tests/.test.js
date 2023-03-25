import React from 'react';
import Enzyme, {shallow } from 'enzyme';
import Footer from '../Footer';


import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('Footer component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeDefined();
  });

  it('contains a submit button', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('button').prop('type')).toEqual('submit');
    expect(wrapper.find('button').text()).toEqual('Publish');
  });

  it('has a form with the correct action URL', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('form').prop('action')).toEqual('https://www.nextPage.com');
  });
});
