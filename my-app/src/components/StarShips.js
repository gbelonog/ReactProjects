import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class StarShips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'initial',
      error: null,
      data: null,
      previous: null,
      next: "https://swapi.dev/api/starships/?page=2",
      page: "https://swapi.dev/api/starships/?page=1",
      flagForDidUpdate: false,
      flagForPages: false
    };
  }

  fetchMainData = () => {
    this.setState({
      status: 'loading',
      error: null,
      data: null,
      searchTextFilterValue: ''
    });

    fetch(`https://swapi.dev/api/starships`)
      .then((res) => {
        console.log('---> StarShips in fetchMainData: res', res);
        return res.json()
      })
      .then((data) => {
        this.setState({
          status: 'success',
          error: null,
          previous: data.previous,
          next: data.next,
          data: data.results     
        });
      })
      .catch((error) => {
        console.log('---> StarShips: error', error);
        this.setState({
          status: 'error',
          error: error.message,
          data: null,
        });
      })
  };

  fetchSearchData = () => {
    fetch(`https://swapi.dev/api/starships/?search=${this.props.searchTextFilterValue}`)
    .then((res) => {
      console.log('---> StarShips in fetchSearchData: res', res);
      return res.json();
    })
    .then((data) => {

      this.setState({
        status: 'success',
        error: null,
        data: data.results,
      });
      
    })
    .catch((error) => {
      console.log('---> StarShips: error', error);
      this.setState({
        status: 'error',
        error: error.message,
        data: null,
      });
    })
  }

  fetchData = () => {
    fetch(this.state.page)
    .then((res) => {
      console.log('---> StarShips in fetchData: res', res);
      
      return res.json();
    })
    .then((data) => {
      this.setState({
        status: 'success',
        error: null,
        data: data.results,
        previous: data.previous,
        next: data.next
      });
      
    })
    .catch((error) => {
      console.log('---> StarShips: error', error);
      this.setState({
        status: 'error',
        error: error.message,
        data: null,
      });
    })
  }

  componentDidUpdate(prevProps) {
    console.log('---> StarShips: componentDidUpdate');
    if (this.props.searchState !== prevProps.searchState) {
      this.fetchSearchData();
    }
    if(this.state.flagForDidUpdate){
      this.fetchData();
      this.setState({flagForDidUpdate: false})
    }
  }

  
  render() {

  const { status, error, data, previous, next, page } = this.state;

    return (
      <div className="StarShips">
        {status === 'loading' || status === 'initial' ? (
          <div>Loading...</div>
        ) : (
          <div>
            {error === null ? (
              <div>
                {data?.length === 0 ? (
                  <div>Nothing was found</div>
                ) : (
                <div>
                  {!!previous && (<button onClick={() => {
                    this.setState({page:previous});
                    this.setState({flagForDidUpdate:true});
                  }}>previous</button>)}
                  {!!previous && (<button onClick={() => {
                    this.setState({page:previous});
                    this.setState({flagForDidUpdate:true});
                  }}>{previous?.slice(previous.indexOf('=')+1)}</button>)}
                  
                  <button>{(page.slice(page.indexOf('=')+1))}</button>
              
                  {!!next &&<button onClick={() => {
                    this.setState({page:next});
                    this.setState({flagForDidUpdate:true});
                  }}>{next?.slice(next.indexOf('=')+1)}</button>} 
                  {!!next &&<button onClick={() => {
                    this.setState({page:next});
                    this.setState({flagForDidUpdate:true});
                  }}>next</button>}             
                <p></p>
                  {data.map(e=>{
                    return <div key={e.name}>
                    <div>Name: {e.name}</div>
                    <div>Model: {e.model}</div>
                    <div>MGLT: {e.MGLT}</div>
                    <div>Cargo capacity: {e.cargo_capacity}</div>
                    <div>Consumables: {e.consumables}</div>
                    <div>Cost in credits: {e.cost_in_credits}</div>
                    <div>Сreated: {e.сreated}</div>
                    <div>Сrew: {e.crew}</div>
                    <div>Edited: {e.edited}</div>
                    <div>Hyperdrive rating: {e.hyperdrive_rating}</div>
                    <div>Length: {e.length}</div>
                    <div>Manufacturer: {e.manufacturer}</div>
                    <div>Max atmosphering speed: {e.max_atmosphering_speed}</div>
                    <div>Passengers: {e.passengers}</div>
                    <div>Starship class: {e.starship_class}</div>
                    <div>url: {e.url}</div>
                    <div>Films: {e.films?.map((e,i) => {return <li key={i}>{e}</li>})}</div>
                    <div>Pilots: {e.pilots?.map((e,i) => {return <li key={i}>{e}</li>})}</div>
                    <hr/>
                    </div>
                  })}
                </div>
                )}
              </div> 
            ) : (
              <span style={{ color: 'red' }}>{error}</span>
            )}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log('---> StarShips: componentDidMount');
    this.fetchMainData();
  }
}

StarShips.propTypes = {
  searchState: PropTypes.bool.isRequired,
  searchTextFilterValue: PropTypes.string.isRequired, 

}

StarShips.defaultProps = {
  searchState: false,
  searchTextFilterValue: '', 
};

export default StarShips;
