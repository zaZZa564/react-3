import React from 'react';

class Image extends React.Component {
  render() {
    return(
      <img src={this.props.file}></img>
    );
  }
}

export default Image;