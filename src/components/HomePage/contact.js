import React from "react"
import gatsby from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import PhoneSVG from "../../images/telephone.svg"
import EmailSVG from "../../images/email.svg"
import ContactSVG from "../../images/Kontakt-wynajem-ksero-piotrkow.svg"

const Kontakt = styled.section`
    margin: 100px 0;
    display: flex;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`
const KontaktLeft = styled.div`
    padding: 50px 50px 50px 15em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #3E7094;
    width: 50%;
    @media only screen and (max-width: 1440px){
        padding: 50px 50px 50px 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 50px 50px 50px 2em;
        width: 100%;
    }
    
    
`
const KontaktRight = styled.div`
    padding: 0 15em 0 0;
    width: 50%;
    img{
        width: 100%;
    }
    @media only screen and (max-width: 1440px){
        padding: 0 4em 0 0;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 100px 0 0 0;
    }
    
`
const KontaktTitle = styled.h3`
    color: white;
    margin-bottom: 50px;
    @media only screen and (max-width: 1440px){
        font-size: 32px;
    }
`
const KontaktAdres = styled.p`
    color: white;
    font-size: 24px;
    margin-bottom: 30px;
    @media only screen and (max-width: 1440px){
        font-size: 22px;
        
    }
    @media only screen and (max-width: 768px){
        font-size: 18px;
    }
    
`
const KontaktPhone = styled.p`
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    img{
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }
    a{
        color: white;
        display: flex;
        align-items: center;
    }
    @media only screen and (max-width: 1440px){
        font-size: 22px;
    }
    @media only screen and (max-width: 768px){
        font-size: 18px;
        img{
        width: 20px;
        height: 20px;
        }
    }
    
`
const KontaktMail = styled.p`
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    img{
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }
    a{
        color: white;
        display: flex;
        align-items: center;
    }
    @media only screen and (max-width: 1440px){
        font-size: 22px;
    }
    @media only screen and (max-width: 768px){
        font-size: 18px;
        img{
        width: 20px;
        height: 20px;
        }
    }
    
`

const HomeContact = () => {

    return(
        <Kontakt>
            <KontaktLeft>
                <KontaktTitle>Kontakt</KontaktTitle>
                <KontaktAdres>Xerofactor sp. z o.o. ul. Żeromskiego 3 97-300 Piotrków Tryb.</KontaktAdres>
                <KontaktPhone><Link href="tel:535492135"><img src={PhoneSVG}/>+48 535-492-135</Link></KontaktPhone>
                <KontaktMail><Link href="mailto:xerofactor@op.pl"><img src={EmailSVG}/>xerofactor@op.pl</Link></KontaktMail>
            </KontaktLeft>
            <KontaktRight>
                <img src={ContactSVG}/>
            </KontaktRight>
        </Kontakt>
    )
  }
  
  export default HomeContact;