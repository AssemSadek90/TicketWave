import React from 'react';
//import Enzyme, { shallow } from 'enzyme';
import Upper from '../upper part';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Enzyme.configure({ adapter: new Adapter() });

describe.skip('Upper component', () => {
  const event = {
    Name: 'Event Name',
    created: '2022-03-23',
    EventState: 'online',
    price: '$50',
    Availability: 'Limited',
  };

  it('renders event name correctly', () => {
    //const wrapper = shallow(<Upper {...event} />);
    //expect(wrapper.find('.eds-text-bl').text()).toEqual('Event Name');
  });

  it('renders event date correctly', () => {
    //const wrapper = shallow(<Upper {...event} />);
    //expect(wrapper.find('.event-preview-card__date').text()).toEqual(
    //   '2022-03-23'
    // );
  });

  it('renders event location correctly', () => {
    //const wrapper = shallow(<Upper {...event} />);
    //expect(wrapper.find('.event-preview-card__venue').text()).toEqual('online');
  });

  it('renders event price correctly', () => {
    //const wrapper = shallow(<Upper {...event} />);
    //expect(wrapper.find('.eds-vector-image i').first().text()).toEqual('$50');
  });

  it('renders event availability correctly', () => {
    //const wrapper = shallow(<Upper {...event} />);
    // expect(wrapper.find('.eds-vector-image i').last().text()).toEqual(
    //   'Limited'
    // );
  });
});
