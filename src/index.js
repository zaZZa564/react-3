// imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// components
const Header = () => {
  return (
    <header>header</header>
  );
}

const Component = () => {
  return (
    <div>
      <Header />
      <p>some text</p>
    </div>
  );
}

// render
root.render(<Component />);