import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './HomePage';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { dummyResponse } from '../../dummy'

configure({adapter: new Adapter()});

describe('<HomePage />', () => {
  it('should be defined', () => {
    const wrapper = shallow(<HomePage/>, {disableLifecycleMethods: true});
    expect(wrapper).toBeDefined();
  });

  it('it should render loading by default ', () => {
    const wrapper = shallow(<HomePage/>, {disableLifecycleMethods: true});
    expect(wrapper.contains(<div className='mainContainer'>
      <div className="loadingContainer">Loading.....</div>
    </div>)).toBe(true);
  });

  it('should render the home after getting data', async (done) => {
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=delhi&mode=json&type=accurate&units=metric&appid=f8bf055299ecf93373c28105f784c9ae';
    const mock = new MockAdapter(axios);
    mock.onGet(url).reply(200, dummyResponse);

    const component = mount(<HomePage/>);

    setImmediate(() => {
      try {
        expect(component.state('isLoading')).toEqual(false);
      } catch (e) {
        done.fail(e);
      }
      done();
    });
  });
})
;