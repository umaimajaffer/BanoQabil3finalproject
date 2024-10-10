import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem, incrementItem } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Import custom CSS for Cart

const Cart = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // For programmatic navigation

    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    const handleIncrement = (item) => {
        dispatch(incrementItem(item));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch({ type: 'DECREMENT_ITEM', payload: item });
        } else {
            handleClose(item); // Remove item if quantity is 1 and decrement is pressed
        }
    };

    const handleProceedToCheckout = () => {
        const isLoggedIn = false; // Replace with logic to check if the user is logged in (e.g., from state or context)
        if (isLoggedIn) {
            navigate('/checkout'); // If logged in, proceed to checkout
        } else {
            navigate('/login'); // If not logged in, redirect to login
        }
    };

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 cart-item" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} className="cart-item-img" />
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold product-price">${cartItem.price}</p> {/* Centered price */}
                            <div className="d-flex align-items-center justify-content-center">
                                <button onClick={() => handleDecrement(cartItem)} className="btn decrement-btn me-2">-</button>
                                <span>{cartItem.quantity}</span>
                                <button onClick={() => handleIncrement(cartItem)} className="btn increment-btn ms-2">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5 empty-cart">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    };

    const totalPrice = () => {
        return state.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <h4 className="text-end">Total Price: ${totalPrice().toFixed(2)}</h4>
                    <button 
                        onClick={handleProceedToCheckout} 
                        className="btn proceed-btn mb-5 w-25 mx-auto"
                    >
                        Proceed To Bill
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
}

export default Cart;
