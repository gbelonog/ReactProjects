import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  componentDidMount() {
    console.log('class component did mount');
  }
  render() {
    const { content } = this.props;
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    );
  }
}

Content.propTypes = {
  content: PropTypes.string,
}

Content.defaultProps = {
  content: "",
};

export { Content };
