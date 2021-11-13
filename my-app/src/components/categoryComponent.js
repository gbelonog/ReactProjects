import React, { Component } from 'react';

class Category extends Component {
  render() {
    const category = this.props.category;
    return (
      <div>{category.map(e => <li>{e.name}</li>)}</div>
    );
  }
}

export default Category;