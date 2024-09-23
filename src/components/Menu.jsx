import React from 'react';
import './style.css';
import Pizza from './Pizza';
// import { pizzaData } from '../content/data';

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        pizzaName='Pizza Kraby Patty'
        ingredient='Batu Koral'
        price={10}
        image='/pizzas/funghi.jpg'
      />
      <Pizza
        pizzaName='Pizza Kraby Patty ver 2'
        ingredient='Batu Koral ver 2'
        price={20}
        image='/pizzas/funghi.jpg'
      />
    </main>
  );
}
