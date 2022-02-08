import React, { useState, useEffect, useLayoutEffect } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './StakingDashboard.scss'
import connect_wallet from './../../../Assets/images/connect_wallet.png'
import Heading from '../../Components/Heading/Heading';
import { Link } from 'react-router-dom'



export default function StakingDashboard() {
    const [connect, setConnect] = useState(true);
    const [approve, setApprove] = useState(false);
    const [stake, setStake] = useState(false);
    const [claim, setClaim] = useState(false);
    const [modal, setModal] = useState(false);
    const [success, setSuccess] = useState(false);

    useLayoutEffect(() => {
        document.querySelector('body').classList.remove('loaded');
    }, [])

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('body').classList.add('loaded');
        }, 800);
    }, [])

    const OpenModal = () => {
        setModal(true)
    }
    const Connect = () => {
        setApprove(true)
        setConnect(false)
    }
    const Approve = () => {
        setStake(true)
        setApprove(false)
    }
    const Claim = () => {
        setClaim(true)
        setStake(false)
        setSuccess(false)
        setModal(false)
    }

    const CloseModal = () => {
        setModal(false)
    }
    const OpenSuccess = () => {
        setSuccess(true)
    }
    const CloseSuccess = () => {
        setSuccess(false)
    }
    return <div className='staking_dash_container'>
        <div className="dot-wrapper">
            <div className="custom-dot"></div>
        </div>

        <Navigation connected={connect} />
        <section className="staking_dashboard">
            <div className="container">
                <div className="dash_heading">
                    <h3>Staking Dashboard</h3>
                </div>
                <div className="dash_row">
                    <div className="col_1">
                        <div className="estimate common_box">
                            <div className="dash_title">Estimated Rewards</div>
                            <h2>111%</h2>
                            <span>APR</span>
                        </div>
                        <div className="total_staked common_box">
                            <div className="dash_title">Total Staked</div>
                            <div className="total_stack_box">
                                <h2>0000000000<span>LOOP</span></h2>
                                <p>$ 00000</p>
                            </div>
                        </div>
                        {
                            connect ?
                                <div className="my_stake common_box">
                                    <div className="dash_title text_white">My Stake</div>
                                    <div className="my_stack_row">
                                        <div className="my_stack_box">
                                            <span className='title'>Total Staked</span>
                                            <h2>0000000000</h2>
                                        </div>
                                        <div className="my_stack_box">
                                            <span className='title'>Available In Wallet</span>
                                            <h2 className=''>0000000000</h2>
                                        </div>
                                    </div>
                                    <div className="connect_wallet">
                                        <button onClick={Connect}>Connect to wallet</button>
                                    </div>
                                    <img src={connect_wallet} alt="" className="conntect_wall_image" />
                                </div>
                                : ""
                        }
                        {
                            approve ?
                                <div className="my_stake connected_stake common_box">
                                    <div className="dash_title text_white">
                                        <span>My Stake</span><div className="hide_number">
                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.0293 -7.53731e-05C19.8931 -0.003991 19.7575 0.0199769 19.6309 0.0703568C19.5043 0.120737 19.3893 0.196465 19.293 0.292893L17.2578 2.32805C15.6877 1.54552 13.9127 0.999925 12 0.999925C8.66667 0.999925 5.73358 2.63155 3.61914 4.34953C2.56192 5.20852 1.70591 6.0941 1.09375 6.8593C0.78767 7.2419 0.542283 7.59243 0.357422 7.91594C0.172561 8.23945 0 8.45826 0 8.99992C0 9.54159 0.172561 9.7604 0.357422 10.0839C0.542283 10.4074 0.78767 10.7579 1.09375 11.1405C1.70591 11.9057 2.56192 12.7913 3.61914 13.6503C4.03176 13.9856 4.48322 14.3136 4.95508 14.6308L3.29297 16.2929C3.10548 16.4804 3.00015 16.7347 3.00015 16.9999C3.00015 17.2651 3.10548 17.5194 3.29297 17.707C3.4805 17.8944 3.73482 17.9998 4 17.9998C4.26518 17.9998 4.5195 17.8944 4.70703 17.707L6.74219 15.6718C8.31229 16.4543 10.0873 16.9999 12 16.9999C15.3333 16.9999 18.2664 15.3683 20.3809 13.6503C21.4381 12.7913 22.2941 11.9057 22.9062 11.1405C23.2123 10.7579 23.4577 10.4074 23.6426 10.0839C23.8274 9.7604 24 9.54159 24 8.99992C24 8.45826 23.8274 8.23945 23.6426 7.91594C23.4577 7.59243 23.2123 7.2419 22.9062 6.8593C22.2941 6.0941 21.4381 5.20852 20.3809 4.34953C19.9682 4.01428 19.5168 3.68626 19.0449 3.36907L20.707 1.70696C20.8945 1.51943 20.9998 1.2651 20.9998 0.999925C20.9998 0.734745 20.8945 0.480424 20.707 0.292893C20.5268 0.112359 20.2843 0.0075516 20.0293 -7.53731e-05ZM12 2.99992C13.2968 2.99992 14.5673 3.32723 15.75 3.83586L12.0684 7.5175C12.0231 7.3487 12.0001 7.1747 12 6.99992C12.0002 6.61507 12.1114 6.23843 12.3203 5.9152C12.5292 5.59198 12.8269 5.33589 13.1777 5.17766C12.7962 5.05997 12.3992 5.00006 12 4.99992C11.9798 4.99977 11.9596 4.99977 11.9395 4.99992C10.8891 5.01583 9.88719 5.44426 9.15009 6.19269C8.41298 6.94112 7.99988 7.94947 8 8.99992C8.00017 9.7144 8.1917 10.4158 8.55469 11.0312L6.39844 13.1874C5.85721 12.8466 5.34745 12.4786 4.88086 12.0995C3.93808 11.3335 3.16909 10.5316 2.65625 9.89055C2.39983 9.57002 2.20772 9.28775 2.0957 9.09172C2.07328 9.05249 2.07384 9.0347 2.06055 8.99992C2.07384 8.96515 2.07328 8.94736 2.0957 8.90813C2.20772 8.7121 2.39983 8.42982 2.65625 8.1093C3.16909 7.46825 3.93808 6.66632 4.88086 5.90032C6.76642 4.3683 9.33333 2.99992 12 2.99992ZM17.6016 4.81242C18.1428 5.15323 18.6525 5.52121 19.1191 5.90032C20.0619 6.66632 20.8309 7.46825 21.3438 8.1093C21.6002 8.42982 21.7923 8.7121 21.9043 8.90813C21.9267 8.94736 21.9262 8.96515 21.9395 8.99992C21.9262 9.0347 21.9267 9.05249 21.9043 9.09172C21.7923 9.28775 21.6002 9.57002 21.3438 9.89055C20.8309 10.5316 20.0619 11.3335 19.1191 12.0995C17.2336 13.6316 14.6667 14.9999 12 14.9999C10.7032 14.9999 9.43271 14.6726 8.25 14.164L9.96875 12.4452C10.5841 12.8082 11.2855 12.9998 12 12.9999C13.0609 12.9999 14.0783 12.5785 14.8284 11.8284C15.5786 11.0782 16 10.0608 16 8.99992C15.9997 8.60133 15.9398 8.20503 15.8223 7.82414C15.6638 8.17461 15.4075 8.47192 15.0843 8.68047C14.7611 8.88901 14.3846 8.99992 14 8.99992C13.8252 8.99985 13.6512 8.97687 13.4824 8.93157L17.6016 4.81242Z" fill="#4BC7CC" />
                                            </svg>
                                            Hide numbers
                                        </div>
                                    </div>
                                    <div className="my_stack_row">
                                        <div className="my_stack_box">
                                            <span className='title'>Total Staked</span>
                                            <h2>0 <div className="loop"><h4>Loop</h4><span className='dot'>.</span><span>$ 00000</span></div></h2>
                                        </div>
                                        <div className="my_stack_box">
                                            <span className='title'>Available In Wallet</span>
                                            <h2>0.0001 <div className="loop"><h4>Loop</h4><span className='dot'>.</span><span>$ 00000</span></div></h2>
                                        </div>
                                    </div>
                                    <div className="approve_loop">
                                        <div className="approve_text">
                                            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 32H0V23.172L7.566 15.606C7.192 14.432 7 13.222 7 12C7 5.382 12.382 0 19 0C25.618 0 31 5.382 31 12C31 18.618 25.618 24 19 24H16V28H12V32ZM4 28H8V24H12V20H19C23.412 20 27 16.412 27 12C27 7.588 23.412 4 19 4C14.588 4 11 7.588 11 12C11 13.118 11.242 14.218 11.718 15.278L12.288 16.54L4 24.828V28ZM19 9.996C20.102 9.996 21 10.894 21 12C21 13.104 20.102 14 19 14C17.898 14 17 13.104 17 12C17 10.894 17.898 9.996 19 9.996ZM19 7.996C16.792 7.996 15 9.788 15 12C15 14.208 16.792 16 19 16C21.21 16 23 14.208 23 12C23 9.79 21.21 7.996 19 7.996Z" fill="#CDADF5" />
                                            </svg>
                                            <p>Allow <a href="#">Stake.axieinfinity.com</a> to make transactions using your LOOP.  </p>
                                        </div>
                                        <div className="approve_btn">
                                            <button onClick={Approve}>Approve Loop</button>
                                        </div>
                                    </div>
                                </div>
                                : ""}
                        {
                            stake ?
                                <div className="my_stake connected_stake stake_unstake common_box">
                                    <div className="dash_title text_white">
                                        <span>My Stake</span><div className="hide_number">
                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.0293 -7.53731e-05C19.8931 -0.003991 19.7575 0.0199769 19.6309 0.0703568C19.5043 0.120737 19.3893 0.196465 19.293 0.292893L17.2578 2.32805C15.6877 1.54552 13.9127 0.999925 12 0.999925C8.66667 0.999925 5.73358 2.63155 3.61914 4.34953C2.56192 5.20852 1.70591 6.0941 1.09375 6.8593C0.78767 7.2419 0.542283 7.59243 0.357422 7.91594C0.172561 8.23945 0 8.45826 0 8.99992C0 9.54159 0.172561 9.7604 0.357422 10.0839C0.542283 10.4074 0.78767 10.7579 1.09375 11.1405C1.70591 11.9057 2.56192 12.7913 3.61914 13.6503C4.03176 13.9856 4.48322 14.3136 4.95508 14.6308L3.29297 16.2929C3.10548 16.4804 3.00015 16.7347 3.00015 16.9999C3.00015 17.2651 3.10548 17.5194 3.29297 17.707C3.4805 17.8944 3.73482 17.9998 4 17.9998C4.26518 17.9998 4.5195 17.8944 4.70703 17.707L6.74219 15.6718C8.31229 16.4543 10.0873 16.9999 12 16.9999C15.3333 16.9999 18.2664 15.3683 20.3809 13.6503C21.4381 12.7913 22.2941 11.9057 22.9062 11.1405C23.2123 10.7579 23.4577 10.4074 23.6426 10.0839C23.8274 9.7604 24 9.54159 24 8.99992C24 8.45826 23.8274 8.23945 23.6426 7.91594C23.4577 7.59243 23.2123 7.2419 22.9062 6.8593C22.2941 6.0941 21.4381 5.20852 20.3809 4.34953C19.9682 4.01428 19.5168 3.68626 19.0449 3.36907L20.707 1.70696C20.8945 1.51943 20.9998 1.2651 20.9998 0.999925C20.9998 0.734745 20.8945 0.480424 20.707 0.292893C20.5268 0.112359 20.2843 0.0075516 20.0293 -7.53731e-05ZM12 2.99992C13.2968 2.99992 14.5673 3.32723 15.75 3.83586L12.0684 7.5175C12.0231 7.3487 12.0001 7.1747 12 6.99992C12.0002 6.61507 12.1114 6.23843 12.3203 5.9152C12.5292 5.59198 12.8269 5.33589 13.1777 5.17766C12.7962 5.05997 12.3992 5.00006 12 4.99992C11.9798 4.99977 11.9596 4.99977 11.9395 4.99992C10.8891 5.01583 9.88719 5.44426 9.15009 6.19269C8.41298 6.94112 7.99988 7.94947 8 8.99992C8.00017 9.7144 8.1917 10.4158 8.55469 11.0312L6.39844 13.1874C5.85721 12.8466 5.34745 12.4786 4.88086 12.0995C3.93808 11.3335 3.16909 10.5316 2.65625 9.89055C2.39983 9.57002 2.20772 9.28775 2.0957 9.09172C2.07328 9.05249 2.07384 9.0347 2.06055 8.99992C2.07384 8.96515 2.07328 8.94736 2.0957 8.90813C2.20772 8.7121 2.39983 8.42982 2.65625 8.1093C3.16909 7.46825 3.93808 6.66632 4.88086 5.90032C6.76642 4.3683 9.33333 2.99992 12 2.99992ZM17.6016 4.81242C18.1428 5.15323 18.6525 5.52121 19.1191 5.90032C20.0619 6.66632 20.8309 7.46825 21.3438 8.1093C21.6002 8.42982 21.7923 8.7121 21.9043 8.90813C21.9267 8.94736 21.9262 8.96515 21.9395 8.99992C21.9262 9.0347 21.9267 9.05249 21.9043 9.09172C21.7923 9.28775 21.6002 9.57002 21.3438 9.89055C20.8309 10.5316 20.0619 11.3335 19.1191 12.0995C17.2336 13.6316 14.6667 14.9999 12 14.9999C10.7032 14.9999 9.43271 14.6726 8.25 14.164L9.96875 12.4452C10.5841 12.8082 11.2855 12.9998 12 12.9999C13.0609 12.9999 14.0783 12.5785 14.8284 11.8284C15.5786 11.0782 16 10.0608 16 8.99992C15.9997 8.60133 15.9398 8.20503 15.8223 7.82414C15.6638 8.17461 15.4075 8.47192 15.0843 8.68047C14.7611 8.88901 14.3846 8.99992 14 8.99992C13.8252 8.99985 13.6512 8.97687 13.4824 8.93157L17.6016 4.81242Z" fill="#4BC7CC" />
                                            </svg>
                                            Hide numbers
                                        </div>
                                    </div>
                                    <div className="my_stack_row">
                                        <div className="my_stack_box">
                                            <span className='title'>Total Staked</span>
                                            <h2>0 <div className="loop"><h4>Loop</h4><span className='dot'>.</span><span>$ 00000</span></div></h2>
                                        </div>
                                        <div className="my_stack_box">
                                            <span className='title'>Available In Wallet</span>
                                            <h2>0.0001 <div className="loop"><h4>Loop</h4><span className='dot'>.</span><span>$ 00000</span></div></h2>
                                        </div>
                                    </div>
                                    <div className="stake_unstake_action">
                                        <button className='stake' onClick={OpenModal}>Stake</button>
                                        <button className='unstake'>Unstake</button>
                                    </div>
                                </div>
                                :
                                ""
                        }
                        {
                            claim ?
                                <div className="my_stake connected_stake stake_unstake claim common_box">
                                    <div className="dash_title text_white">
                                        <span>My Stake</span><div className="hide_number">
                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.0293 -7.53731e-05C19.8931 -0.003991 19.7575 0.0199769 19.6309 0.0703568C19.5043 0.120737 19.3893 0.196465 19.293 0.292893L17.2578 2.32805C15.6877 1.54552 13.9127 0.999925 12 0.999925C8.66667 0.999925 5.73358 2.63155 3.61914 4.34953C2.56192 5.20852 1.70591 6.0941 1.09375 6.8593C0.78767 7.2419 0.542283 7.59243 0.357422 7.91594C0.172561 8.23945 0 8.45826 0 8.99992C0 9.54159 0.172561 9.7604 0.357422 10.0839C0.542283 10.4074 0.78767 10.7579 1.09375 11.1405C1.70591 11.9057 2.56192 12.7913 3.61914 13.6503C4.03176 13.9856 4.48322 14.3136 4.95508 14.6308L3.29297 16.2929C3.10548 16.4804 3.00015 16.7347 3.00015 16.9999C3.00015 17.2651 3.10548 17.5194 3.29297 17.707C3.4805 17.8944 3.73482 17.9998 4 17.9998C4.26518 17.9998 4.5195 17.8944 4.70703 17.707L6.74219 15.6718C8.31229 16.4543 10.0873 16.9999 12 16.9999C15.3333 16.9999 18.2664 15.3683 20.3809 13.6503C21.4381 12.7913 22.2941 11.9057 22.9062 11.1405C23.2123 10.7579 23.4577 10.4074 23.6426 10.0839C23.8274 9.7604 24 9.54159 24 8.99992C24 8.45826 23.8274 8.23945 23.6426 7.91594C23.4577 7.59243 23.2123 7.2419 22.9062 6.8593C22.2941 6.0941 21.4381 5.20852 20.3809 4.34953C19.9682 4.01428 19.5168 3.68626 19.0449 3.36907L20.707 1.70696C20.8945 1.51943 20.9998 1.2651 20.9998 0.999925C20.9998 0.734745 20.8945 0.480424 20.707 0.292893C20.5268 0.112359 20.2843 0.0075516 20.0293 -7.53731e-05ZM12 2.99992C13.2968 2.99992 14.5673 3.32723 15.75 3.83586L12.0684 7.5175C12.0231 7.3487 12.0001 7.1747 12 6.99992C12.0002 6.61507 12.1114 6.23843 12.3203 5.9152C12.5292 5.59198 12.8269 5.33589 13.1777 5.17766C12.7962 5.05997 12.3992 5.00006 12 4.99992C11.9798 4.99977 11.9596 4.99977 11.9395 4.99992C10.8891 5.01583 9.88719 5.44426 9.15009 6.19269C8.41298 6.94112 7.99988 7.94947 8 8.99992C8.00017 9.7144 8.1917 10.4158 8.55469 11.0312L6.39844 13.1874C5.85721 12.8466 5.34745 12.4786 4.88086 12.0995C3.93808 11.3335 3.16909 10.5316 2.65625 9.89055C2.39983 9.57002 2.20772 9.28775 2.0957 9.09172C2.07328 9.05249 2.07384 9.0347 2.06055 8.99992C2.07384 8.96515 2.07328 8.94736 2.0957 8.90813C2.20772 8.7121 2.39983 8.42982 2.65625 8.1093C3.16909 7.46825 3.93808 6.66632 4.88086 5.90032C6.76642 4.3683 9.33333 2.99992 12 2.99992ZM17.6016 4.81242C18.1428 5.15323 18.6525 5.52121 19.1191 5.90032C20.0619 6.66632 20.8309 7.46825 21.3438 8.1093C21.6002 8.42982 21.7923 8.7121 21.9043 8.90813C21.9267 8.94736 21.9262 8.96515 21.9395 8.99992C21.9262 9.0347 21.9267 9.05249 21.9043 9.09172C21.7923 9.28775 21.6002 9.57002 21.3438 9.89055C20.8309 10.5316 20.0619 11.3335 19.1191 12.0995C17.2336 13.6316 14.6667 14.9999 12 14.9999C10.7032 14.9999 9.43271 14.6726 8.25 14.164L9.96875 12.4452C10.5841 12.8082 11.2855 12.9998 12 12.9999C13.0609 12.9999 14.0783 12.5785 14.8284 11.8284C15.5786 11.0782 16 10.0608 16 8.99992C15.9997 8.60133 15.9398 8.20503 15.8223 7.82414C15.6638 8.17461 15.4075 8.47192 15.0843 8.68047C14.7611 8.88901 14.3846 8.99992 14 8.99992C13.8252 8.99985 13.6512 8.97687 13.4824 8.93157L17.6016 4.81242Z" fill="#4BC7CC" />
                                            </svg>
                                            Hide numbers
                                        </div>
                                    </div>
                                    <div className="my_stack_row">
                                        <div className="my_stack_box">
                                            <span className='title'>Total Staked</span>
                                            <h2>0 <div className="loop"><h4>Loop</h4><span className='dot'>.</span><span>$ 00000</span></div></h2>
                                        </div>
                                        <div className="my_stack_box">
                                            <span className='title'>Available In Wallet</span>
                                            <h2>0.0001 <div className="loop"><h4>Loop</h4><span className='dot'>.</span><span>$ 00000</span></div></h2>
                                        </div>
                                    </div>
                                    <div className="locked_box">
                                        <div className="locked">
                                            <span>Locked</span>
                                            <h2>0 LOOP</h2>
                                        </div>
                                        <div className="locked_btn">
                                            <button className='retake'>Retake</button>
                                            <button>Claim</button>
                                        </div>
                                    </div>
                                    <div className="stake_unstake_action ">
                                        <button className='stake' onClick={OpenModal}>Stake</button>
                                        <button className='unstake'>Unstake</button>
                                    </div>
                                </div>
                                :
                                ""
                        }
                    </div>
                    <div className="col_2">
                        <div className="mystaking common_box">
                            <div className="dash_title">My Staking</div>
                            <div className="staking_box_row">
                                <div className="staking_box">
                                    <span className='title'>Price</span>
                                    <h2>$00000 <div className='grow'><span><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L5.8 6L9 9.33333L17 1" stroke="#189E35" strokeWidth="1.35" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 6V1H12" stroke="#189E35" strokeWidth="1.35" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>2.75%</span></div></h2>
                                </div>
                                <div className="staking_box">
                                    <span className='title'>Daily Rewards</span>
                                    <h2>0000000000</h2>
                                </div>
                                <div className="staking_box">
                                    <span className='title'>Circulating Supply</span>
                                    <h2>0000000000</h2>
                                </div>
                            </div>
                        </div>
                        <div className="reward_unclaimed common_box">
                            <div className="dash_title">Total Reward unclaimed</div>
                            <div className="reward_row">
                                <div className="reward_box">
                                    <span className='title'>Locked</span>
                                    <h2>0000000000</h2>
                                </div>
                                <div className="reward_box">
                                    <span className='title'>UnLocked</span>
                                    <h2 className='text_pink'>0000000000</h2>
                                </div>
                            </div>
                            <div className="claim_reward">
                                <button>Claim Reward</button>
                            </div>
                            <div className="reward_table">
                                <table className='table table-responsive'>
                                    <thead>
                                        <tr className='tbl_head'>
                                            <th>Release</th>
                                            <th>Unlocking</th>
                                            <th>USD Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>02-17-2022</td>
                                            <td>10 tokens</td>
                                            <td>$80</td>
                                        </tr>
                                        <tr>
                                            <td>02-22-2022</td>
                                            <td>5 tokens</td>
                                            <td>$40</td>
                                        </tr>
                                        <tr>
                                            <td>02-27-2022</td>
                                            <td>5 tokens</td>
                                            <td>$40</td>
                                        </tr>
                                        <tr>
                                            <td>03-04-2022</td>
                                            <td>5 tokens</td>
                                            <td>$40</td>
                                        </tr>
                                        <tr>
                                            <td>03-09-2022</td>
                                            <td>5 tokens</td>
                                            <td>$40</td>
                                        </tr>
                                        <tr>
                                            <td>03-14-2022</td>
                                            <td>5 tokens</td>
                                            <td>$40</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <a className='question' href="#">Why does it takes days for me to get my tokens?</a>
                        </div>
                    </div>
                </div>
                <div className="dash_row">
                    <div className="total">


                    </div>

                </div>
            </div>
        </section>
        <div className="stakifng_footer">
            <p>Copyright © 2021 Arcade. All rights reserved <div className="footer_links"><a href="#">Terms of Use</a><a href="#">Privacy Policy</a></div></p>
        </div>

        {/* Popup */}

        {
            modal ?
                <section className='dashboard_modal'>
                    <div className="popup">
                        <div className="modal_heading">
                            <div className="heading-wraper justify-content-center">
                                <Heading title="Stake" back="true" />
                            </div>
                            <div className="close" onClick={CloseModal}>
                                <span>+</span>
                            </div>
                        </div>
                        <div className="amount_main">
                            <div className="amount amount_box">
                                <p>Amount</p>
                                <h2>0.0001</h2>
                            </div>
                            <div className="available amount_box">
                                <p>Available: 148.14 Loop</p>
                                <h2><span className='max'>max</span>Loop</h2>
                            </div>
                        </div>
                        <div className="amount_action">
                            <button className='button' onClick={OpenSuccess}>Go To Home</button>
                            {/* <Link className="button" exact to="/home">Go to home</Link> */}
                        </div>
                    </div>
                </section>
                :
                ""
        }
        {
            success ?
                <section className='dashboard_modal'>
                    <div className="popup success_modal">
                        <div className="modal_heading">
                            <div className="heading-wraper justify-content-center">
                                <Heading title="Transaction Submitted" back="true" />
                            </div>
                            <div className="close" onClick={CloseSuccess}>
                                <span>+</span>
                            </div>
                        </div>
                        <div className="dash_modal_text">
                            This may take a few moment to process
                        </div>
                        <div className="success_action">
                            <button className="button" onClick={CloseSuccess}>Close</button>
                            <button className='view' onClick={Claim}>View On Explorer</button>
                            {/* <Link className="view" exact to="/home">View On Explorer</Link> */}
                        </div>
                    </div>
                </section>
                :
                ""
        }
    </div>
}