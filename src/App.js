import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    breweries: []
  };
  componentDidMount(){
    console.log('here');
    fetch(`https://api.openbrewerydb.org/breweries/search?query=austin`)
    .then(data => data.json())
    .then(data => {
      console.log(data, 'data')
      this.setState({breweries: [...this.state.breweries, data]})
    })
  }
  renderBreweries(){
    console.log(Array.isArray(this.state.breweries))
    return this.state.breweries.map((brewery, key)=> {
      console.log(this.breweries)
    })
  }
  render() {
    return (
      <div className="App">
      {this.renderBreweries()}
      </div>
    );
  }
}

export default App;
