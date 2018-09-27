import React, { Component } from 'react';


class Brewery extends Component {
  render() {
      console.log(this.props.index)
  
    return (
      <li>
       {this.props.name}
      </li>
    );
  }
}

export default Brewery;