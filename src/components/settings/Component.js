import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Component = ({fiat, changeFiat}) => {
    const onSelectChange = (e) => {
        changeFiat(e.target.value);
    };

    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-lg-offset-4 col-lg-4 well'>
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

                    <Link to='/' className='btn btn-default'>
                        Go to list
                    </Link>
                </div>
            </div>
        </div>
    );
};

Component.propTypes = {
    fiat: PropTypes.string.isRequired,
    changeFiat: PropTypes.func.isRequired
};

export default Component;

