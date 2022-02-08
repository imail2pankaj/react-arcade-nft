import React, { useEffect, useLayoutEffect, useState } from 'react';
import './IDOSales.scss';
import Navigation from './../../Components/Navigation/Navigation'
import Footer from './../../Components/Footer/Footer'
import Icon1 from './../../../Assets/images/pro-icon1.svg'
import Icon2 from './../../../Assets/images/pro-icon2.svg'
import Project from './../../../Assets/images/project.svg'
import Heading3 from '../../Components/Heading/Heading3'
import Time from '../../Components/Time/Time';
import Heading from '../../Components/Heading/Heading';
import { Link } from 'react-router-dom'
import Reveal, { Fade } from 'react-awesome-reveal';
import { fadeInUpShorter } from '../../../keyframes';
import Closeicon from './../../../Assets/images/close-icon.png'

export default function IDOSales() {
    const [ready, setReady] = useState(true);
    const [go, setGo] = useState(false);
    const [game, setGame] = useState(false);
    const [progress, setProgress] = useState("91.25%");

    useLayoutEffect(() => {
        document.querySelector('body').classList.remove('loaded');
    }, [])

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('body').classList.add('loaded');
        }, 800);
    }, [])

    const OpenReady = () => {
        setReady(true);
    }
    const CloseReady = () => {
        setReady(false);
    }
    const OpenGo = () => {
        setReady(false);
        setGo(true);
    }
    const CloseGo = () => {
        setGo(false);
    }
    const OpenGame = () => {
        setGo(false);
        setGame(true);
    }
    const CloseGame = () => {
        setGame(false);
    }
    return <div className='idosales'>
        <div className="dot-wrapper">
            <div className="custom-dot"></div>
        </div>

        <Navigation />
        {/* <IDOCountdown /> */}
        <section className="idosales_container">
            {/* {ready ? (<div className='popup-main'>
                <div className="container">
                    <div className='popup-content'>
                        <a href='#' className='close-icon'><img src={Closeicon} alt="" /></a>
                        <div className="heading-wraper">
                            <Fade triggerOnce delay={300}>
                                <Heading3 title="Ready!!!!!" back="true" backcolor="bg_yellow" headclass="blue_heading" />
                            </Fade>
                        </div>
                        <Reveal keyframes={fadeInUpShorter} delay={900} triggerOnce>
                            <div className="time_container">
                                <Time Date="9" Month="2" dots="true" />
                            </div>
                            <p className='mt-3 paragraph'>Be an early explorer and reap the rewards of investing early in land/heroes/gear/mounts/vehicles and other assets</p>
                            <button className='start_soon_btn'>Start Buying</button>
                        </Reveal>
                    </div>
                </div>
            </div>) : ''} */}
            <div className="container">
                <div className="balance">
                    <div className="sol_balance">
                        <h4>SOL BALANCE</h4>
                        <p>Wallet Not Connected</p>
                    </div>
                    <div className="swap">
                        <label htmlFor="">
                            <span>swap</span>
                            <input type="text" placeholder='0' />
                        </label>
                        <button className='claim_btn' onClick={OpenReady}>Claim</button>
                    </div>
                    <div className="tradeon">
                        <button className=''>Trade on Sushiswap</button>
                    </div>
                </div>
                <div className="project_row">
                    <div className="project">
                        <div className="project_heading">
                            <div className='title'>
                                <div className="logo">
                                    <img src={Project} alt="" />
                                </div>
                                <div className="heading-wraper justify-content-center">
                                    <Heading3 title="ARCADE project" back="true" backcolor="bg_yellow" headclass="blue_heading head_mar" />
                                </div>
                            </div>
                            <div className='social_links'>
                                <a href=""><img src={Icon1} alt="" /></a>
                                <a href=""><img src={Icon2} alt="" /></a>
                            </div>
                        </div>
                        <div className="progress_header">
                            <div className="progressbar_container">
                                <div className="progressbar" style={{ width: progress }}></div>
                            </div>
                            <div className="progress_text">
                                <h4 className='progress_header_process'>swan progress : <span>{progress}</span></h4>
                                <h6 className='progress_header_total'>1.268/1390 SOL</h6>
                            </div>
                        </div>
                        <div className="information">
                            <div className="swap_info">
                                <div className="info_head">
                                    <h3>Swap Information</h3>
                                </div>
                                <div className="info_data">
                                    <div className="info_row">
                                        <span className='title'>Cap</span>
                                        <span className='value'>1,390 SOL</span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Swap Ratio</span>
                                        <span className='value'>1 SOL - 2,248.20 WMP</span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Minimum Raise</span>
                                        <span className='value'>300 SOL</span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Your Allocation</span>
                                        <span className='value value_link'><a href="#">Connect Wallet</a></span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Swap Start</span>
                                        <span className='value'>12/19/2021 6:00:00 PM</span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Swap End</span>
                                        <span className='value'>12/22/2021 6:00:00 PM</span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Whitelist</span>
                                        <span className='value'>Applications Closed</span>
                                    </div>
                                </div>
                            </div>
                            <div className="token_info">
                                <div className="info_head">
                                    <h3>Token Information</h3>
                                </div>
                                <div className="info_data">
                                    <div className="info_row">
                                        <span className='title'>Name</span>
                                        <span className='value'>LOOP</span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Token Name</span>
                                        <span className='value'>LOOP</span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Mint Contract</span>
                                        <span className='value'><svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6507 1.78309C12.5637 1.78309 13.4784 2.1308 14.1729 2.82531C15.5646 4.21701 15.5646 6.47887 14.1729 7.86789L7.86879 14.1729C7.17516 14.8674 6.26044 15.216 5.34749 15.216C4.43455 15.216 3.52072 14.8674 2.8262 14.1729C1.43539 12.783 1.43539 10.5194 2.8262 9.13032L3.54568 8.41084C3.54211 9.12854 3.76856 9.76956 4.17065 10.3054L4.08685 10.391C3.39144 11.0855 3.39144 12.2177 4.08685 12.9123C4.43455 13.26 4.89013 13.4329 5.34749 13.4329C5.80486 13.4329 6.26044 13.2591 6.60814 12.9123L8.86821 10.6522L12.9132 6.60725C13.6068 5.91273 13.6068 4.78047 12.9132 4.08596C12.5637 3.73825 12.1072 3.56529 11.6498 3.56529C11.1934 3.56529 10.7378 3.73914 10.3901 4.08596L6.34692 8.1309C6.2328 8.24413 6.21675 8.37607 6.21675 8.44651C6.21675 8.51426 6.23369 8.648 6.34692 8.76122C6.43518 8.84949 6.55019 8.89228 6.66431 8.89228C6.77753 8.89228 6.89076 8.84859 6.97813 8.76211L8.86999 6.87115L10.1306 5.6105C10.4801 5.95998 10.6531 6.41467 10.6531 6.87115C10.6531 7.32673 10.4801 7.78141 10.1324 8.12823L8.23878 10.0228C7.80548 10.4569 7.234 10.6727 6.66252 10.6727C6.09104 10.6727 5.52134 10.4552 5.08538 10.0228C4.66457 9.60017 4.43366 9.04117 4.43366 8.44561C4.43366 7.84828 4.66635 7.28928 5.08627 6.86758L9.12854 2.82442C9.82305 2.1299 10.7378 1.78309 11.6507 1.78309ZM11.6507 0C10.2207 0 8.87802 0.555433 7.86879 1.56466L1.56645 7.87057C0.556325 8.87891 0 10.2225 0 11.6525C0 13.0825 0.556325 14.4252 1.56645 15.4353C2.57478 16.4446 3.91924 17 5.34749 17C6.77575 17 8.1202 16.4437 9.12943 15.4336L15.4336 9.12943C16.4437 8.12109 17 6.77753 17 5.34749C17 3.91834 16.4446 2.57478 15.4353 1.56645C14.4252 0.555433 13.0817 0 11.6507 0Z" />
                                        </svg>
                                            6UZE...8jS6
                                        </span>
                                    </div>
                                    <div className="info_row">
                                        <span className='title'>Tokens Available</span>
                                        <span className='value value_link'>3,124,998 WMP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project_step">
                        <div className="steps">
                            <div className="steps_row">
                                <div className="number"><span>1</span></div>
                                <div className="step_text">
                                    <p>Phase I - Single Purchase<span>(Whitelist)</span></p>
                                </div>
                            </div>
                            <div className="steps_row">
                                <div className="number"><span>2</span></div>
                                <div className="step_text">
                                    <p>Phase II - Single Purchase<span>(First Come First Serve)</span></p>
                                </div>
                            </div>
                            <div className="steps_row">
                                <div className="number"><span>3</span></div>
                                <div className="step_text">
                                    <p>Finished</p>
                                </div>
                            </div>
                        </div>
                        <div className="token">
                            <div className="title">Claim Tokens</div>
                            <button>Claim All</button>
                            <p>Tokens locked until end of raise</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />


        {/* Ready Popup */}

        {
            ready ?
                <section className='Countdown_modal'>
                    <div className="popup">
                        <div className="close" onClick={CloseReady}>
                            <span>+</span>
                        </div>
                        <div className="heading-wraper justify-content-center">
                            <Heading title="Ready!!!!!" back="true" />
                        </div>
                        <div className="time_container">
                            <Time Date="9" Month="2" dots="true"/>
                        </div>
                        <div className="paragraph_md popup_text">
                            <p>
                                Be an early explorer and reap the rewards of investing early in land/heroes/gear/mounts/vehicles and other assets
                            </p>
                        </div>
                        <div className="popup_action">
                            <button onClick={OpenGo}>Start Buying</button>
                        </div>
                    </div>
                </section>
                :
                go ?
                    <section className='Countdown_modal'>
                        <div className="popup go_popup">
                            <div className="close" onClick={CloseGo}>
                                <span>+</span>
                            </div>
                            <div className="heading-wraper justify-content-center">
                                <Heading title="Go!!!!!" back="true" />
                            </div>
                            <div className="time_container">
                                <Time Date="9" Month="2" dots="true" />
                            </div>
                            <div className="paragraph_md popup_text">
                                <p>
                                    Be an early explorer and reap the rewards of investing early in land/heroes/gear/mounts/vehicles and other assets
                                </p>
                            </div>
                            <div className="popup_action">
                                <button onClick={OpenGame}>Start Buying</button>
                            </div>
                        </div>
                    </section>
                    :
                    game ?
                        <section className='Countdown_modal'>
                            <div className="popup game_popup">
                                <div className="close" onClick={CloseGame}>
                                    <span>+</span>
                                </div>
                                <div className="heading-wraper justify-content-center">
                                    <Heading title="Game over!" back="true" />
                                </div>
                                <div className="paragraph_md popup_text">
                                    <p>
                                        Be an early explorer and reap the rewards of investing early in land/heroes/gear/mounts/vehicles and other assets
                                    </p>
                                </div>
                                <div className="popup_action">
                                    <Link className="button" exact to="/home">Go to home</Link>
                                </div>
                            </div>
                        </section>
                        :
                        ""
        }
    </div>
}
