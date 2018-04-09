import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    actions,
    fetchCurrency,
    fetchCurrencies
} from '../../src/store/actions';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('creates CURRENCIES_RECEIVE when fetching currencies', () => {
    fetchMock
        .getOnce(
            'https://api.coinmarketcap.com/v1/ticker/?limit=100&convert=USD',
            {
                body:
                    [{id: 'bitcoin'}]
                ,
                headers: {
                    'content-type': 'application/json'}
            });

    const expectedActions = [
        {
            type: actions.CURRENCIES_RECEIVE,
            currencies: [{id: 'bitcoin'}]
        }];

    const store = mockStore({currenciesArray: []});

    return store.dispatch(fetchCurrencies())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
});

it('creates CURRENCY_RECEIVE when fetching one currency', () => {
    fetchMock
        .getOnce(
            'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD',
            {
                body:
                    [{id: 'bitcoin'}]
                ,
                headers: {
                    'content-type': 'application/json'}
            });

    const expectedActions = [
        {
            type: actions.CURRENCY_RECEIVE,
            currency: {id: 'bitcoin'}
        }];

    const store = mockStore({currenciesArray: []});

    return store.dispatch(fetchCurrency('bitcoin'))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
});