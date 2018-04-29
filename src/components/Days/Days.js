import React from 'react';
import Style from './Days.css';

const Days = (props) => (
  <ul className="days">
    {
      props.data.map((item, index) =>(
        <li
          onClick={() => props.onDayClick(item)}
          key={`${item.day}${index}`}
          className={item.day === props.selectedDayName ? 'selected' : ''}
        >
          {item.day}
        </li>
      ))
    }
  </ul>
);

export default Days;