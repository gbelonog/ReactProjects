import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewsItem } from './newsItem';
import news from '../news.json';

class NewsList extends Component {
  render() {
    const { specialFilter, linkPresenceFilter, photoPresenceFilter } = this.props;

    function filterNews(specialFilter, linkPresenceFilter, photoPresenceFilter, e){
      const filterMap =  {
        "000": <NewsItem newsItem={e}/>,
        "001": (e.photo)&&<NewsItem newsItem={e}/>,
        "010": (e.link)&&<NewsItem newsItem={e}/>,
        "011": (e.link)&&(e.photo)&&<NewsItem newsItem={e}/>,
        "100": (e.isSpecial)&&<NewsItem newsItem={e}/>,
        "101": (e.isSpecial)&&(e.photo)&&<NewsItem newsItem={e}/>,
        "110": (e.isSpecial)&&(e.link)&&<NewsItem newsItem={e}/>,
        "111": (e.isSpecial)&&(e.link)&&(e.photo)&&<NewsItem newsItem={e}/>,
      };
      const filterSet = (+specialFilter).toString()+(+linkPresenceFilter).toString()+(+photoPresenceFilter).toString();
      return filterMap[filterSet];
    }

    return (
      <div>
        { 
          news.map((e) => 
            <div key={e.id}>
              { filterNews(specialFilter, linkPresenceFilter, photoPresenceFilter, e) }
            </div>
          )
        }
      </div>
    );
  }
}

NewsList.propTypes = {
  specialFilter: PropTypes.bool,
  linkPresenceFilter: PropTypes.bool, 
  photoPresenceFilter: PropTypes.bool,
}

NewsList.defaultProps = {
  specialFilter: false,
  linkPresenceFilter: false, 
  photoPresenceFilter: false,
};

export { NewsList };