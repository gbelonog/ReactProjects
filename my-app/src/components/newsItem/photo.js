import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
  render() {
    const { photo, id } = this.props;
  
    return (
      <div>{photo && <img src={photo+id} alt=''></img>}</div>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.string,
  id: PropTypes.string,
}

Photo.defaultProps = {
  photo: "",
  id: "",
};

export { Photo };