import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewsItem } from './NewsItem';
import news from '../news.json';

class NewsList extends Component {
  render() {
    const { 
      specialFilter, 
      linkPresenceFilter, 
      photoPresenceFilter, 
      searchTextFilterValue,
      categoriesList 
    } = this.props;

    function filterNews(
      specialFilter, 
      linkPresenceFilter, 
      photoPresenceFilter, 
      searchTextFilterValue, 
      categoriesList, 
      e){
        const searchInAthor = (e.author).toLowerCase().indexOf(searchTextFilterValue.toLowerCase())!==-1;
        const searchСontent = (e.content).toLowerCase().indexOf(searchTextFilterValue.toLowerCase())!==-1;
        const searchInTitle = (e.title).toLowerCase().indexOf(searchTextFilterValue.toLowerCase())!==-1;
        const searchText = searchInAthor || searchСontent || searchInTitle;

        let allCategories = [];
          e.categories.map((e) => {
            allCategories = allCategories.concat(e.name);
          });
        
        let result = 0;
        let category = true;
        if(categoriesList.length > 0) {
          categoriesList.map(e => {
          result= result +(allCategories.indexOf(e) !== -1)
        });
        category = !!result;
    }

    const filterMap =  {
      "000": category&&searchText&&<NewsItem newsItem={e}/>,
      "001": category&&searchText&&(e.photo)&&<NewsItem newsItem={e}/>,
      "010": category&&searchText&&(e.link)&&<NewsItem newsItem={e}/>,
      "011": category&&searchText&&(e.link)&&(e.photo)&&<NewsItem newsItem={e}/>,
      "100": category&&searchText&&(e.isSpecial)&&<NewsItem newsItem={e}/>,
      "101": category&&searchText&&(e.isSpecial)&&(e.photo)&&<NewsItem newsItem={e}/>,
      "110": category&&searchText&&(e.isSpecial)&&(e.link)&&<NewsItem newsItem={e}/>,
      "111": category&&searchText&&(e.isSpecial)&&(e.link)&&(e.photo)&&<NewsItem newsItem={e}/>,
    };
    const filterSet = (+specialFilter).toString()+(+linkPresenceFilter).toString()+(+photoPresenceFilter).toString();
    
    if (filterMap[filterSet]) return <div key={e.id}>{filterMap[filterSet]}</div>
    }

    return (
      <div>
        { news.map((e) => filterNews(
          specialFilter, 
          linkPresenceFilter, 
          photoPresenceFilter, 
          searchTextFilterValue, 
          categoriesList,
          e))}
      </div>
    );
  }
}

NewsList.propTypes = {
  specialFilter: PropTypes.bool,
  linkPresenceFilter: PropTypes.bool, 
  photoPresenceFilter: PropTypes.bool,
  searchTextFilterValue: PropTypes.string,
  categoriesList: PropTypes.arrayOf(PropTypes.string),
}

NewsList.defaultProps = {
  specialFilter: false,
  linkPresenceFilter: false, 
  photoPresenceFilter: false,
  searchTextFilterValue: '',
  categoriesList: [],
};

export { NewsList };