import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  render() {
    const { link } = this.props;
    return (
      <div>{link && <a href={link}>{link}</a>}</div>
    );
  }
}

Link.propTypes = {
  link: PropTypes.string,
}

Link.defaultProps = {
  link: "",
};

export { Link };