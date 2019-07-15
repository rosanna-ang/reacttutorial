import React from 'react';
import logo from './logo.png';
import './App.css';
import SubjectButton from './SubjectButton'; // Import a component from another file


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
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      <body className="App-body">
        <SubjectButton name="henry" day="1" />
        <SubjectButton name="Henry" />
        <SubjectButton name="Tin" />
      </body>
    </div>
  );
}


export default App;
