import React from 'react';
import {connect} from 'react-redux';

import Component from './Component';
import {fetchCurrencies, selectCurrency} from '../../store/actions';

const mapStateToProps = state => {
    return {
        currencies: state.currenciesArray,
        fiat: state.fiat
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrencies: (fiat) => dispatch(fetchCurrencies(fiat)),
        selectCurrency: (id) => dispatch(selectCurrency(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);