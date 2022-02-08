import React from 'react';
import Logo from './../../../Assets/images/logo.svg'
import LogoBlue from './../../../Assets/images/logo_blue.svg'
import './Footer.scss'
import { Link, useLocation } from 'react-router-dom'


export default function Footer() {
    const location = useLocation();
    const { pathname } = location;
    const CurrentLocation = pathname.split("/");
    return <footer className={`${CurrentLocation[1] === "idosales" ? "idosalesfooter" : ""}`}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="logo">
                        {CurrentLocation[1] === "idosales" ?
                            <img src={LogoBlue} alt="logo" />
                            :
                            <img src={Logo} alt="logo" />
                        }
                        <p className='logo_desc paragraph_sm text_white'>There is no dedicated launchpad for GameFi projects that provides a first class user-experience that gamers understand.</p>
                    </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="follow_us">
                        <h5>Follow Us</h5>
                        <div className="links">
                          
                            <a href="https://discord.gg/5mhuNVhRke">Discord</a>
                            <a href="https://twitter.com/arcadegamefi">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="copy_right">
                        <span className=''>Copyright &copy; 2022 Arcade  -  All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}
