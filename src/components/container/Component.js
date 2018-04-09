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

        this.getRowProps = this.getRowProps.bind(this);
        this.onRefreshClick = this.onRefreshClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchCurrencies(this.props.fiat);
    }

    getRowProps(state, rowInfo, column) {
        return ({
            onClick: e => {
                e.preventDefault();
                this.props.selectCurrency(rowInfo.original.id);
                this.props.history.push('/details');
            }
        });
    }

    onRefreshClick(e) {
        e.preventDefault();
        this.props.fetchCurrencies(this.props.fiat);
    }

    render() {
        return (
            <div className='container'>
                <div className='row text-center'>
                    <button
                        className='btn btn-primary'
                        onClick={this.onRefreshClick}
                    >
                        Refresh
                    </button>
                </div>

                <ReactTable
                    className='-striped -highlight'
                    columns={this.columns}
                    data={this.props.currencies}
                    getTrProps={this.getRowProps}
                />
            </div>
        );
    }
}

Component.propTypes = {
    currencies: PropTypes.array,
    fiat: PropTypes.string.isRequired,
    fetchCurrencies: PropTypes.func.isRequired,
    selectCurrency: PropTypes.func.isRequired,
    history: PropTypes.object
};

export default Component;