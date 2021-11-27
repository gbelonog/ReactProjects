import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, isSpecial } = this.props;
  
    return (
      <h1>{title}{isSpecial && <div style={{ color: 'yellow' }}>It's a special news!!!!!!</div>} </h1>        
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  isSpecial: PropTypes.bool,
}

Title.defaultProps = {
  title: "",
  isSpecial: false,
};


export { Title };