import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return (
        <>
            <h3 className='someValue'>My first component</h3>
            <Person />
            <Message />
        </>
    );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => { return <h2>This is my message</h2>; }

// // React component using "createElement"
// function Greeting() {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'Hello World')
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />)