import React from 'react';
import logo from './logo.png';
import './App.css';
import './w3.css';
import SubjectButton from './SubjectButton'; // Import a component from another file
import Schedule from './Schedule'; // Import a component from another file
import Countdown from './Countdown'; // Import a component from another file

function App() {
  return (
    <div className="App">

    <div class="winter-is-coming">

      <div class="snow snow--near"></div>
      <div class="snow snow--near snow--alt"></div>

      <div class="snow snow--mid"></div>
      <div class="snow snow--mid snow--alt"></div>

      <div class="snow snow--far"></div>
      <div class="snow snow--far snow--alt"></div>
    </div>


      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tan Clan's Trip To See Santa Claus!
        </p>

      </header>
      <body className="App-body">
        <Countdown/>
        <div class="w3-row">
          <SubjectButton name="Husky Ride" day="1" />
          <SubjectButton name="Reindeer Ride" day="2" />
          <SubjectButton name="Ice Fishing" day="3" />
          <SubjectButton name="Santa Park" day="4" />
          <SubjectButton name="Snowmobile Ride" day="5" />
        </div>
        <Schedule name="Snowmobile Ride" day="5" />
      </body>
    </div>
  );
}


export default App;
