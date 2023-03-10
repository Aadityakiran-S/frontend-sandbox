import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'; //Just grabbing everything 

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
      <Title />
      <Image />
      <br />
      {/* By that Author, pretty hard to do but useless */}
      <div>
        <p style={{ display: 'inline-block', marginRight: '0.25em', fontStyle: 'italic' }}>by</p>
        <div style={{ display: 'inline-block' }}><Author /></div>
      </div>
    </article>
  );
}

const Image = () => {
  return (
    <img src="https://m.media-amazon.com/images/I/91hIsjFuICL.jpg" width={'50%'} alt="book image" />
  );
}

const Title = () => <h1>I love you to the moon and back</h1>;
const Author = () => <h4
  style={
    {
      color: '#617d98',
      fontSize: '1rem',
      marginTop: '0.25rem'
    }}>Amelia Hepworth</h4>;

//injecting to index.html
ReactDom.render(<BookList />, document.getElementById('root'));