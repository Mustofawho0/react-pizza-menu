import React from 'react';
import { pizzaData } from '../content/data';

export default function Pizza() {
  return (
    <React.Fragment>
      <h2>Our Menu</h2>
      {pizzaData.map((p, i) => (
        <div key={i}>
          <h1>{p.name}</h1>
          <img src={p.photoName} alt={p.photoName} />
          <h4>{p.ingredients}</h4>
          <h2>{p.price}</h2>
          <h3>{p.soldOut}</h3>
        </div>
      ))}
    </React.Fragment>
  );
}
