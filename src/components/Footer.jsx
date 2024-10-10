import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={styles.footerContainer}>
            <div style={styles.iconContainer}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                    <FaLinkedin size={30} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                    <FaYoutube size={30} />
                </a>
            </div>
            <p style={{ ...styles.footerText, textAlign: 'center' }}>Follow us on social media and stay updated!</p>
            <p style={{ ...styles.footerText, textAlign: 'center' }}>© 2024 Your Company. All rights reserved.</p>
        </div>
    );
};

const styles = {
    footerContainer: {
        backgroundColor: 'lightgrey', // Black background
        color: 'black', // White text color
        padding: '20px',
        textAlign: 'center',
        fontfamily: 'Times new roman serif'
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    iconLink: {
        color: 'black',
        margin: '0 15px',
        textDecoration: 'none',
    },
    footerText: {
        margin: '5px 0',
    }
};

export default Footer;
