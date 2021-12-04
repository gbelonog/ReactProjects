import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Author extends Component {
  render() {
    const { author} = this.props;
    return <h5>Author: { author}</h5>;
  }
}

Author.propTypes = {
  author: PropTypes.string,
}

Author.defaultProps = {
  author: "",
};

export { Author };