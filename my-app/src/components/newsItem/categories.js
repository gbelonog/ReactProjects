import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { categories, id} = this.props;
    return (
      <div key={"categories"+id}>{categories.map((e, i) => <li key={e.name+i}>{e.name}</li>)}</div>
    );
  }
}

Categories.defaultProps = {
  categories: [],
  id: "",
};

Categories.propTypes = {
  categories: PropTypes.array,
  id: PropTypes.string,
}
export { Categories };