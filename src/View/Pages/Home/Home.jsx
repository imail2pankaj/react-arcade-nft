import React, { useEffect, useLayoutEffect } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Hero from './Hero';
import Features from './Features';
import Roadmap from './Roadmap';
import WhyArcade from './WhyArcade';
import Team from './Team';
import Partners from './Partners';
import StartSoon from './StartSoon';
import Footer from '../../Components/Footer/Footer';
import './Home.scss'

export default function Home() {
  useLayoutEffect(() => {
    document.querySelector('body').classList.remove('loaded');
  }, [])

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('body').classList.add('loaded');
    }, 800);
  }, [])

  return <div className="home">
    <div className="dot-wrapper">
      <div className="custom-dot"></div>
    </div>
    <Navigation />
    <Hero />
    <Features />
    <Roadmap />
    <WhyArcade />
    <Team />
    <Partners />
    <StartSoon />
    <Footer />
  </div>;
}
