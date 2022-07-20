import React from "react";
import logo from '../../images/logo.png';

function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo"></img>
                        </a>
                        <ul className="footer-list">
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">User Agreement</a></li>
                        </ul>
                        <p className="copyright">Copyright 2022 ©Fakeshop.com, All Rights Reserverd.</p>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <h6>India’s Asli Online Shopping Hub</h6>
                        <p>
                            Back in 2011, when people were hopping from one Store to another for best bargains on an overall household’s monthly bill, Fakeshop was being developed as a budget-friendly online bazaar in India. Fakeshop.com was then given a shape and strategy in 2012 as India’s First & Largest Fully Managed Marketplace.
                        </p>

                        <h6>Believable Shopping @ Unbelievable Prices</h6>
                        <p>
                            Every day, Fakeshop delights millions of discount-hunters with Paisa-Vasool Shopping Experience with prices as low as Re.1. We are the first ones to introduce the idea of ‘Sab Kuch Wholesale Ke Rate Par’ on an online platform with shopping options to both wholesale as well as retail seekers.
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;