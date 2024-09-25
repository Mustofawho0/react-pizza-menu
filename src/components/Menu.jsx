import React from 'react';
import './style.css';
import Pizza from './Pizza';
import { pizzaData } from '../content/data';

export default function Menu() {
  const pizza = pizzaData.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizza > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>Out of Stock!</p>
      )}
    </main>
  );
}
