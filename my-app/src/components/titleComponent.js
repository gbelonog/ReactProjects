import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { title, isSpecial } = this.props;
  
    return (
      <h1>{title}{isSpecial && <div style={{ color: 'yellow' }}>It's a special news!!!!!!</div>} </h1>        
    );
  }
}

export default Title;