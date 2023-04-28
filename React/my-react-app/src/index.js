import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList() {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

function Book() {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => <img src="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UL400_.jpg" alt="Psychology of Money" />;
const Title = () => <h2>Psychology of Money</h2>;
const Author = () => <h4>Morgan Housel</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />)