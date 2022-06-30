import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './Containers/styles/globalStyles';
import Routes from './routes'

ReactDOM.render(
    <>
        <Routes />
        <GlobalStyles />
    </>,
    document.getElementById('root')
);