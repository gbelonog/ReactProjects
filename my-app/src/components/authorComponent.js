import React, { Component } from 'react';

class Author extends Component {
  render() {
    const { athor, id } = this.props;
    return <h5 key={"athor" + id} >Author: {athor}</h5>;
  }
}

export default Author;