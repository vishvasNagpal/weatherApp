import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {

  const selectedDay = {
    "day":"Sun",
    "data":[
      {
        "dt":1524992400,
        "main":{
          "temp":41.88,
          "temp_min":40.46,
          "temp_max":41.88,
          "pressure":985.73,
          "sea_level":1013.57,
          "grnd_level":985.73,
          "humidity":26,
          "temp_kf":1.42
        },
        "weather":[
          {
            "id":500,
            "main":"Rain",
            "description":"light rain",
            "icon":"10d"
          }
        ],
        "clouds":{
          "all":36
        },
        "wind":{
          "speed":1.36,
          "deg":302
        },
        "rain":{
          "3h":0.0042
        },
        "sys":{
          "pod":"d"
        },
        "dt_txt":"2018-04-29 09:00:00"
      },
      {
        "dt":1525003200,
        "main":{
          "temp":32.63,
          "temp_min":31.57,
          "temp_max":32.63,
          "pressure":985.56,
          "sea_level":1013.17,
          "grnd_level":985.56,
          "humidity":36,
          "temp_kf":1.07
        },
        "weather":[
          {
            "id":500,
            "main":"Rain",
            "description":"light rain",
            "icon":"10d"
          }
        ],
        "clouds":{
          "all":32
        },
        "wind":{
          "speed":5.25,
          "deg":17.5042
        },
        "rain":{
          "3h":0.12935
        },
        "sys":{
          "pod":"d"
        },
        "dt_txt":"2018-04-29 12:00:00"
      },
      {
        "dt":1525014000,
        "main":{
          "temp":25.03,
          "temp_min":24.32,
          "temp_max":25.03,
          "pressure":988.15,
          "sea_level":1016.17,
          "grnd_level":988.15,
          "humidity":67,
          "temp_kf":0.71
        },
        "weather":[
          {
            "id":500,
            "main":"Rain",
            "description":"light rain",
            "icon":"10n"
          }
        ],
        "clouds":{
          "all":80
        },
        "wind":{
          "speed":3.41,
          "deg":6.0004
        },
        "rain":{
          "3h":0.27151
        },
        "sys":{
          "pod":"n"
        },
        "dt_txt":"2018-04-29 15:00:00"
      },
      {
        "dt":1525024800,
        "main":{
          "temp":25.21,
          "temp_min":24.85,
          "temp_max":25.21,
          "pressure":986.47,
          "sea_level":1014.89,
          "grnd_level":986.47,
          "humidity":52,
          "temp_kf":0.36
        },
        "weather":[
          {
            "id":500,
            "main":"Rain",
            "description":"light rain",
            "icon":"10n"
          }
        ],
        "clouds":{
          "all":68
        },
        "wind":{
          "speed":1.67,
          "deg":97.5023
        },
        "rain":{
          "3h":0.06063
        },
        "sys":{
          "pod":"n"
        },
        "dt_txt":"2018-04-29 18:00:00"
      }
    ]
  };
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