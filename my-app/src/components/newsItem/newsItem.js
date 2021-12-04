import React, { Component } from 'react';
//import { Content, Categories, Link, Photo, Title, Author, DateCreated } from './newsItem';
import { Content } from './Content';
import { Categories } from './Categories';
import { Link } from './Link';
import { Photo } from './Photo';
import { Title } from './Title';
import { Author } from './Author';
import { DateCreated } from './DateCreated';
import PropTypes from 'prop-types';

class NewsItem extends Component {
  render() {
    const { newsItem } = this.props;
    return (
    <>
        <Title title = {newsItem.title} isSpecial = {newsItem.isSpecial}/>
        <Link link = {newsItem.link}/>
        <Content content = {newsItem.content}/>
        <Categories categories = {newsItem.categories} id = {newsItem.id}/>
        <Photo photo = {newsItem.photo} id = {newsItem.id}/>
        <Author author = {newsItem.author}/>
        <DateCreated dateCreated = {newsItem.dateCreated}/>
    </>
    );
  }
}

NewsItem.NewsItem = {
  newsItem: PropTypes.node,
}

NewsItem.defaultProps = {
  newsItem: {},
};

export { NewsItem };