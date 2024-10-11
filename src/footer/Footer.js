import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">
                    <h1>LUXURY</h1>
                    <p>4977 Exemplar Blvd Roseville, CA 95678</p>
                    <p>+1 234 567 8901</p>
                    <p>luxury.hotel@gmail.com</p>
                </div>
                <div className="footer-center">
                    <h3>About Us</h3>
                    <h3>Contact</h3>
                    <h3>Terms & Conditions</h3>
                </div>
                <div className="footer-right">
                    <h3>Subscribe to our newsletter</h3>
                    <input type="email" placeholder="Email Address" />
                    <button>OK</button>
                    <div className="social-media">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;