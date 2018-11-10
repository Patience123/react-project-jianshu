import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from  './style';
import GlobalIconFont from './static/iconfont/iconfont';
import App from './App';

ReactDOM.render(
    <React.Fragment>
        <App />
        <GlobalStyle reset />
        <GlobalIconFont iconfont />
    </React.Fragment>, 
    document.getElementById('root')
);
