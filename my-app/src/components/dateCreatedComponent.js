import React, { Component } from 'react';

class DateCreated extends Component {
  render() {
    const { dateCreated } = this.props;
    return <h6>Date: { dateCreated }</h6>;
  }
}

export default DateCreated;