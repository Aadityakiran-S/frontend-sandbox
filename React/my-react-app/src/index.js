import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function BookList() {
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
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);