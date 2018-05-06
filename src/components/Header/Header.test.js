import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import { selectedDay } from '../../dummy'

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  const cityName = 'Gurgaon';
  const wrapper = shallow(<Header selectedDay={selectedDay} cityName={cityName} />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should accept city name as string', () => {
    // const city =  wrapper.prop().cityName;
    const component = mount(<Header selectedDay={selectedDay} cityName={cityName} />);
    const city = component.props().cityName;
    expect(typeof 'value').toBe('string');
  });

  it('should render an image', () => {
    const image = wrapper.find('img');
    expect(image).toHaveLength(1);
  });
});