import React from 'react';
import {render} from 'react-dom';
import {Provider}  from 'react-redux';
import App from 'Components/App';
import configureStore from './store/configureStore.js';

const element = document.getElementById('root');

const store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    element
);
