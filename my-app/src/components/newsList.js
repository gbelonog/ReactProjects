import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewsItem } from './NewsItem';
import news from '../news.json';

class NewsList extends Component {
  render() {
    const { specialFilter, linkPresenceFilter, photoPresenceFilter, searchTextFilterValue } = this.props;

    function filterNews(specialFilter, linkPresenceFilter, photoPresenceFilter, searchTextFilterValue, e){
      const searchInAthor = (e.author).toLowerCase().indexOf(searchTextFilterValue.toLowerCase())!==-1;
      const searchСontent = (e.content).toLowerCase().indexOf(searchTextFilterValue.toLowerCase())!==-1;
      const searchInTitle = (e.title).toLowerCase().indexOf(searchTextFilterValue.toLowerCase())!==-1;
      const searchText = searchInAthor || searchСontent || searchInTitle;
      const filterMap =  {
        "000": searchText&&<NewsItem newsItem={e}/>,
        "001": searchText&&(e.photo)&&<NewsItem newsItem={e}/>,
        "010": searchText&&(e.link)&&<NewsItem newsItem={e}/>,
        "011": searchText&&(e.link)&&(e.photo)&&<NewsItem newsItem={e}/>,
        "100": searchText&&(e.isSpecial)&&<NewsItem newsItem={e}/>,
        "101": searchText&&(e.isSpecial)&&(e.photo)&&<NewsItem newsItem={e}/>,
        "110": searchText&&(e.isSpecial)&&(e.link)&&<NewsItem newsItem={e}/>,
        "111": searchText&&(e.isSpecial)&&(e.link)&&(e.photo)&&<NewsItem newsItem={e}/>,
      };
      const filterSet = (+specialFilter).toString()+(+linkPresenceFilter).toString()+(+photoPresenceFilter).toString();
      
      if (filterMap[filterSet]) return <div key={e.id}>{filterMap[filterSet]}</div>
    }

    return (
      <div>
        { news.map((e) => filterNews(specialFilter, linkPresenceFilter, photoPresenceFilter, searchTextFilterValue, e))}
      </div>
    );
  }
}

NewsList.propTypes = {
  specialFilter: PropTypes.bool,
  linkPresenceFilter: PropTypes.bool, 
  photoPresenceFilter: PropTypes.bool,
  searchTextFilterValue: PropTypes.string,
}

NewsList.defaultProps = {
  specialFilter: false,
  linkPresenceFilter: false, 
  photoPresenceFilter: false,
  searchTextFilterValue: '',
};

export { NewsList };