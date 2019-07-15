import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubjectButton from './SubjectButton'; // Import a component from another file
import './https://www.w3schools.com/w3css/4/w3.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my data science journey.
        </p>

        <SubjectButton name="henry" />
        <SubjectButton name="Henry" />
        <SubjectButton name="Tin" />
      </header>
    </div>
  );
}


export default App;
