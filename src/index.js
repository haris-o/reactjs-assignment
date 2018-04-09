import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';

import {currencies} from './store/reducer';
import Router from './components/router';

const store = createStore(
    currencies,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
