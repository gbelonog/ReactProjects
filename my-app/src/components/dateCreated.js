import React, { Component } from 'react';

class DateCreated extends Component {
  render() {
    const { dateCreated, id } = this.props;
    const monthes = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = dateCreated.split('T')[0].split('-');
    return <h6 key={"dateCreated"+id}>Date: {date[2] 
      + " " + monthes[date[1]-1] 
      + " " + date[0]
      + " " + dateCreated.split('T').pop().split("-")[0]
      }</h6>;
  }
}

export default DateCreated;