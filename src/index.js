import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Containers/Home';
import Order from './Containers/Order'
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Order /><GlobalStyles />
    </>
);