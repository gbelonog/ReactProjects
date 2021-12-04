import React, { Component } from 'react';
import { NewsFilters } from './NewsFilters/NewsFilters';
import { NewsList } from './NewsList';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      specialFilter: false,
      linkPresenceFilter: false,
      photoPresenceFilter: false,
      searchTextFilterValue: '',
    };
    this.specialFilterHandler = this.specialFilterHandler.bind(this);
    this.linkPresenceHandler = this.linkPresenceHandler.bind(this);
    this.photoPresenceHandler = this.photoPresenceHandler.bind(this);
    this.searchTextHandler = this.searchTextHandler.bind(this);
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

  searchTextHandler(value){
    this.setState({ searchTextFilterValue: value });
    console.log(this.state);
  }

  render() {
    return <div>
      <NewsFilters 
        specialFilterHandler = {this.specialFilterHandler} 
        linkPresenceHandler = {this.linkPresenceHandler}
        photoPresenceHandler = {this.photoPresenceHandler}
        searchTextHandler = {this.searchTextHandler}
      />
      <NewsList 
        specialFilter = {this.state.specialFilter} 
        linkPresenceFilter = {this.state.linkPresenceFilter}
        photoPresenceFilter = {this.state.photoPresenceFilter}
        searchTextFilterValue = {this.state.searchTextFilterValue}
      />
    </div>;
  }
}

export { NewsPage };