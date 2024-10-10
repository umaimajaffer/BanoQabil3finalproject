import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import './Header.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Importing user icon
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { logout } from '../redux/actions'; // Import logout action

const Header = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const dispatch = useDispatch(); // Get the dispatch function
    const { isLoggedIn, userInfo } = useSelector(state => state.auth); // Accessing login status and user info from Redux state

    const toggleProfileMenu = () => {
        setShowProfileMenu((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user info from local storage
        dispatch(logout()); // Dispatch logout action
        setShowProfileMenu(false); // Close the menu
        // Optionally redirect or update your state
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: '3px 8px' }}>
                <div className="container-fluid" style={{ padding: 0 }}> {/* Remove additional padding */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand mx-auto title" to="/" style={{ textAlign: 'center', flexGrow: 1 }}>
                            Apple Mart
                        </NavLink>
                        <CartBtn />
                        <div className="navbar-text mx-2 position-relative" style={{ marginLeft: '10px' }}> {/* Add gap between icon and cart button */}
                            <FontAwesomeIcon 
                                icon={faUserCircle} 
                                style={{ cursor: 'pointer', color: 'white', fontSize: '24px' }} // Change color to white and increase font size
                                onClick={toggleProfileMenu} 
                            />
                            {showProfileMenu && (
                                <div className="profile-menu" style={{ color: 'white' }}> {/* Change text color to white */}
                                    {isLoggedIn ? (
                                        <>
                                            <div style={{ color: 'white' }}>Welcome, {userInfo.username}</div> {/* Change text color to white */}
                                            <button 
                                                onClick={handleLogout} 
                                                className="btn btn-link" 
                                                aria-label="Logout" // Added aria-label for accessibility
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <div style={{ color: 'white' }}>Please log in</div> // Comment removed for clarity
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
