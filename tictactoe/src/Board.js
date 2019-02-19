import React, { Component } from 'react';
import './App.css';

class Board extends React.Component {
  render(i) {
    return <Square value={"i"} />;
  }
}

class Square extends React.Component {
  render() {
    return <button>
      {this.props.value}
    </button>;
  }
}




export default Board;
