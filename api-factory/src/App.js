import React, { Component } from 'react';
import logo from './flower-logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }



  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is the header.
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          <p>
            This is the body.  Let me give you a search button.
          </p>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <br/>
            <button>Search!</button>
          </form>
        </body>
      </div>
    );
  }
}

export default App;
