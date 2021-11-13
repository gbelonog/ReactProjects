import React, { Component } from 'react';

class DateCreated extends Component {
  render() {
    const { dateCreated, id } = this.props;
    return <h6 key={"dateCreated"+id}>Date: {dateCreated}</h6>;
  }
}

export default DateCreated;