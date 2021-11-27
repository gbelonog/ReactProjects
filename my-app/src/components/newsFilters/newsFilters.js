import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newsFilters.css'

class NewsFilters extends Component {
  render() {
    const { specialFilterHandler, linkPresenceHandler, photoPresenceHandler } = this.props;

    return(
      <div className="Filters">Filters:
        <label className="Filter">
          <input  type="checkbox" onClick={ () => {specialFilterHandler(true)}} ></input>
          Special
        </label>
        <label className="Filter">
          <input type="checkbox" onClick={ () => {linkPresenceHandler(true)}} ></input>
          Link
        </label>
        <label className="Filter">
          <input type="checkbox" onClick={ () => {photoPresenceHandler(true)}} ></input>
          Photo
        </label>
      </div>
    );
  }
}

NewsFilters.propTypes = {
  specialFilterHandler: PropTypes.func,
  linkPresenceHandler: PropTypes.func, 
  photoPresenceHandler: PropTypes.func,
}

NewsFilters.defaultProps = {
  specialFilterHandler: ()=>{},
  linkPresenceHandler: ()=>{}, 
  photoPresenceHandler: ()=>{},
};

export { NewsFilters };