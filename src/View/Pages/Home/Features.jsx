import { HashLink as Link } from 'react-router-hash-link';
import { Fade } from 'react-awesome-reveal';

import launch from './../../../Assets/images/launch.jpg';
import invest from './../../../Assets/images/invest.jpg';
import trade from './../../../Assets/images/trade.jpg';
import automate from './../../../Assets/images/automate.jpg';
import Heading3 from '../../Components/Heading/Heading3';
import { fadeIn, slideInLeft, slideInRight } from '../../../keyframes';
function FeatureBox(props) {
    return <div className={`feature_box ${props.class}`}>
       <Link to={`/home#${props.feature.toLowerCase()}`}><h2>{props.number}</h2></Link>
        <Link to={`/home#${props.feature.toLowerCase()}`}>{props.feature}</Link>
    </div>
    
}
// function FeatureDeescription(props) {
//     return <div className={`feature_desc_box ${props.class}`}>
//            <h2>{props.number}</h2>
//            <span>{props.feature}</span>
//        </div>
//    }
export default function Features() {
    return <><section className="features">
        <div className="container">
            <Fade triggerOnce delay={300}>
                <div className="heading-wraper justify-content-center no-icon">
                    <Heading3 title="Features" back="true" backcolor="bg_darkblue" />
                </div>
            </Fade>
            <div className="feature_container">
                <Fade triggerOnce delay={300}>
                    <FeatureBox number="1" feature="Launch" class="bg_pink" />
                </Fade>

                <Fade triggerOnce delay={300}>
                    <FeatureBox number="2" feature="Invest" class="bg_blue" />
                </Fade>

                <Fade triggerOnce delay={300}>
                    <FeatureBox number="3" feature="Trade" class="bg_yellow" />
                </Fade>

                <Fade triggerOnce delay={300}>
                    <FeatureBox number="4" feature="Automate" class="bg_lightwhite feature_blue" />
                </Fade>
            </div>
        </div>
    </section>
        <section className="features_description">
            <div className="container">
                <div className="row launch_row" id="launch">
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_content`}>
                                {/* <h2 className='heading_md text_white mt-4 heading_pink_border text-left'><span>1</span>Launch</h2> */}
                                <div className="heading-wraper justify-content-center">
                                    <Heading3 number="1" title="Launch" back="true" backcolor="bg_pink" headclass="blue_heading head_mar" />
                                </div>
                                <span className="paragraph_md content_text"> Participate in initial Game Offerings (IGOs) of the best upcoming games </span>
                                <div className="content_point paragraph_md content_text">
                                    <ul>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Be an early explorer and reap the rewards of investing early in land/heroes/gear/mounts/vehicles and other assets</li>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Accumulate in-game currency at huge discounts</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_img`}>
                                <img src={launch} alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>

                <div className="row" id="invest">
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_content`}>
                                {/* <h2 className='heading_md text_white mt-4 heading_pink_border text-left'><span>1</span>Launch</h2> */}
                                <div className="heading-wraper justify-content-center">
                                    <Heading3 number="2" title="Invest" back="true" backcolor="bg_blue" headclass="blue_heading head_mar invest_header" />
                                </div>
                                <span className="paragraph_md content_text"> Invest in our specially curated vaults of gaming assets and earn from the metaverse without the learning curve </span>
                                <div className="content_point blue paragraph_md content_text">
                                    <ul>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Be an early investor in a vault and gain maximal benefit from a vault strategy </li>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>No NFT floor prices here. Invest any amount you want.</li>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Get access to a highly liquid asset while still getting the benefits of yield from game NFTs </li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_img blue`}>
                                <img src={invest} alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="row trade_row" id="trade">
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_content`}>
                                {/* <h2 className='heading_md text_white mt-4 heading_pink_border text-left'><span>1</span>Launch</h2> */}
                                <div className="heading-wraper justify-content-center">
                                    <Heading3 number="3" title="Trade" back="true" backcolor="bg_yellow" headclass="blue_heading head_mar" />
                                </div>
                                <span className="paragraph_md content_text"> The best trading platform for Gaming NFTs across the metaverse </span>
                                <div className="content_point yellow paragraph_md content_text">
                                    <ul>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Trade and manage your game investments across games in 1 dashboard </li>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Issue buy/sell/limit/auction orders from our dashboard across multiple games </li>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Get detailed analytics and get an edge in your trading strategy </li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_img yellow`}>
                                <img src={trade} alt="trade" />
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="row" id="automate">
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_content`}>
                                {/* <h2 className='heading_md text_white mt-4 heading_pink_border text-left'><span>1</span>Launch</h2> */}
                                <div className="heading-wraper justify-content-center">
                                    <Heading3 number="4" title="Automate" back="true" backcolor="bg_darkblue" headclass="blue_heading head_mar automate_header" />
                                </div>
                                <span className="paragraph_md content_text"> 10x your GameFi yield farming  </span>
                                <div className="content_point white paragraph_md content_text">
                                    <ul>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Use our composable action blocks for different game contracts to maximize your farming strategy </li>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Automate your yield farming activities and leave nothing to waste </li>
                                        <li><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2234 9.88235L12.8481 10.5153L16.0988 13.8556C16.2745 14.1017 16.3389 14.3772 16.2921 14.6819C16.2452 14.9866 16.1046 15.2269 15.8704 15.4027L12.4264 18.0223C12.1921 18.1981 11.9315 18.2625 11.6445 18.2157C11.3575 18.1688 11.1261 18.0223 10.9504 17.7761L9 13.6798L7.04959 17.7761C6.87388 18.0223 6.64252 18.1688 6.35553 18.2157C6.06853 18.2625 5.80789 18.1981 5.5736 18.0223L2.12964 15.4027C1.89535 15.2269 1.75478 14.9866 1.70793 14.6819C1.66107 14.3772 1.7255 14.1017 1.90121 13.8556L5.15189 10.5153L0.77665 9.88235C0.483795 9.78858 0.267083 9.60691 0.126513 9.33734C-0.014057 9.06777 -0.0374854 8.79234 0.056228 8.51104L1.44436 4.36197C1.53807 4.06895 1.72257 3.85505 1.99785 3.72026C2.27314 3.58548 2.5572 3.56497 2.85006 3.65873L6.3116 5.39923L5.62632 1.35564C5.62632 1.05091 5.7376 0.787195 5.96017 0.564505C6.18274 0.341814 6.44631 0.230469 6.75088 0.230469H11.2491C11.5537 0.230469 11.8173 0.341814 12.0398 0.564505C12.2624 0.787195 12.3737 1.05091 12.3737 1.35564L11.6884 5.39923L15.1499 3.65873C15.4428 3.56497 15.7269 3.58548 16.0021 3.72026C16.2774 3.85505 16.4619 4.06895 16.5556 4.36197L17.9438 8.51104C18.0375 8.79234 18.0141 9.06777 17.8735 9.33734C17.7329 9.60691 17.5162 9.78858 17.2234 9.88235Z" />
                                        </svg>Not interested in coding? No problem. Post a bounty to engage the community to help you create the perfect farming routine.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6">
                        <Fade triggerOnce delay={300}>
                            <div className={`feature_desc_img white`}>
                                <img src={automate} alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    </>
}