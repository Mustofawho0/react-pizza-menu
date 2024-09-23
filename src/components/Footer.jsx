import React from 'react';
import './style.css';

export default function Footer() {
  const date = new Date().toTimeString().slice(0, 5);
  return <footer className='footer'>{date} We're currently open!</footer>;
}
