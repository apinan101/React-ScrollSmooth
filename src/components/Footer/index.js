import React from "react";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
  SocialIconLink
} from "./FooterElements";

import {FaFacebook,FaYoutube,FaInstagram,FaLine,FaLinkedin,FaTwitter} from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';

 
const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/" onClick={toggleHome}>
                    React
                </SocialLogo>
                <WebsiteRights > {new Date().getFullYear()}
                All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Facebook"> <FaFacebook/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Instargram"> <FaInstagram/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Youtube" > <FaYoutube/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Twitter" > <FaTwitter/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Line" > <FaLine/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Linkedin" > <FaLinkedin/></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
