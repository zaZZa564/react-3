// imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// components
class Header extends React.Component {
  render() {
    return(
      <header>{this.props.title}</header>
    );
  }
}

// class w methods
class Component extends React.Component {
  render() {
    return (
      <div>
        <Header title='page header 1'/>
        <Header title='page header 2'/>
        <Header title='page header 3'/>
        <h1>h1 text</h1>
        <input placeholder='type here'
          onClick={this.clickLog}
          onMouseEnter={this.overLog}
        ></input>
      </div>
    );
  }

  clickLog() {
    console.log('clicked');
  }
  overLog() {
    console.log('mouse over');
  }
}

// render
root.render(<Component />);