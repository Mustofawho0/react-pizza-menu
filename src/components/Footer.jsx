import React from 'react';

export default function Footer() {
  const hours = new Date().getHours();
  const open = 9;
  const close = 22;
  const isOpen = hours >= open && hours <= close;
  console.log(isOpen);
  return <footer>We're currently open!</footer>;
}
