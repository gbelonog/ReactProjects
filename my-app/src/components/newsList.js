import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NewsItem } from "./NewsItem";

export class NewsList extends Component {
  render() {
    const { news, onRemoveNewsItem } = this.props;
    console.log("news in list",news);
    return (
        <div>
          {news.map(el => (
            <div key={el.id}>
              <NewsItem
                onRemoveNewsItem={onRemoveNewsItem}
                newsItem={el}
              />
            </div>
          ))}
        </div>
    );
  }
}

export default NewsList;

NewsList.propTypes = {
  news: PropTypes.array,
  onRemoveNewsItem: PropTypes.func.isRequired,
};

NewsList.defaultProps = {
  news: [],
};