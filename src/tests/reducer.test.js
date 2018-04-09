import { currencies as reducer } from '../../src/store/reducer';
import {actions} from '../../src/store/actions';

describe('currency reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual({
                currenciesArray: [],
                currenciesObject: {},
                selectedCurrency: {},
                fiat: 'USD'
            })
    });

    it('should handle CURRENCIES_RECEIVE', () => {
        expect(
            reducer(
                [],
                {
                    type: actions.CURRENCIES_RECEIVE,
                    currencies: [{id: 'bitcoin'}]
                }))
            .toEqual(
                {
                    currenciesArray: [
                        {id: 'bitcoin'}
                        ],
                    currenciesObject: {
                        'bitcoin': {id: 'bitcoin'}
                    }
                });
    });

    it('should handle CURRENCY_RECEIVE', () => {
        expect(
            reducer(
                [],
                {
                    type: actions.CURRENCY_RECEIVE,
                    currency: {id: 'bitcoin'}
                }))
            .toEqual(
                {
                    selectedCurrency: {id: 'bitcoin'}
                });
    });

    it('should handle CURRENCY_SELECT', () => {
        expect(
            reducer(
                {
                    currenciesObject: {
                        'bitcoin': {id: 'bitcoin'}
                    }
                },
                {
                    type: actions.CURRENCY_SELECT,
                    currencyId: 'bitcoin'
                }))
            .toEqual(
                {
                    currenciesObject: {
                        'bitcoin': {id: 'bitcoin'}
                    },
                    selectedCurrency: {id: 'bitcoin'}
                });
    });

    it('should handle FIAT_CHANGE', () => {
        expect(
            reducer(
                {},
                {
                    type: actions.FIAT_CHANGE,
                    fiat: 'CNY'
                }))
            .toEqual(
                {
                    fiat: 'CNY'
                });
    });
});