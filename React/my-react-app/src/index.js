import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'; //Just grabbing everything 

const title = `I love you to the moon and back`;
const author = `Amelia Hepworth`;
const imageURL = `https://m.media-amazon.com/images/I/91hIsjFuICL.jpg`;

const BookList = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book '>
      <h1>{title}</h1>
      <img src={imageURL} width={'50%'} alt="image" />
      <br />
      <div>
        <p style={{ display: 'inline-block', marginRight: '0.25em', fontStyle: 'italic' }}>by</p>
        <div style={{ display: 'inline-block' }}>
          <h4>{author}</h4></div>
      </div>
    </article>
  );
}

//injecting to index.html
ReactDom.render(<BookList />, document.getElementById('root'));