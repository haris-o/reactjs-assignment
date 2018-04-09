export const actions = {
    CURRENCIES_RECEIVE: 'CURRENCIES_RECEIVE',
    CURRENCY_RECEIVE: 'CURRENCY_RECEIVE',
    CURRENCY_SELECT: 'CURRENCY_SELECT',
    FIAT_CHANGE: 'FIAT_CHANGE'
};

const receiveCurrencies = (currencies) => {
    return {
        type: actions.CURRENCIES_RECEIVE,
        currencies
    };
};

const receiveCurrency = (currency) => {
    return {
        type: actions.CURRENCY_RECEIVE,
        currency
    };
};

export const selectCurrency = (currencyId) => {
    return {
        type: actions.CURRENCY_SELECT,
        currencyId
    }
};

export const changeFiat = (fiat) => {
    return {
        type: actions.FIAT_CHANGE,
        fiat
    };
};

export const fetchCurrencies = (fiat = 'USD') => {
    return dispatch => {
        return fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=100&convert=${fiat}`)
            .then(res => {
                if(res.ok){
                    res.json().then(currencies => dispatch(receiveCurrencies(currencies)));
                }
            })
            .catch(err => console.log(err));
    }
};

export const fetchCurrency = (id, fiat = 'USD') => {
    return dispatch => {
        return fetch(`https://api.coinmarketcap.com/v1/ticker/${id}/?convert=${fiat}`)
            .then(res => {
                if(res.ok){
                    res.json().then(currencyList => dispatch(receiveCurrency(currencyList[0])));
                }
            })
            .catch(err => console.log(err));
    }
};

export const loadState = () => {
    try {
        const state = localStorage.getItem('state');
        if(!state){
            return undefined;
        }
        else{
            return JSON.parse(state);
        }
    }
    catch(err){
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch(err){
        console.log(err);
    }
};
