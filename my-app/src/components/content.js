import React, { Component } from 'react';

class Content extends Component {
  componentDidMount() {
    console.log('class component did mount');
  }
  render() {
    const { content, id } = this.props;
    return (
      <div key={"content"+id} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }
}
export default Content;
