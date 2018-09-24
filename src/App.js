import React, { Component } from 'react';
import './App.css';
import Button from './Components/button.js';

class App extends Component {
  state={
    breweries: [],
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
      <div>
      {this.renderBreweries()}
      <h1 className='title'>Do you want a beer?</h1>
      <div className='buttonFlex'>
      <Button
        image='https://images.unsplash.com/photo-1530169727138-a704f623cbea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a686038e1e4d85a1fd39caedaf9fc8fd&auto=format&fit=crop&w=981&q=80'
        text='Yeahhhh'
      />
      {/* <img src='https://images.unsplash.com/photo-1532377611310-4564e426e7c1?ixlib=rb-0.3.5&s=173e53cbcb2185b0f6020cefcbf8ab34&auto=format&fit=crop&w=500&q=60' alt='beer' className='beer'></img> */}
      <Button
        image='https://images.unsplash.com/photo-1519114563721-eb52c00b9129?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4974aa45eabfba1ee16f1edb30f973a8&auto=format&fit=crop&w=1575&q=80'
        text='Nah'
      />
      </div>
      </div>
    );
  }
}

export default App;
