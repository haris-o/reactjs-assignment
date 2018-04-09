import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to='/settings'>
                            <span className="glyphicon glyphicon-cog" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;