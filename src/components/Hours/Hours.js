import React from 'react';
import Style from './Hours.css';

const Hours = (props) => (
  <ul className="hours">
    {
      props.selectedDay.data.map((item) =>{
        const date = new Date(item.dt * 1000);
        const time = `${date.getHours()}:${date.getMinutes()}`;
        return(
          <li className="card" key={item.dt}>
            <div className="cardHead">
              <div>{time}</div>
              <img alt='weather' src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
            </div>
            <div className="cardContent">
              <div className="contentRow"><label>Temp: </label><span>{item.main.temp }&#176; C</span></div>
              <div className="contentRow"><label>Max: </label><span>{item.main.temp_max }&#176; C</span></div>
              <div className="contentRow"><label>Min: </label><span>{item.main.temp_min }&#176; C</span></div>
              <div className="contentRow"><label>Wind: </label><span>{item.wind.speed } KM/H</span></div>
            </div>
          </li>
        );
      })
    }
  </ul>
);

export default Hours;