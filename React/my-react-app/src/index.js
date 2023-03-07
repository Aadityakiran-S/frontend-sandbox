import React from 'react';
import ReactDom from 'react-dom';

//Must capitalize functions for React to know it's supposed to be used
function Greeting() {
  return (
    <div>
      <h3>Hello World</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement
//     ('div',
//       {},
//       React.createElement('h1', {}, 'Hello World'));
// }

ReactDom.render(<Greeting></Greeting>, document.getElementById('root'));