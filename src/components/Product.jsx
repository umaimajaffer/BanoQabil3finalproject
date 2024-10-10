import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DATA from '../Data'; // Make sure to import your DATA
import './Product.css'; // Import your CSS file

const Product = () => {
    const navigate = useNavigate();

    const handleBuyNow = (itemId) => {
        const isLoggedIn = localStorage.getItem('userEmail');

        if (!isLoggedIn) {
            const modal = new window.bootstrap.Modal(document.getElementById('loginModal'));
            modal.show();
        } else {
            navigate(`/products/${itemId}`);
        }
    };

    const cardItem = (item) => {
        return (
            <div className="col-4 my-2" key={item.id}>
                <div className="card">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <button
                            onClick={() => handleBuyNow(item.id)}
                            className="btn btn-outline-custom"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="products-title">PRODUCTS</h1>
                        <hr />
                    </div>
                </div>
            </div>

            {/* Smartphones Section */}
            <div>
                <h2 className="section">Smartphones</h2>
                <div className="row justify-content-center">
                    {DATA.filter(item => item.title.startsWith('IPhone')).map(cardItem)}
                </div>
                <hr />
            </div>

            {/* Earbuds Section */}
            <div>
                <h2 className="section">Earbuds</h2>
                <div className="row justify-content-center">
                    {DATA.filter(item => item.title.startsWith('AirBuds')).map(cardItem)}
                </div>
                <hr />
            </div>

            {/* iPads Section */}
            <div>
                <h2 className="section">iPads</h2>
                <div className="row justify-content-center">
                    {DATA.filter(item => item.title.startsWith('iPad')).map(cardItem)}
                </div>
                <hr />
            </div>

            {/* MacBooks Section */}
            <div>
                <h2 className="section">MacBooks</h2>
                <div className="row justify-content-center">
                    {DATA.filter(item => item.title.startsWith('MacBook')).map(cardItem)}
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Product;
