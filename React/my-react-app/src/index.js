import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return (
        <>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
        </>
    );
}

//#region  Components
const Book = () => {
    return (
        <article>
            <Image></Image>
            <Title></Title>
            <Author></Author>
        </article>
    );
}
const Image = () => <img src="https://m.media-amazon.com/images/I/71hwUY5ZmxL._AC_UY218_.jpg" alt="Interesting Facts For Curious Minds" />;
const Title = () => <h2>Interesting Facts For Curious Minds</h2>;
const Author = () => <h4>Jordan Moore</h4>;
//#endregion

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);