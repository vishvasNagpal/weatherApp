import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './HomePage';

configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  const wrapper = shallow(<HomePage />, { disableLifecycleMethods: true });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('it should render loading by default ', () => {
    expect(wrapper.contains(<div className='mainContainer'><div className="loadingContainer">Loading.....</div></div>)).toBe(true);
  });
});