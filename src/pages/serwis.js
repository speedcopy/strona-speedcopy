import React from 'react'
import styled from 'styled-components'

import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

import PhoneSVG from "../images/telephone.svg"
import EmailSVG from "../images/email.svg"

const Hero = styled.div`
    margin: 120px 15em;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1440px){
        margin: 120px 4em;
    }
    @media only screen and (max-width: 768px){
        margin: 120px 2em;
    }
`
const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubHead = styled.span`
    color: #545454;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`
const Heading = styled.span`
    color: #3E7094;
    font-size: 64px;
    font-weight: 800;
    @media only screen and (max-width: 768px){
        font-size: 32px;
    }
`

const SerwisContent = styled.section`
    padding: 0 15em;
    margin-bottom: 100px;


    @media only screen and (max-width: 1440px){
        padding: 0 4em
    }
    @media only screen and (max-width: 768px){
        padding: 0 2em
    }
`
const SerwisContainer = styled.div`
        margin: 0 auto;
        max-width: 1905px;
        display: flex;

        @media only screen and (max-width: 768px){
                max-width: 1905px;
                flex-direction: column;
            }
        p{
            font-size: 24px;

            @media only screen and (max-width: 1440px){
                font-size: 22px;
            }
            @media only screen and (max-width: 768px){
                font-size: 18px;
            }
        }

        ul{
            list-style: disc inside;
            margin-top: 30px;

            li{
                color: #545454;
                margin-left: 15px;
                font-size: 18px;
            }
        }
`

const H2 = styled.h2`
    font-size: 46px;
    @media only screen and (max-width: 768px){
        font-size: 32px;
    }
`
const LeftWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`

const RightWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px){
        width: 100%;
        margin-top: 100px;
    }

    h5{
        font-size: 46px;
        font-weight: 800;
        color: #545454;
        @media only screen and (max-width: 768px){
            font-size: 32px;
        }
    }
`
const KontaktPhone = styled.p`
    color: #545454;
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
        color: #545454;
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
    color: #545454;
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
        color: #545454;
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

function SerwisPage() {
    
    return(
        <Layout>
            <Helmet>
                <title>Serwis ksero - wynajem kserokopiarek | SpeedCopy</title>
            </Helmet>
            <Nav/>
            <Hero>
                <H1>
                    <SubHead>Kserokopiarki</SubHead>
                    <Heading>Serwis</Heading>
                </H1>
            </Hero>
            <SerwisContent>
                <SerwisContainer>
                    <LeftWrapper>
                        <H2>Serwis kserokopiarek</H2>
                        <p>Uszkodzona kserokopiarka? - Poradzimy sobie!</p>
                        <ul>
                            <li>Konica minolta</li>
                            <li>Xerox</li>
                            <li>Toshiba</li>
                            <li>Canon</li>
                            <li>BizHub</li>
                            <li>Ricoh</li>
                        </ul>
                    </LeftWrapper>
                    <RightWrapper>
                        <h5>Zadzwoń lub napisz:</h5>
                            <KontaktPhone><a href="tel:535492135"><img src={PhoneSVG} alt=""/>+48 533 030 647</a></KontaktPhone>
                            <KontaktMail><a href="mailto:xerofactor@op.pl"><img src={EmailSVG} alt=""/>speed.copy@op.pl</a></KontaktMail>
                    </RightWrapper>
                </SerwisContainer>
            </SerwisContent>
            <Footer/>
        </Layout>
    )
}

export default SerwisPage