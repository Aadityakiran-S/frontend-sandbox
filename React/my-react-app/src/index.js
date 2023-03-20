import React from 'react';
import { createRoot } from 'react-dom/client';

//CSS
import './index.css'; //Just grabbing everything 

//variables
const books = [
  {
    id: 1,
    title: `I love you to the moon and back`,
    author: `Amelia Hepworth`,
    image: `https://m.media-amazon.com/images/I/91hIsjFuICL.jpg`
  },
  {
    id: 2,
    title: "Grandma's bag of stories",
    author: "Sudha Murthy",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61yB0UFlM3L._SY344_BO1,204,203,200_.jpg"
  },
  {
    id: 3,
    title: "The Vanishing Half",
    author: "Brit Bennett ",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41tesqOC72L._AC_UY218_.jpg",
  },
]

const BookList = () => {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return (<Book key={book.id} {...book}></Book>);
      })}
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
createRoot(root).render(<BookList />);