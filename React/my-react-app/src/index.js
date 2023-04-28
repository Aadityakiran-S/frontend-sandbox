import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return (
        <>
            <div>
                <h3>My first component</h3>
                <ul>
                    <li>
                        <a href="#">Hello World</a>
                    </li>
                </ul>
            </div>
            <h2>My second heading</h2>
        </>
    );
}

// function Greeting() {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'Hello World')
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />)