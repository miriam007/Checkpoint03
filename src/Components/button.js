import React, { Component } from 'react';
 class Button extends Component {
    render() {
      return (
        <div className='buttonFlex'>
          <img className='buttonImage' src={this.props.image} alt='buttonPicture'></img>
          <button className='buttonText'>{this.props.text}</button>
        </div>
      );
    }
  }
   export default Button; 