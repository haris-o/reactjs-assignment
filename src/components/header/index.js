import React from 'react';
import { Link } from 'react-router-dom';

const Component = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to='/settings' className='btn btn-default'>
                            <span className="glyphicon glyphicon-cog" />
                            <span> Change Currency</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Component;