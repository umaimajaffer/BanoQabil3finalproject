import React, { useState } from 'react';
import { useParams } from 'react-router';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import './ProductDetail.css'; // Import custom CSS for ProductDetail

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    
    // Get the product id from the URL
    const { id } = useParams();
    const product = DATA.find(x => x.id === parseInt(id));

    // We need to store useDispatch in a variable
    const dispatch = useDispatch();

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product));
            setCartBtn("Remove from Cart");
        } else {
            dispatch(delItem(product));
            setCartBtn("Add to Cart");
        }
    };

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title} className="product-image" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="product-title text-center">{product.title}</h1>
                    <hr />
                    <h2 className="product-price my-4">${product.price}</h2>
                    <p className="product-description lead">{product.desc}</p>
                    <button 
                        onClick={() => handleCart(product)} 
                        className="btn custom-btn my-5"
                    >
                        {cartBtn}
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetail;
