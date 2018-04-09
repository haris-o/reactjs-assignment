import React from 'react';
import {connect} from 'react-redux';
import {changeFiat} from "./actions";

const mapStateToProps = state => {
    return {
        fiat: state.fiat
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeFiat: (fiat) => dispatch(changeFiat(fiat))
    }
};

const Settings = ({fiat, changeFiat}) => {
    const onSelectChange = (e) => {
        changeFiat(e.target.value);
    };

    return (
        <div className='container text-center'>
            <div className='well'>
                <div className="form-group">
                    <label>Selected Fiat:</label>
                    <select
                        className="form-control"
                        onChange={onSelectChange}
                        defaultValue={fiat}
                    >
                        <option value='USD'>USD</option>
                        <option value='EUR'>EUR</option>
                        <option value='CNY'>CNY</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

