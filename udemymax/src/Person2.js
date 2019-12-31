import React from 'react'
import ReactDOM from 'react-dom'

function Person2(){
  return (
    <div>
    <h1>Millie</h1>
    <p>PERSON 2</p>
    </div>
  );
}


/*
ReactDOM.render(
    <div>
        <h1>Hello World!</h1>
    </div>,
    document.getElementById('#p2')
);
*/

ReactDOM.render(<Person2 />, document.getElementById('p2'));
//ReactDOM.render(<Person2 />, document.querySelector('#p2'));
