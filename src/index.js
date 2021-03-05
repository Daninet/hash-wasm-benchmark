import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('app');

function render() {
  ReactDOM.render(<App />, container);
}

render();
