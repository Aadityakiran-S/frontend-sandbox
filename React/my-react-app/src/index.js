import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      <Heading />
      <Paragraph />
    </div>
  );
}

const Heading = () => {
  return (
    <h1>Hello World</h1>
  );
}
const Paragraph = () => {
  return (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod numquam nihil distinctio dignissimos possimus autem similique, quasi qui fugit aliquam eaque libero saepe ad quae adipisci minus consectetur omnis dolorem facere optio. Voluptate et provident explicabo nihil nemo sequi similique, dolorum illum voluptas fugiat quia consectetur veritatis ex quae!</p>
  );
}

//injecting to index.html
ReactDom.render(<App />, document.getElementById('root'));