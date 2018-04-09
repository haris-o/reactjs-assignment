import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Header from '../header';
import Container from '../container';
import Details from '../details';
import Settings from '../settings';

const Component = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path='/' component={Container}/>
                <Route exact path='/details' component={Details}/>
                <Route exact path='/settings' component={Settings}/>
            </div>
        </BrowserRouter>
    );
};

export default Component;