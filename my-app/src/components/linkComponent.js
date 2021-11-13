import React, { Component } from 'react';

class Link extends Component {
  render() {
    const link = this.props.link;
    return (
      <div>{link && <a href={link}>{link}</a>}</div>
    );
  }
}

export default Link;