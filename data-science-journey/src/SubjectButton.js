import React, { Component } from 'react';
import './App.css';

class SubjectButton extends Component {
  render() {
    return (
      <div className="w3-quarter">
        <a href={this.props.link} className={`btn ${ this.props.status} ${ this.props.type}`}>{this.props.name}</a>
      </div>
    );
  }
}

export default SubjectButton; // Don’t forget to use export default!
