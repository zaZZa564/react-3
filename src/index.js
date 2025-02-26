// imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// component
function component() {
  return (
  <div>
    <h1>header</h1>
  </div>
);
}

// render
root.render(<component/>);