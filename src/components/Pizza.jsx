import React from 'react';
import './style.css';

export default function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.image} alt={props.pizzaName} />
      <div>
        <h3>{props.pizzaName}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
