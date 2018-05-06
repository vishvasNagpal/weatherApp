import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hours from './Hours';
import { selectedDay } from '../../dummy';

configure({ adapter: new Adapter() });

describe('<Hours />', () => {
  const wrapper = shallow(<Hours selectedDay={selectedDay} />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render images equal to the length of items in it', () => {
    const image = wrapper.find('img');
    expect(image).toHaveLength(selectedDay.data.length);
  });
});