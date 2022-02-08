import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './Navigation.scss';
import Logo from './../../../Assets/images/logo.svg'
import pdf from './../../../Assets/files/arcade_gamefi_whitepaper_v1.0.pdf'
import LogoBlue from './../../../Assets/images/logo_blue.svg'

export default function Navigation(props) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const CurrentLocation = pathname.split("/");

    useEffect(() => {
        // if(CurrentLocation[1] === "home"){
            window.addEventListener('scroll', isSticky);
            return () => {
                window.removeEventListener('scroll', isSticky);
            };
        // }
    });

    const isSticky = (e) => {
        const header = document.querySelector('.navigation');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('fixed-head') : header.classList.remove('fixed-head');
    };

    const toggleMobileMenu = (e) => {
        setToggleMenu(!toggleMenu);
    };

    return <section className={`navigation ${(CurrentLocation[1] === "home"  || CurrentLocation[1] === "") ? "" : "inner-page idosalesnavigation"}`}>
        <div className="nav container">
            <div className="logo">
                {
                    CurrentLocation[1] === "home" || CurrentLocation[1] === "" ?
                        <NavLink to="/home"><img src={Logo} alt="" /></NavLink>
                        :
                        <NavLink to="/home"><img src={LogoBlue} alt="" /></NavLink>
                }
            </div>
            <div className={`links mobile-nav ${((CurrentLocation[1] === "home"  || CurrentLocation[1] === "") && toggleMenu)||(CurrentLocation[1] === "idosales"&& toggleMenu) ? 'collapsed' : ''} ${((CurrentLocation[1] === "dashboard" && toggleMenu)) ? 'collapsed2' : ''} ${(CurrentLocation[1] === "dashboard" ||CurrentLocation[1] === "idosales")? 'inner-page' : ''} `}>
                <NavLink className="home-menu-item" to="/home">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>

                <a href={pdf} target="_blank">
                    Whitepaper
                </a>



                <div className="cta">
                    <button className='common_btn'>Connect to wallet</button>
                </div>


                {
                    CurrentLocation[1] === "dashboard" ?
                        props.connected === true ?
                            <div className="nav_loop">
                                <div className="wallet"><svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.1673 5.91667H30.584V20.0833H29.1673V24.3333C29.1673 24.7091 29.0181 25.0694 28.7524 25.3351C28.4867 25.6007 28.1264 25.75 27.7507 25.75H2.25065C1.87493 25.75 1.51459 25.6007 1.24892 25.3351C0.98324 25.0694 0.833984 24.7091 0.833984 24.3333V1.66667C0.833984 1.29094 0.98324 0.930609 1.24892 0.664932C1.51459 0.399255 1.87493 0.25 2.25065 0.25H27.7507C28.1264 0.25 28.4867 0.399255 28.7524 0.664932C29.0181 0.930609 29.1673 1.29094 29.1673 1.66667V5.91667ZM26.334 20.0833H17.834C15.9554 20.0833 14.1537 19.3371 12.8253 18.0087C11.4969 16.6803 10.7507 14.8786 10.7507 13C10.7507 11.1214 11.4969 9.31971 12.8253 7.99133C14.1537 6.66294 15.9554 5.91667 17.834 5.91667H26.334V3.08333H3.66732V22.9167H26.334V20.0833ZM27.7507 17.25V8.75H17.834C16.7068 8.75 15.6258 9.19777 14.8288 9.9948C14.0317 10.7918 13.584 11.8728 13.584 13C13.584 14.1272 14.0317 15.2082 14.8288 16.0052C15.6258 16.8022 16.7068 17.25 17.834 17.25H27.7507ZM17.834 11.5833H22.084V14.4167H17.834V11.5833Z" fill="#350272" />
                                </svg>
                                    143 LOOP
                                </div>
                                <div className="name">ronin: 104...FD45S42S4</div>
                            </div>
                            :
                            ""
                        :
                        ""
                }
            </div>


            <button className={`bi bi-list mobile-link ${CurrentLocation[1] === "dashboard" || CurrentLocation[1] === "idosales"? 'inner-toggle' : ''}`} onClick={toggleMobileMenu}>
            </button>
        </div>
    </section>
}
