import React, { Component } from 'react';

class Content extends Component {
  componentDidMount() {
    console.log('class component did mount');
  }
    cleanContent(content, id){
    return content?.split('<p>').map((e,i)=><p key={i+id}>{e.replace('</p>','')}</p>);
    }
  render() {
    const { content, id } = this.props;
    return (
      <div key={"content"+id}>{this.cleanContent(content, id)}</div>
    );
  }
}

export default Content;
