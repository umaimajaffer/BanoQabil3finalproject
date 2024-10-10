import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/actions/index'; // Adjust this path as needed

const Checkout = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    // Use a state variable to hold the total amount
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculate the total whenever the state changes
        const calculatedTotal = state.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotal(calculatedTotal);
    }, [state]);

    const itemList = (item) => {
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                <div>
                    <h6 className="my-0">{item.title}</h6>
                    <small className="text-muted">Quantity: {item.quantity}</small>
                </div>
                <span className="text-muted">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
        );
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [stateOption, setStateOption] = useState('');
    const [zip, setZip] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
        } else {
            // Dispatch clear cart action
            dispatch(clearCart());
            console.log({
                firstName,
                lastName,
                username,
                email,
                address,
                address2,
                country,
                stateOption,
                zip
            });
            navigate('/thank-you');
        }
    };

    return (
        <div className="container my-5" style={{ fontFamily: 'Times New Roman' }}>
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary" style={{ color: 'blue', fontWeight: 'bold' }}>Your cart</span>
                        <span 
    className="badge" 
    style={{ 
        backgroundColor: 'blue', 
        color: 'white', 
        fontWeight: 'bold', 
        borderRadius: '50%', // Make it circular
        width: '30px', // Set width
        height: '30px', // Set height
        display: 'flex', // Use flex to center the text
        alignItems: 'center', // Center vertically
        justifyContent: 'center' // Center horizontally
    }} 
>
    {state.reduce((total, item) => total + item.quantity, 0)}
</span>

                    </h4>
                    <ul className="list-group mb-3">
                        {state.map(itemList)}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${total.toFixed(2)}</strong>
                        </li>
                    </ul>

                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Promo code" 
                            style={{ width: '50%', height: '50%' }} // Align promo code input
                        />
                        <button type="submit" className="btn btn-secondary" style={{ height: '50%', width: '100px', backgroundColor: 'blue', 
        color: 'white' }}>Redeem</button>
                    </div>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3 text-center" style={{ fontWeight: 'bold' }}>Billing Address</h4>
                    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label" style={{ fontWeight: 'bold' }}>First name</label>
                                <input
                                    type="text"
                                    className="form-control border rounded" // Add border and rounded corners
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label" style={{ fontWeight: 'bold' }}>Last name</label>
                                <input
                                    type="text"
                                    className="form-control border rounded" // Add border and rounded corners
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label" style={{ fontWeight: 'bold' }}>Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input
                                        type="text"
                                        className="form-control border rounded" // Add border and rounded corners
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>Email <span className="text-muted">(Optional)</span></label>
                                <input
                                    type="email"
                                    className="form-control border rounded" // Add border and rounded corners
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label" style={{ fontWeight: 'bold' }}>Address</label>
                                <input
                                    type="text"
                                    className="form-control border rounded" // Add border and rounded corners
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address2" className="form-label" style={{ fontWeight: 'bold' }}>Address 2 <span className="text-muted">(Optional)</span></label>
                                <input
                                    type="text"
                                    className="form-control border rounded" // Add border and rounded corners
                                    id="address2"
                                    value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                />
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label" style={{ fontWeight: 'bold' }}>Country</label>
                                <select className="form-select border rounded" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                                    <option value="">Choose...</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Pakistan">India</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label" style={{ fontWeight: 'bold' }}>State</label>
                                <select className="form-select border rounded" id="state" value={stateOption} onChange={(e) => setStateOption(e.target.value)} required>
                                    <option value="">Choose...</option>
                                    <option value="California">California</option>
                                    <option value="Texas">Texas</option>
                                    <option value="New York">New York</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Illinois">Illinois</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label" style={{ fontWeight: 'bold' }}>Zip</label>
                                <input
                                    type="text"
                                    className="form-control border rounded" // Add border and rounded corners
                                    id="zip"
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />


<div className="col-12 d-flex justify-content-center">
    <button 
        className="btn btn-primary btn-lg" 
        type="submit" 
        style={{ backgroundColor: 'blue', color: 'white', borderRadius: '10px', width: '150px' }}>
        FINISH
    </button>
</div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
