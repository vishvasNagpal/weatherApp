import React, { Component } from 'react';
import Style from './HomePage.css';
import { Header, Days, Hours } from '../';
import API from '../../services';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      selectedDay: [],
      city: {},
      error: false,
      errorText: 'Oops! something went wrong',
    }
  }
  componentDidMount() {
    API.weatherApi.getFiveDayWeather({city: 'delhi'}).then((res) => {
      if (res.status === 200) {
        this.setState({
          isLoading: false,
          city: res.data.city,
        });
        const list = res.data.list;
        const groupedData = [];
        list.forEach((item) => {
          const day = new Date(item.dt * 1000).getDay();
          const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];
          const existedItem = groupedData.findIndex((groupedItem) => (groupedItem.day === dayName));
          if (existedItem < 0) {
            groupedData.push({ day: dayName, data: [item] });
          } else {
            groupedData[existedItem].data.push(item);
          }
        });
        this.setState({
          data: groupedData,
          selectedDay: groupedData[0],
        });
      } else {
        this.setState({
          isLoading: false,
          error: true,
        });
      }

    });
  }

  onDayClick(item) {
    this.setState({
      selectedDay: item,
      selectedTime: item.data[0],
    });
  }

  render() {
    if (this.state.isLoading) {
      return (<div className='mainContainer'><div className="loadingContainer">Loading.....</div></div>);
    }
    if (this.state.error) {
      return (<div className='mainContainer'><div className="errorContainer">{this.state.errorText}</div></div>);
    }
    const { city, selectedDay, data } = this.state;
    return (
      <div className='mainContainer'>
        {
          data.length ?
            <div>
              <Header selectedDay={selectedDay} cityName={city.name} />
              <Days selectedDayName={selectedDay.day} data={data} onDayClick={(item) => this.onDayClick(item)} />
              <Hours selectedDay={selectedDay} />
            </div> :
            null
        }
      </div>
    );
  }
}

export default HomePage;
