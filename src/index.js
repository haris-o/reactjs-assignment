import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Route, BrowserRouter} from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import Settings from './Settings';
import Details from './Details';
import {currencies} from './reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    currencies,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path='/' component={Container}/>
                <Route exact path='/details' component={Details}/>
                <Route exact path='/settings' component={Settings}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

/*

            <Route exact path='/details' component={Details} />
            <Route exact path='/settings' component={Settings} />
 */

registerServiceWorker();
