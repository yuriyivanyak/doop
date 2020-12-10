import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonEmelents'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrap, ArrowForward, ArrowRight} from './HeroElements'
import {animateScroll as scroll} from 'react-scroll' 

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account and receive 250$ in 
                    credit towards your
                    next payment.
                </HeroP>
                <HeroBtnWrap>
                    <Button to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary="true" dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection