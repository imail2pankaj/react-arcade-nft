import React from 'react';
import Reveal, { Fade } from 'react-awesome-reveal';

import Time from '../../Components/Time/Time';
import Heading from '../../Components/Heading/Heading';
import Heading2 from '../../Components/Heading/Heading2';

import { fadeInUpShorter } from '../../../keyframes';

export default function Hero() {
    return <section className='hero'>
        <Fade delay={800} duration={1200} triggerOnce>
            <div className="container">
                {/* <h2 className='heading_lg text_white mt-4 heading_blue_border'>Insert Coin</h2> */}
                <Reveal triggerOnce keyframes={fadeInUpShorter} delay={500} triggerOnce>
                    <Heading title="Insert Coin" back="true" />
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={700} triggerOnce>
                    <Heading2 title=" for Endless" back="" />
                    <Heading2 title="Opportunities" />
                </Reveal>

                <Reveal keyframes={fadeInUpShorter} delay={900} triggerOnce>
                    <h2 className='heading_lg text_white mt-4 heading_pink_border'></h2>
                    <p className='mt-3 paragraph'>Invest in the Metaverse Starting at $10 </p>
                    <div className="time_container">
                        <Time Date="9" Month="2" dots="true" />
                    </div>
                    <button className='start_soon_btn'>Start Soon</button>
                </Reveal>
            </div>
        </Fade>
    </section>;
}
