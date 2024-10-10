import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css'; // Import the custom CSS file for the About page

const About = () => {
    return (
        <div className="about-container">
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="about-title text-center mb-4">About Us</h1>
                        <p className="about-text mb-4">
                            Welcome to our online store! We are dedicated to providing you with the best products at affordable prices. 
                            Our team works tirelessly to ensure that you have a seamless shopping experience. 
                            <br />
                            We believe in quality, customer satisfaction, and innovation, which helps us stand out in the competitive market.
                            Whether you’re a tech enthusiast, a fashion lover, or simply looking for great deals, 
                            we’ve got something for everyone. Customer satisfaction is our top priority, 
                            and we are committed to building lasting relationships with our valued customers.
                            <br /><br />
                            Here are some amazing things about us:
                        </p>
                        <ul className="about-list">
                            <li>🌟 <strong className="about-list-heading">Quality Assurance</strong>: We prioritize quality in every product we offer.</li>
                            <li>🌍 <strong className="about-list-heading">Global Shipping</strong>: Shop from anywhere, and we'll deliver to your doorstep.</li>
                            <li>💬 <strong className="about-list-heading">24/7 Customer Support</strong>: Our customer service team is here for you, day and night.</li>
                            <li>🎁 <strong className="about-list-heading">Special Offers</strong>: Sign up for our newsletter to receive exclusive discounts!</li>
                        </ul>
                        <div className="text-center">
                            <NavLink to="/contact" className="btn about-btn">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLjWQkuvpYEfY9erRziaIuyxL7Vkgi55KuVsdz6zVYJe00VZuvw__eXp_P0MtACCYZng&usqp=CAU" 
                             alt="About Us" 
                             className="about-image" 
                             height="400px" 
                             width="400px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
