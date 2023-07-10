import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function Greeting() {
    return (
        <>
            <div>
                <h3>Hello People</h3>
                <ul>
                    <li>
                        <a href="#">hello world</a>
                    </li>
                </ul>
            </div>
            <h2>Hello World</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);