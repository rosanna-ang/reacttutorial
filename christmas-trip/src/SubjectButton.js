import React, { Component } from 'react';
import './App.css';

class SubjectButton extends Component {
  render() {
    return (
      <div class="w3-col" style={{width: '20%'}}>
        <button type="button" class="btn">
        Day {this.props.day}<br/>
         {this.props.name}
        </button>
      </div>
    );
  }
}

export default SubjectButton; // Don’t forget to use export default!
