import React, { Component }from 'react';
import PropTypes from 'prop-types';

export class NewsItem extends Component{
  render() {
    const { newsItem, onRemoveNewsItem } = this.props;

    return (
      <div>
        <h1>{newsItem.title}</h1>
        <div><img style={{
          width: '300px',
          height: '200px',
          objectFit: 'cover',
        }} src={newsItem.photo} alt={newsItem.title}/></div>
        Short Description:
        <div dangerouslySetInnerHTML={{ __html: newsItem.shortDescription }} />
        Text:
        <div dangerouslySetInnerHTML={{ __html: newsItem.text }} />
        <div><b>HashTags: </b>{newsItem.hashTags.join(', ')}</div>
        <div><b>Author: </b>{newsItem.author}</div>
        <div><button onClick={() => onRemoveNewsItem(newsItem.id)}>Delete</button></div>
      </div>
    );
  }
}

export default NewsItem;

NewsItem.propTypes = {
  newsItem: PropTypes.object,
  onRemoveNewsItem: PropTypes.func.isRequired,
};

NewsItem.defaultProps = {};