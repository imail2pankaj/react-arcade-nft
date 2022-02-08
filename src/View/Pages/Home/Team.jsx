import React from 'react';
import Heading3 from '../../Components/Heading/Heading3';
import Linkedin from './../../../Assets/images/linkedin.svg';
import Twitter from './../../../Assets/images/twitter.svg';
import Player1 from './../../../Assets/images/player1.jpg';
import Player2 from './../../../Assets/images/player2.jpg';
import Player3 from './../../../Assets/images/player3.jpg';
import Player4 from './../../../Assets/images/player4.jpg';
import Player5 from './../../../Assets/images/player5.jpg';
import Player6 from './../../../Assets/images/player6.jpg';
import { Fade } from 'react-awesome-reveal';
function TeamBox(props) {
    return <div className={`team_box text-center ${props.class}`}>
        <div className="team_img">
            <img src={props.image} alt="" />
        </div>
        <h4 className='player'>{props.player}</h4>
        <p className='position'>{props.position}</p>
        
    </div>
}

export default function Team() {
    return <div className='team'>
        <div className="container">
            <div className="heading-wraper">
                <Fade triggerOnce delay={300}>
                    <Heading3 title="Team" back="true" backcolor="bg_lightblue" headclass="pink_heading" />
                </Fade>
            </div>
            <div className="team_row">
                <Fade triggerOnce delay={300}>
                    <TeamBox image={Player1} player="Player1" position="CEO" class="active" />
                </Fade>
                <Fade triggerOnce delay={300}>
                    <TeamBox image={Player2} player="Player2" position="CCO" />
                </Fade>
                <Fade triggerOnce delay={300}>
                    <TeamBox image={Player3} player="Player3" position="CTO" />
                </Fade>
                <Fade triggerOnce delay={300}>
                    <TeamBox image={Player4} player="Player4" position="COO" />
                </Fade>
                <Fade triggerOnce delay={300}>
                    <TeamBox image={Player5} player="Player5" position="Lead Developer" />
                </Fade>
                <Fade triggerOnce delay={300}>
                    <TeamBox image={Player6} player="Player6" position="Head of Marketing & Community" />
                </Fade>
            </div>
        </div>
    </div>
}