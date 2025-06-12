import React from 'react'
import logo from '../../assets/pakbayz-logo.png'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import paymentsLogo from '../../assets/payment.webp'

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='footer-1'>
                <div className='footer-sec-1'>
                    <img src={logo} />
                    <span>Easy and trusted online shop in Pakistan</span>
                    </div>
                <div className='footer-sec-2'>
                    <div>
                    <h3>Follow us on:</h3>
                    </div>
                    <div>
                    <span><FaFacebook /></span>
                    <span><FaSquareInstagram /></span>
                    <span><FaTwitter /></span>
                    <span><FaPinterest /></span>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <div className='footer-2-sec-1'>
                    <span>Need help?</span>
                    <ul>
                        <li>WhatsApp +92 123 456789</li>
                        <li>Email us info@abc.pk</li>
                        <li><button>Order on WhatsApp</button></li>
                        <li><span>Join Our Newsletter</span></li>
                    </ul>
                    <form action="#">
                    <input type='text' placeholder='Email' />
                    <button>Submit</button>
                    </form>
                </div>
                <div className='footer-2-sec-2'>
                    <span>Quick Links</span>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footer-2-sec-3'>
                    <span>Customers Area</span>
                    <ul>
                        <li>Cart</li>
                        <li>Checkout</li>
                        <li>My account</li>
                        <li>Shop</li>
                        <li>Track your Order</li>
                        <li>Wishlist</li>
                    </ul>
                </div>
                <div className='footer-2-sec-4'>
                    <span>Product Categories</span>
                    <ul>
                        <li>Air Mouse</li>
                        <li>Android Smart TV Box</li>
                        <li>Attendance machines</li>
                        <li>Barcode Scanner</li>
                        <li>Bluetooth Devices</li>
                        <li>Cables</li>
                        <li>Cash Drawer</li>
                        <li>Computer Accessories</li>
                        <li>Connectors</li>
                        <li>Converters</li>
                        <li>Currency counting machines</li>
                        <li>Flash Memory</li>
                        <li>Gaming Accessories</li>
                        <li>Health product</li>
                        <li>Computer Accessories</li>
                    </ul>
                </div>
            </div>
            <div className='footer-3'>
                <img src={paymentsLogo} alt="Payments" />
                <span>© Copyright 2025 Pakistan Store clone- All Rights Reserved. | Proudly Designed By Agha Raza Haider.</span>
            </div>
        </div>
    )
}

export default Footer
