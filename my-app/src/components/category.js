import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { category, id } = this.props;
    return (
      <div key={"category"+id}>{category.map((e, i) => <li key={e.name+i}>{e.name}</li>)}</div>
    );
  }
}

export default Category;