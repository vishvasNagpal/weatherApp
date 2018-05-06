import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Days from './Days';
import { sortedData } from '../../dummy';

configure({ adapter: new Adapter() });

describe('<Days />', () => {

  const dummyProps = {
    data: sortedData,
    selectedDayName: 'sun',
    onDayClick: jest.fn(),
  };

  const wrapper = shallow(<Days {...dummyProps} />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('data should not be an empty array', () => {
    const component = mount(<Days {...dummyProps} />);
    expect(!!component.props().data.length).toBe(true);
  });

  it('should call a function when click on an item', () => {
    const li = wrapper.find('li');
    li.forEach((item) => {
      item.props().onClick();
      expect(dummyProps.onDayClick).toHaveBeenCalled();
    })
  });
});