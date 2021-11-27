import React, { Component } from 'react';
import { NewsFilters } from './newsFilters/newsFilters';
import { NewsList } from './newsList';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      specialFilter: false,
      linkPresenceFilter: false,
      photoPresenceFilter: false,
    };
    this.specialFilterHandler = this.specialFilterHandler.bind(this);
    this.linkPresenceHandler = this.linkPresenceHandler.bind(this);
    this.photoPresenceHandler = this.photoPresenceHandler.bind(this);
  }

  specialFilterHandler(){
    this.setState({ specialFilter: !this.state.specialFilter });
  }
  
  linkPresenceHandler(){
    this.setState({ linkPresenceFilter: !this.state.linkPresenceFilter });
  }

  photoPresenceHandler(){
    this.setState({ photoPresenceFilter: !this.state.photoPresenceFilter });
  }

  render() {
    return <div>
      <NewsFilters 
        specialFilterHandler = {this.specialFilterHandler} 
        linkPresenceHandler = {this.linkPresenceHandler}
        photoPresenceHandler = {this.photoPresenceHandler}
      />
      <NewsList 
        specialFilter = {this.state.specialFilter} 
        linkPresenceFilter = {this.state.linkPresenceFilter}
        photoPresenceFilter = {this.state.photoPresenceFilter}
      />
    </div>;
  }
}

export { NewsPage };