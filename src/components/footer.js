import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import PhoneSVG from "../images/telephone.svg"
import EmailSVG from "../images/email.svg"
import FacebookSVG from "../images/facebook.svg"

const FooterWrapper = styled.footer`
    padding: 50px 15em;
    background-color: #3E7094;
    position: relative;
    @media only screen and (max-width: 1440px){
        padding: 50px 4em;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        padding: 50px 2em;
    }
    
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1921px){
        margin: 0 auto;
        max-width: 1905px;

    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        margin: 0;
    }
`
const FooterLeft = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`
const FooterRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`
const LeftWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    ul li a{
        color: white;
    }
    ul li:nth-child(5),ul li:nth-child(6){
        margin-left: 10px;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 30px;
    }
`
const RightWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 30px;
    }
`
const MenuTitle = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 800;
`

const KontaktPhone = styled.p`
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img{
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }
    a{
        color: white;
        display: flex;
        align-items: center;
    }
`
const KontaktMail = styled.p`
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img{
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }
    a{
        color: white;
        display: flex;
        align-items: center;
    }
`
const FbLink = styled.a`
    width: 30px;
    height: 30px;
    img{
        width: 30px;
        height: 30px;
    }
`
const Copyrights = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50px;
    margin-right: 15em;
    @media only screen and (max-width: 1440px){
        margin-right: 4em;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        margin-right: 2em;
    }
    
    p{
        font-size: 16px;
        color: white;

        a{
            color: #36BEEC;
            transition: color 0.3s ease-in-out;
            &:hover{
                color: #EFF8FF;
            }
        }
    }
`


const Footer = () => {

    return(
        <FooterWrapper>
            <FooterContainer>
                <FooterLeft>
                    <LeftWrapper>
                        <MenuTitle>Menu:</MenuTitle>
                        <ul>
                            <li><Link to="/">Strona główna</Link></li>
                            <li><Link to="/o-nas">O nas</Link></li>
                            <li><Link to="/dzierzawa-kserokopiarek">Dzierżawa</Link></li>
                            <li><Link to="#">Kserokopiarki</Link></li>
                            <li><Link to="/kserokopiarki/czarno-biale">Czarno-białe</Link></li>
                            <li><Link to="/kserokopiarki/kolorowe">Kolorowe</Link></li>
                            <li><Link to="/serwis">Serwis</Link></li>
                        </ul>
                    </LeftWrapper>
                    <RightWrapper>
                        <MenuTitle>Kontakt:</MenuTitle>
                        <KontaktPhone><a href="tel:535492135"><img src={PhoneSVG} alt=""/>+48 535-492-135</a></KontaktPhone>
                        <KontaktMail><a href="mailto:xerofactor@op.pl"><img src={EmailSVG} alt=""/>xerofactor@op.pl</a></KontaktMail>
                        <FbLink href="#"><img src={FacebookSVG} alt="Facebook SpeedCopy Wynajem kserokopiarek Piotrków Trybunalski"/></FbLink>
                    </RightWrapper>
                </FooterLeft>
                <FooterRight>
                </FooterRight>
                <Copyrights><p>Wykonanie: <a href="https://markiewicz.netlify.app" rel="nofollow" target="blank">Markiewicz</a></p></Copyrights>
            </FooterContainer>
        </FooterWrapper>
    )
  }
  
  export default Footer;