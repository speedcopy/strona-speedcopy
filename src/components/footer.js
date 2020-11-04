import React from "react"
import gatsby from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import PhoneSVG from "../images/telephone.svg"
import EmailSVG from "../images/email.svg"
import FacebookSVG from "../images/facebook.svg"

const FooterWrapper = styled.footer`
    padding: 50px 15em;
    display: flex;
    justify-content: center;
    background-color: #3E7094;
    @media only screen and (max-width: 1440px){
        padding: 50px 4em;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        padding: 50px 2em;
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


const Footer = () => {

    return(
        <FooterWrapper>
            <FooterLeft>
                <LeftWrapper>
                    <MenuTitle>Menu:</MenuTitle>
                    <ul>
                        <li><Link to="/">Strona główna</Link></li>
                        <li><Link to="/o-nas">O nas</Link></li>
                        <li><Link to="/dzierzawa-kserokopiarek">Dzierżawa</Link></li>
                        <li><Link to="/kserokopiarki">Kserokopiarki</Link></li>
                        <li><Link to="/kserokopiarki/czarno-biale">Czarno-białe</Link></li>
                        <li><Link to="/kserokopiarki/kolorowe">Kolorowe</Link></li>
                        <li><Link to="/serwis">Serwis</Link></li>
                    </ul>
                </LeftWrapper>
                <RightWrapper>
                    <MenuTitle>Kontakt:</MenuTitle>
                    <KontaktPhone><Link href="tel:535492135"><img src={PhoneSVG}/>+48 535-492-135</Link></KontaktPhone>
                    <KontaktMail><Link href="mailto:xerofactor@op.pl"><img src={EmailSVG}/>xerofactor@op.pl</Link></KontaktMail>
                    <FbLink href="#"><img src={FacebookSVG}/></FbLink>
                </RightWrapper>
            </FooterLeft>
            <FooterRight>LOGO</FooterRight>
        </FooterWrapper>
    )
  }
  
  export default Footer;