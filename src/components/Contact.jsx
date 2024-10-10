import React from 'react';
import './Contact.css'; // Ensure to import your CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className="contact-heading">Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assests/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control contact-input" 
                                    id="exampleForm" 
                                    placeholder="John Smith" 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control contact-input" 
                                    id="exampleFormControlInput1" 
                                    placeholder="name@example.com" 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                <textarea 
                                    className="form-control contact-input" 
                                    id="exampleFormControlTextarea1" 
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn contact-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
