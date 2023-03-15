import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';

//CSS
import './index.css'; //Just grabbing everything 

//variables
const books = [
  {
    title: `I love you to the moon and back`,
    author: `Amelia Hepworth`,
    image: `https://m.media-amazon.com/images/I/91hIsjFuICL.jpg`
  },
  {
    title: "Grandma's bag of stories",
    author: "Sudha Murthy",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61yB0UFlM3L._SY344_BO1,204,203,200_.jpg"
  },
]

const names = ['john', 'susan', 'peter'];
const newNames = names.map((entry) => {
  return <h1>{entry}</h1>
})
const BookList = () => {
  return (
    <section className='bookList'>
      {newNames}
    </section>
  );
}

const Book = (props) => {
  const { image, title, author } = props;
  return (
    <article className='book '>
      <h1>{title.toUpperCase()}</h1>
      <img src={image} width={'50%'} alt="image" />
      <div>
        <p style={{ display: 'inline-block', marginRight: '0.25em', fontStyle: 'italic' }}>by</p>
        <div style={{ display: 'inline-block' }}>
          <h4>{author}</h4></div>
      </div>
    </article>
  );
}

//injecting to index.html
const root = document.getElementById('root');
createRoot(root).render(<BookList />)
// ReactDom.render(<BookList />, document.getElementById('root'));