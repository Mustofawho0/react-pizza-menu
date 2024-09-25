import React from 'react';
import './style.css';

export default function Footer() {
  const [time, setTime] = React.useState(new Date().toTimeString().slice(0, 8));
  const hour = new Date().getHours();
  const open = 9;
  const close = 22;
  const isOpen = hour >= open && hour <= close;

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 8));
    }, 1000);
  }, []);

  return (
    <footer className='footer'>
      <span>{time}</span>
      {isOpen ? (
        <>
          <p>
            We,re currently open, come visit us or order online. Thanks you!
          </p>
          <button className='btn'>Order now!</button>
        </>
      ) : (
        <p>We,re currently close, visit us in 09:00. Thanks you!</p>
      )}
    </footer>
  );
}
