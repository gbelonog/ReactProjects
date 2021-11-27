import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Author extends Component {
  render() {
    const { athor} = this.props;
    return <h5>Author: {athor}</h5>;
  }
}

Author.propTypes = {
  athor: PropTypes.string,
}

Author.defaultProps = {
  athor: "",
};

export { Author };