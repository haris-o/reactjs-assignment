export const actions = {
    CURRENCIES_RECEIVE: 'CURRENCIES_RECEIVE',
    CURRENCY_RECEIVE: 'CURRENCY_RECEIVE',
    CURRENCY_SELECT: 'CURRENCY_SELECT',
    FIAT_CHANGE: 'FIAT_CHANGE'
};

function receiveCurrencies(currencies){
    return {
        type: actions.CURRENCIES_RECEIVE,
        currencies
    };
}

function receiveCurrency(currency){
    return {
        type: actions.CURRENCY_RECEIVE,
        currency
    };
}

export function selectCurrency(currencyId){
    return {
        type: actions.CURRENCY_SELECT,
        currencyId
    }
}

export function changeFiat(fiat){
    return {
        type: actions.FIAT_CHANGE,
        fiat
    };
}

export function fetchCurrencies(fiat = 'USD'){
    return dispatch => {
        return fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=100&convert=${fiat}`)
            .then(res => {
                if(res.ok){
                    res.json().then(currencies => dispatch(receiveCurrencies(currencies)));
                }
            })
            .catch(err => console.log(err));
    }
}

export function fetchCurrency(id, fiat = 'USD'){
    return dispatch => {
        return fetch(`https://api.coinmarketcap.com/v1/ticker/${id}/?convert=${fiat}`)
            .then(res => {
                if(res.ok){
                    res.json().then(currencyList => dispatch(receiveCurrency(currencyList[0])));
                }
            })
            .catch(err => console.log(err));
    }
}
