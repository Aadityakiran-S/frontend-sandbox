import React from 'react';
import ReactDom from 'react-dom';

//This is a stateless functional component and this has to be declared in caps
// function Greeting() {
//   return React.createElement('h1', {}, 'hello World');
//  //Don't wanna do like this. Pretty complicated.
// }

//JSX rules
// return single element
// div/ section / article or Fragment
// user camelCase for html attributes
// className instead of class
// clse every element (duh! right?)
// formatting

const Greeting = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in iure cumque incidunt nulla dolore placeat quaerat dicta numquam commodi.</p>
    </div>
  );
}

//injecting to index.html
ReactDom.render(<Greeting />, document.getElementById('root'));