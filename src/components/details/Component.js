import React from 'react';
import PropTypes from "prop-types";

class Component extends React.Component {
    constructor(props){
        super(props);

        this.onRefreshClick = this.onRefreshClick.bind(this);
    }

    componentWillMount(){
        this.props.fetchCurrency(this.props.currency.id, this.props.fiat);
    }

    onRefreshClick(e){
        e.preventDefault();
        this.props.fetchCurrency(this.props.currency.id, this.props.fiat);
    }

    render() {
        let {currency, fiat} = this.props;

        let {
            rank,
            name,
            symbol,
            price_btc,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            total_supply,
            available_supply
        } = currency;
        let fiatLowerCase = fiat.toLowerCase();

        return (
            <div className='container text-center'>
                <div className='well'>
                    <div className='row'>
                        <button onClick={this.onRefreshClick}
                        >
                            Refresh
                        </button>
                    </div>

                    <label>Rank</label>
                    <p>{rank}</p>

                    <label>Name</label>
                    <p>{name}</p>

                    <label>Symbol</label>
                    <p>{symbol}</p>

                    <label>Price</label>
                    <p>{currency['price_' + fiatLowerCase]}</p>

                    <label>24h Volume</label>
                    <p>{currency['24h_volume_' + fiatLowerCase]}</p>

                    <label>Market Cap</label>
                    <p>{currency['market_cap_' + fiatLowerCase]}</p>

                    <label>Price in Bitcoin</label>
                    <p>{price_btc}</p>

                    <label>1h Change</label>
                    <p>{percent_change_1h}</p>

                    <label>24h Change</label>
                    <p>{percent_change_24h}</p>

                    <label>7d Change</label>
                    <p>{percent_change_7d}</p>

                    <label>Total Supply</label>
                    <p>{total_supply}</p>

                    <label>Available Supply</label>
                    <p>{available_supply}</p>
                </div>
            </div>
        );
    }
};

Component.propTypes = {
    currency: PropTypes.object.isRequired,
    fiat: PropTypes.string.isRequired,
    fetchCurrency: PropTypes.func.isRequired
};

export default Component;

