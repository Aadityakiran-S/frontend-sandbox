import React from 'react';
import ReactDom from 'react-dom';

//Must capitalize functions for React to know it's supposed to be used
function Greeting() {
  return <h1>Hello there!</h1>
}

ReactDom.render(<Greeting></Greeting>, document.getElementById('root'));