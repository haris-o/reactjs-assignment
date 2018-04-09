import React from 'react';
import {connect} from 'react-redux';

import Component from './Component';
import {fetchCurrency} from '../../store/actions';

const mapStateToProps = state => {
    return {
        currency: state.selectedCurrency,
        fiat: state.fiat
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrency: (id, fiat) => dispatch(fetchCurrency(id, fiat))
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Component);