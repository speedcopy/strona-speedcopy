import React from "react"
import styled from "styled-components"
import gatsby from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"

import OnasImg from "../images/o-nas-wynajem-ksero.svg"

const Hero = styled.div`
    position: relative;
    margin: 120px 0 100px 0;
    padding: 0 15em;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 1440px){
        padding: 0 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0 2em;
        flex-direction: column;
    }
`
const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-color: #3E7094;
    z-index: -1;
`
const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-bottom: 15%;
    @media only screen and (max-width: 768px){
        padding-bottom: 0;
        padding-top: 15%;
        width: 100%;
    }
`
const SubHead = styled.span`
    color: #ffffff;
    font-size: 24px;
    font-weight: 300;
    @media only screen and (max-width: 768px){
        font-size: 18px;
    }
`
const Heading = styled.span`
    color: #ffffff;
    font-size: 64px;
    font-weight: 800;
    @media only screen and (max-width: 768px){
        font-size: 42px;
    }
`
const ImgWrapper = styled.div`
    width: 50%;
    margin-top: 100px;
    img{
        width: 100%;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const AboutText = styled.div`
    padding: 0 15em 100px 15em;
    @media only screen and (max-width: 1440px){
        padding: 0 4em 100px 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0 2em 100px 2em;
    }
`
const TextWrapper = styled.div`
   width: 50%;
        @media only screen and (max-width: 768px){
            width: 100%;
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
`

const KolorowePage = () => (
  <Layout>
    <Nav/>
    <Hero>
        <HeroBg></HeroBg>
        <H1>
            <Heading>O nas</Heading>
            <SubHead>SpeedCopy - <br/>
            Wynajem kserokopiarek Piotrków Trybunalski</SubHead>
        </H1>
        <ImgWrapper>
            <img src={OnasImg} alt="Wynajem kserokopiarek Piotrków, Łódź"/>
        </ImgWrapper>
    </Hero>
    <AboutText>
        <TextWrapper>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TextWrapper>
    </AboutText>
    <Footer/>
  </Layout>
)

export default KolorowePage
