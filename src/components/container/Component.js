import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                Header: 'Rank',
                accessor: 'rank'
            },
            {
                Header: 'Symbol',
                accessor: 'symbol'
            },
            {
                Header: 'Price ' + this.props.fiat || 'USD',
                accessor: 'price_' + this.props.fiat.toLowerCase()
            },
            {
                Header: '24h Change',
                accessor: 'percent_change_24h'
            }
        ];
    }

    componentDidMount() {
        this.props.fetchCurrencies(this.props.fiat);
    }

    render() {
        let {currencies, fiat, fetchCurrencies, selectCurrency, history} = this.props;

        return (
            <div className='container'>
                <div className='row text-center'>
                    <button
                        className='btn btn-primary'
                        onClick={e => {
                            e.preventDefault();
                            fetchCurrencies(fiat);
                        }}
                    >
                        Refresh
                    </button>
                </div>

                <ReactTable
                    className='-striped -highlight'
                    columns={this.columns}
                    data={currencies}
                    getTrProps={(state, rowInfo, column) => ({
                        onClick: e => {
                            e.preventDefault();
                            selectCurrency(rowInfo.original.id);
                            history.push('/details');
                        }
                    })}
                />
            </div>
        );
    }
};

Component.propTypes = {
    currencies: PropTypes.array,
    fiat: PropTypes.string.isRequired,
    fetchCurrencies: PropTypes.func.isRequired,
    selectCurrency: PropTypes.func.isRequired,
    history: PropTypes.object
};

export default Component;