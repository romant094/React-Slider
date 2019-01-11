import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
        <div>
            <h1>
                Hello world!
            </h1>
        </div>
    )
}

ReactDOM.render(<Hello />, document.getElementById('root'));