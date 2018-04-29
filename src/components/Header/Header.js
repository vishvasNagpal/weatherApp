import React from 'react';
import Styles from './Header.css';

const Header = (props) => (
  <div className="header">
    <div className="city">
      <h1>{props.cityName}</h1>
    </div>
    <div className="currentData">
      <img alt='weather' src={`https://openweathermap.org/img/w/${props.selectedDay.data[0].weather[0].icon}.png`} />
      <div className="items">
        <div><span>Temp: </span>{props.selectedDay.data[0].main.temp}&#176; C</div>
        <div><span>Wind: </span>{props.selectedDay.data[0].wind.speed} KM/H</div>
      </div>

    </div>
  </div>
);

export default Header;