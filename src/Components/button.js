import React, { Component } from 'react';
 class Button extends Component {
    render() {
      return (
        <div>
          <img className='buttonImage' src={this.props.image} alt='buttonPicture'></img>
          <div className='buttonText'>{this.props.text}</div>
        </div>
      );
    }
  }
   export default Button; 