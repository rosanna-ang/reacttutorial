import React from 'react';
import './css/App.css';
import './css/w3.css'
import Person from './Person'; // Import a component from another file
import './Person2';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>this is the header</p>
      </header>
      <body>
        <div class="w3-row">
          <Person name="Max" age="28"/>
          <Person name="Ann" age="18"/>
          <div id = "p2"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
