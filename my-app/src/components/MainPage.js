
import React, { Component } from 'react';
import StarShips from './StarShips';

export class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTextFilterValue: '',
      searchState: true,

    };
  }

  searchTextHandler(value){
    this.setState({ searchTextFilterValue: value });
  }

  searchHandler(){
    // if(this.state.searchState){this.setState({searchState: false})}
    //     else {this.setState({searchState: true})}
    this.setState({ searchState: !this.state.searchState })
  }

  render() {
    const { searchTextFilterValue, searchState} = this.state;

    return (
      <div className="MainPage">
        Search text 
          <input type="text" onChange={event =>{this.searchTextHandler(event.target.value)}} ></input> 
          <button onClick={() => this.searchHandler()}>Search</button>
          <p></p>
          
         
          <StarShips searchTextFilterValue = { searchTextFilterValue } searchState={ searchState }/>
      </div>
    );
  }

}

export default MainPage;
