import React, { Component } from 'react';
import './css/Person.css';

class Person extends Component{
  render() {
    return (

      <div className="w3-quarter">
        <div className="Person-card">
          <h1>{this.props.name}</h1>
          <p>{this.props.age}</p>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<Person />, document.querySelector('#p1'));
//ReactDOM.render(<Person />, document.getElementById('root'));

export default Person; // Don’t forget to use export default!
