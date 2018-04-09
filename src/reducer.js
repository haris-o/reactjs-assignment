import {actions} from './actions';

const initialState = {
    currenciesArray: [],
    currenciesObject: {},
    selectedCurrency: {},
    fiat: 'USD'
};

export function currencies(state = initialState, action = {}) {
    switch (action.type) {
        case actions.CURRENCIES_RECEIVE:
            return Object.assign({}, state, {
                currenciesArray: action.currencies,
                currenciesObject: action.currencies.reduce((accumulator, current) => {
                    accumulator[current.id] = current;
                    return accumulator;
                }, {}),
                selectedCurrency: {}
            });

        case actions.CURRENCY_RECEIVE:
            return Object.assign({}, state, {
                selectedCurrency: action.currency
            });

        case actions.CURRENCY_SELECT:
            return Object.assign({}, state, {
                selectedCurrency: state.currenciesObject[action.currencyId]
            });

        case actions.FIAT_CHANGE:
            return Object.assign({}, state, {
                fiat: action.fiat
            })
    }
}