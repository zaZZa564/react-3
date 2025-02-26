// classes
// imports
import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/react-logo.png'

// class w methods
class Main extends React.Component {
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
        <Image file={logo}/>
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

// export
export default Main