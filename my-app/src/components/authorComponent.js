import React, { Component } from 'react';

class Author extends Component {
  render() {
    const { athor } = this.props;
    return <h5>Author: {athor}</h5>;
  }
}

export default Author;