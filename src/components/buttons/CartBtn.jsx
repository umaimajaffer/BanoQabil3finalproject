import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CartBtn.css'; // Import the new CSS file
import { FaShoppingCart } from 'react-icons/fa';

const CartBtn = () => {
    // Access the state of addItem from Redux store
    const state = useSelector((state) => state.addItem);

    return (
        <NavLink to="/cart" className="cart-button">
            <FaShoppingCart className="cart-icon"/> Cart ({state.reduce((total, item) => total + item.quantity, 0)})
        </NavLink>
    );
}

export default CartBtn;




