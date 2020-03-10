import React from 'react';
import { Link } from 'react-router-dom'
const Header = (props) => {
    return (
        <div className="header">
            <div className="header__logo col-sm-12 col-md-5">
                Logo
            </div>
            <div className="header__navigation col-sm-12 col-md-7">
                <nav className="header__navigation__menu">
                    <ul>
                        <li>
                            <Link to="/Home"><i className="fas fa-home animated pulse"></i> Home</Link>
                        </li>
                        <li>
                            <Link to="/About"><i class="fas fa-store-alt"></i> Store</Link>
                        </li>
                        <li>
                            <Link to="/Offers"><i class="fas fa-certificate"></i> Offers</Link>
                        </li>
                        <li>
                            <Link to="/Offers"><i class="fas fa-shipping-fast"></i> Order</Link>
                        </li>
                        <li>
                            <Link to="/Login"><i className="fas fa-user"></i> Login</Link>
                        </li>
                        <li>
                            <Link to="/Contact"><i class="fas fa-shopping-cart"></i> Cart</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__navigation__search">

                </div>
            </div>
        </div>
    )
}

export default Header;