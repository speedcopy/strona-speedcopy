import React from "react"
import gatsby from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import HeroImg from "../../images/Wynajem-kserokopiarek-piotrkow-trybunalski-speedcopy.png"
import HeroImgCircleLines from "../../images/circle-lines.svg"
import HeroImgCircleGradient from "../../images/circle-gradient.svg"
import HeroImgArrowsBottom from "../../images/arrows-bottom.svg"

const Hero = styled.div`
    overflow: hidden;
    margin: 0;
    padding: 120px 15em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(239,248,255);
    background: -moz-linear-gradient(0deg, rgba(239,248,255,1) 0%, rgba(255,255,255,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(239,248,255,1) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(0deg, rgba(239,248,255,1) 0%, rgba(255,255,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eff8ff",endColorstr="#ffffff",GradientType=1);
    @media only screen and (min-width: 1921px){
        margin: 0 auto;
        width: 1905px;
    }
    @media only screen and (max-width: 1440px){
        padding: 120px 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 120px 2em;
        flex-direction: column;
    }
`
const HeroText = styled.div`
    width: 50%;
    @media only screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 30px;
    }
`
const H1 = styled.h1`
    display: flex;
    flex-direction: column;
`
const HeroDivBig = styled.div`
    font-size: 96px;
    font-weight: 800;
    @media only screen and (max-width: 1440px){
        font-size: 64px;
    }
    @media only screen and (max-width: 768px){
        font-size: 42px;
    }
    
`
const SpanBlue = styled.span`
    color: #3E7094;
`
const SpanWhiteBlue = styled.span`
    color: #36BEEC;
`
const HeroSpan = styled.span`
    font-size: 24px;
    font-weight: 300;
    color: #545454;
    letter-spacing: -1px;
    margin-bottom: 30px;
    @media only screen and (max-width: 1440px){
        font-size: 22px;
    }
    @media only screen and (max-width: 768px){
        font-size: 18px;
    }
    
`
const HeroImageWrapper = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const HeroWrapperIMG = styled.img`
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
`
const CircleLines = styled.img`
    position: absolute;
    top: -20%;
    right: -30%;
    width: 100%;
    height: 100%;
    z-index: 1;
`
const CircleGradient = styled.img`
    position: absolute;
    bottom: 10%;
    left: 10%;
    width: 20%;
    height: 20%;
    z-index: 3;
`
const ArrowsBottom = styled.img`
    position: absolute;
    top: 10%;
    left: 10%;
    width: 20%;
    height: 20%;
    z-index: 3;
`

const Button = styled.button`
    border: none;
    border-radius: 30px;
    background-color: #36BEEC;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-out;

    a{
        padding: 15px 20px;
        place-items: center;
        color: white;
        font-size: 16px;
        text-transform: uppercase;
    }
    &:hover{
        background-color: #3E7094;
    }
`

const HomeHero = () => {

  return(
    <Hero>
      <HeroText>
        <H1>
            <HeroDivBig><SpanBlue>Speed</SpanBlue><SpanWhiteBlue>Copy</SpanWhiteBlue></HeroDivBig>
            <HeroSpan>Wynajem kserokopiarek do biur w ramach miesięcznego abonamentu. Serwis i naprawy w cenie!</HeroSpan>
        </H1>
        <Button><Link to="/kserokopiarki">Zobacz ofertę</Link></Button>
      </HeroText>
      <HeroImageWrapper>
        <HeroWrapperIMG src={HeroImg} alt="Wynajem kserokopiarek Piotrków Trybunalski" />
        <CircleLines src={HeroImgCircleLines}/>
        <CircleGradient src={HeroImgCircleGradient}/>
        <ArrowsBottom src={HeroImgArrowsBottom}/>
      </HeroImageWrapper>
    </Hero>
  )
}

export default HomeHero;