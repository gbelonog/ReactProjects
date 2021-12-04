import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewsFilters.css'

class NewsFilters extends Component {
  render() {
    const { specialFilterHandler, linkPresenceHandler, photoPresenceHandler, searchTextHandler } = this.props;

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
        <label className="Filter">
          Search text
          <input type="text" onChange={event =>{searchTextHandler(event.target.value)}} ></input>
        </label>
      </div>
    );
  }
}

NewsFilters.propTypes = {
  specialFilterHandler: PropTypes.func.isRequired,
  linkPresenceHandler: PropTypes.func.isRequired, 
  photoPresenceHandler: PropTypes.func.isRequired,
  searchTextHandler: PropTypes.func.isRequired,
}

NewsFilters.defaultProps = {
  specialFilterHandler: ()=>{},
  linkPresenceHandler: ()=>{}, 
  photoPresenceHandler: ()=>{},
  searchTextHandler: ()=>{},
};

export { NewsFilters };