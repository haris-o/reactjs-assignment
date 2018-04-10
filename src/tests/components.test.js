import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

/* Since all our logic is in our reducers & actions,
   we only need to test if our presentational
   components render without any issues.
 */

import Container from '../components/container/Component';
import Details from '../components/details/Component';
import Header from '../components/header';
import Settings from '../components/settings/Component';

let mockAction = (value) => {
    console.log(value);
};

let mockCurrency = {
    id: 'mock'
};

it('renders Container without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Container
            fiat={'USD'}
            fetchCurrencies={mockAction}
            selectCurrency={mockAction}
        />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Details without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Details
                currency={mockCurrency}
                fetchCurrency={mockAction}
                fiat={'USD'}
            />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Router without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Settings without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Settings
                changeFiat={mockAction}
                fiat={'USD'}
            />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});