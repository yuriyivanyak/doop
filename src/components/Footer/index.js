import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrap, FooterLinkItems, FooterLinksTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'



const Footer = () =>  {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrap>
                        <FooterLinkItems>
                            <FooterLinksTitle>About Us </FooterLinksTitle>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinksTitle>About Us </FooterLinksTitle>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrap>
                    <FooterLinksWrap>
                        <FooterLinkItems>
                            <FooterLinksTitle>About Us </FooterLinksTitle>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinksTitle>About Us </FooterLinksTitle>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrap>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome} >dolla </SocialLogo>
                        <WebsiteRights>dolla @ {new Date().getFullYear()} All Right Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"> <FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"> <FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube"> <FaYoutube /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"> <FaTwitter /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn"> <FaLinkedin /></SocialIconLink>    
                        </SocialIcons>                    
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer