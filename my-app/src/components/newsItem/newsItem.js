import React, { Component } from 'react';
//import { Content, Categories, Link, Photo, Title, Author, DateCreated } from './newsItem';
import { Content } from './content';
import { Categories } from './categories';
import { Link } from './link';
import { Photo } from './photo';
import { Title } from './title';
import { Author } from './author';
import { DateCreated } from './dateCreated';
import PropTypes from 'prop-types';

class NewsItem extends Component {
  render() {
    const { newsItem, specialFilter } = this.props;
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