import React from 'react';
import imagen from './img/dev.jpg';
import './Final.css';

function Final() {
  return (
    <div className="Final">
      <header className="Final-header">
        <img src={imagen} className="Final-logo" alt="logo" />
        <p>
          Edit <code>src/Final.js</code> and save to reload.
        </p>
        <a
          className="Final-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Final;