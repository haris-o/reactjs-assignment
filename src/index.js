import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';

import {currencies} from './store/reducer';
import Router from './components/router';
import {loadState, saveState} from './store/actions';

const persistedState = loadState();
const store = createStore(
    currencies,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState(store.getState());
});

render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
