import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewsFilters.css'
import news from '../../news.json';

class NewsFilters extends Component {
  render() {
    const { specialFilterHandler, linkPresenceHandler, photoPresenceHandler, searchTextHandler, categoriesListHandler } = this.props;
    function getCategoriesList(){
      let allCategories = [];
      let allCategoriesNames = [];
      let cleanedAllCategoriesNames = [];
      //get all categories from all news as array [{id: 123, name:abc}, ...]
      news.map((e) => {
        allCategories = allCategories.concat(e.categories);
      });
      //get all names of all categories
      allCategories.map(e => {
        allCategoriesNames = allCategoriesNames.concat(e.name);
      });
      //remove duplicates
      allCategoriesNames.map(e => {
        if(cleanedAllCategoriesNames.indexOf(e) === -1){
          cleanedAllCategoriesNames.push(e)
        };
      });
      return  <>
        {
          cleanedAllCategoriesNames.map((e, i) => {
            return <label  key={i} className="Categories">
              <input type="checkbox" onChange={() => categoriesListHandler(e)}></input>
            {e}</label>
          })
        }
      </>
    }
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
        <div> Categories: {getCategoriesList()}</div>  
      </div>
    );
  }
}

NewsFilters.propTypes = {
  specialFilterHandler: PropTypes.func.isRequired,
  linkPresenceHandler: PropTypes.func.isRequired, 
  photoPresenceHandler: PropTypes.func.isRequired,
  searchTextHandler: PropTypes.func.isRequired,
  categoriesListHandler: PropTypes.func.isRequired,
}

NewsFilters.defaultProps = {
  specialFilterHandler: ()=>{},
  linkPresenceHandler: ()=>{}, 
  photoPresenceHandler: ()=>{},
  searchTextHandler: ()=>{},
  categoriesListHandler: ()=>{},
};

export { NewsFilters };