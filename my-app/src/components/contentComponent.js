import React, { Component } from 'react';

class Content extends Component {
  componentDidMount() {
    console.log('class component did mount');
  }
    cleanContent(content){
    return content?.split('<p>').map(e=><p>{e.replace('</p>','')}</p>);
    }
  render() {
    const content = this.props.content;
    return (
      <div>{this.cleanContent(content)}</div>
    );
  }
}

export default Content;
