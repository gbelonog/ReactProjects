import React, { Component } from 'react';

class Link extends Component {
  render() {
    const { link, id } = this.props;
    return (
      <div key={"link"+id}>{link && <a href={link}>{link}</a>}</div>
    );
  }
}

export default Link;