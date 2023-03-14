import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';

//CSS
import './index.css'; //Just grabbing everything 

//variables
const firstBook = {
  title: `I love you to the moon and back`,
  author: `Amelia Hepworth`,
  image: `https://m.media-amazon.com/images/I/91hIsjFuICL.jpg`
}
const secondBook = {
  title: "Grandma's bag of stories",
  author: "Sudha Murthy",
  image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61yB0UFlM3L._SY344_BO1,204,203,200_.jpg"
}

const BookList = () => {
  return (
    <section className='bookList'>
      {/* FIrst book */}
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>This is a goddamn description that I am having to write for this book since I have to be "original" afterall.</p>
      </Book>
      {/* Second book */}
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { image, title, author, children } = props;
  return (
    <article className='book '>
      <h1>{title.toUpperCase()}</h1>
      <img src={image} width={'50%'} alt="image" />
      {/* <p>{children}</p> */}
      {children}
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