import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions'; // Adjust the import path to your actions
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the user info from localStorage
        localStorage.removeItem('userInfo'); // Adjust based on how you store user info
        dispatch(clearCart()); // Clear cart if needed
        navigate('/'); // Redirect to home or login page
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'Times New Roman',
            textAlign: 'center'
        }}>
            <h1 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                Thank You for purchasing!
            </h1>
            <h4 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                We hope to see you again soon!
            </h4>
            <button onClick={handleLogout} className="btn btn-danger mt-3">
                Logout
            </button>
        </div>
    );
}

export default ThankYou;
