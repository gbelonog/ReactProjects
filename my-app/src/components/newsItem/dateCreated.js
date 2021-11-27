import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DateCreated extends Component {
  render() {
    const { dateCreated } = this.props;
    const monthes = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = dateCreated.split('T')[0].split('-');
    return <h6>Date: {date[2] 
      + " " + monthes[date[1]-1] 
      + " " + date[0]
      + " " + dateCreated.split('T').pop().split("-")[0]
      }</h6>;
  }
}

DateCreated.propTypes = {
  dateCreated: PropTypes.string,
}

DateCreated.defaultProps = {
  dateCreated: "",
};

export { DateCreated };