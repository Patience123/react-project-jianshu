import React from 'react';
import Loadable from 'react-loadable';

const LoadingStyle = {
    color: '#999',
    fontSize: 18,
    marginLeft: 100,
    marginTop: 86
};

const LoadableComponent = Loadable({
    loader: () => import ('./'), // ./index.js
    loading() {
        return <div style={LoadingStyle}>正在加载...</div>
    }
});

export default () => <LoadableComponent/>;