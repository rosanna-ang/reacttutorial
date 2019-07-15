import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubjectButton from './SubjectButton'; // Import a component from another file
import './css/w3.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my data science journey.
        </p>

        <div class="w3-row">
          <SubjectButton name="Create a simple react site from scratch" status="done" link="https://www.google.com" />
          <SubjectButton name="Create a simple database"/>
          <SubjectButton name="Hookup to an api" />
          <SubjectButton name="Tying it all together" type="final"/>
          <SubjectButton name="hello" />
        </div>



      </header>
    </div>
  );
}


export default App;
