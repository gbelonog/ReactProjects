import React, { Component } from 'react';
//import propTypes from 'prop-types';

export class Content extends Component {
//   state = {
//     value: new Date(),
//   };

//   tick() {
//     this.setState({
//       value: new Date(),
//     });
//   }

//   componentDidMount() {
//     console.log('class component did mount');
//   }
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

Content.propTypes = {};

Content.defaultProps = {};