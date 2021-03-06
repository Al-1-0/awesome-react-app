import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
           {<video src="./videos/video-2.mp4" autoPlay loop muted />}
           <h1>Enzinet Are Here</h1>
           <p>To Offer You Affordable Web & Digital Services. </p>
           <div className="hero-btns">
               <Button className='btns' buttonStyle='btn--outline'
               buttonSize='btn--large'>CONTACT US</Button>
               {/*<Button className='btns' buttonStyle='btn--primary'
               buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' />
    </Button>*/}

           </div>
    
        </div>
    )
}

export default HeroSection
