import React, { Component } from 'react';
import logo from './cake.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           <br/>
            It's your birthday.  <br/>
            Gonna party like it's your birthday.  <br/>
            Gonna sip bacardi like it's your birthday.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jan 24
          </a>
            <p>
            Check in at Three Abbey Green<br/>
            Grab a bun from Sally Lunn's for breakfast<br/>


            Grab a pint from Bath Ales<br/>
            Fancy dinner at the dower house<br/>

            </p>
          <br/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jan 25
          </a>
            <p>

            Gin making at 1pm <br/>
            BATH'S FIRST GIN DISTILLERY FOR 250 YEARS<br/>

            Roman baths<br/>
            Afternoon Tea @ the Pump Room<br/>


            </p>


        </header>


      </div>
    );
  }
}

export default App;
