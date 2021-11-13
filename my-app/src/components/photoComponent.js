import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const { photo, id } = this.props;
  
    return (
      <div>{photo && <img src={photo+id} alt=''></img>}</div>
    );
  }
}

export default Photo;