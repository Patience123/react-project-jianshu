import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from  './style.js';
import App from './App';

ReactDOM.render(
    <React.Fragment>
        <App />
        <GlobalStyle reset />
    </React.Fragment>, 
    document.getElementById('root')
);
