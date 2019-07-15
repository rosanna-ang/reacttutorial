import React, { Component } from 'react';
import './App.css';

class SubjectButton extends Component {
  render() {
    return (
      <div className="subject-button">
        <button type="button" class="btn">{this.props.name}</button>
      </div>
    );
  }
}

export default SubjectButton; // Don’t forget to use export default!
