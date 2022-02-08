import React from 'react';
import Time from '../../Components/Time/Time';
import Heading from '../../Components/Heading/Heading';
import Heading2 from '../../Components/Heading/Heading2';
import { Fade } from 'react-awesome-reveal';

export default function StartSoon() {
    return <section className='startsoon'>
        <div className="container">
            <Fade triggerOnce delay={300}>
                <Heading2 title="Excited? Want in? Participate" back="" />
            </Fade>
            <Fade triggerOnce delay={300}>
                <Heading2 title="in our IDO. Get airdrops," back="" />
            </Fade>
            <Fade triggerOnce delay={300}>
                <Heading2 title="whitelist and more!" back="" />
            </Fade>
            <Fade triggerOnce delay={300}>
                                <div className="time_container">
                    <Time Date="7" Month="2" dots="true" />
                </div>
            </Fade>
            <Fade triggerOnce delay={300}>
                <div className="start_soon_main">
                    <button className='start_soon_btn'>Start Soon</button>
                </div>
            </Fade>
        </div>
    </section>;
}
