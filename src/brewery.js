import React, { Component } from 'react';


class Brewery extends Component {
  render() {
      console.log(this.props.index)
      const background= this.props.index % 2 === 0 ? 'white': '#dedede';
    return (
      <li style={{backgroundColor: background, listStyle: 'none'}}>
            {this.props.name}
        </li>
    );
  }
}

export default Brewery;