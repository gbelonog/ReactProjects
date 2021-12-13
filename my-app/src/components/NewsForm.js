import React, { Component } from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import { getBase64 } from "./utils";
import { HASHTAGS, AUTHORS } from "../data";

export class NewsForm extends Component {
  state = {
    title: '',
    shortDescription: '',
    text: '',
    photo: '',
    hashTags: [],
    author: '',
    error: null
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();
    const news = {
      id,
      ...this.state
    };
    this.props.onAddNewsItem(news);
  };

  handleChangeText = (e) => {
    const input = e.currentTarget;
    const { value, name } = input;
    this.setState({
      [name]: value,
    });
  };

  handleChangePhoto = (e) => {
    const file = e.currentTarget.files[0];
    getBase64(file, (base64) => {
      this.setState({
        photo: base64,
      });
    })
  };

  handleChangeAuthor = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      author: value,
    });
  };

  handleChangeHashTag = (e) => {
    const { value } = e.currentTarget;
    let newHashTag;

    if (this.state.hashTags.includes(value)) {
      newHashTag = this.state.hashTags.filter(el => el !== value);
    } else {
      newHashTag = [...this.state.hashTags, value];
    }

    this.setState({
      hashTags: newHashTag,
    });
  };

  render() {
    const {
        title,
        shortDescription,
        text,
        photo,
        hashTags,
        author,
        error
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>Title:<input value={title} onChange={this.handleChangeText} type="text" name="title" /></div>
            {error && (<span style={{ color: 'red' }}>{error}</span>)}
            <div>Short Description:<textarea value={shortDescription} onChange={this.handleChangeText} name="shortDescription"/></div>
            <div>Text:<textarea value={text} onChange={this.handleChangeText} name="text"/></div>
            <div>Photo:
                {photo.length > 0 && (
                <img style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'contain',
                }} src={photo} alt=""/>
                )}
                <input type="file" accept=".jpeg,.png" onChange={this.handleChangePhoto} />
            </div>
            <div>Author:
                {AUTHORS.map((e) => (
                    <label key={e}>
                    <input
                        checked={author === e}
                        type="radio"
                        value={e}
                        onChange={this.handleChangeAuthor}
                    /><span>{e}</span>
                    </label>
                ))}
            </div>
            <div>
                <span>HashTags:</span>
                {HASHTAGS.map((e) => (
                    <label key={e.value}>
                    <input
                        checked={hashTags.indexOf(e.value) !== -1}
                        type="checkbox"
                        value={e.value}
                        onChange={this.handleChangeHashTag}
                    /><span>{e.label}</span>
                    </label>
                ))}
            </div>
            <button type="submit">Create news</button>
        </form>
      </div>
    );
  }
}

export default NewsForm;

NewsForm.propTypes = {
  onAddNewsItem: PropTypes.func.isRequired,
};

NewsForm.defaultProps = {};