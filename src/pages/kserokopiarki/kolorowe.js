import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import Nav from "../../components/nav"
import Footer from "../../components/footer"

import Bizhubc558 from "../../images/Wynajem-Ksero-Bizhubc558.png"
import Bizhubc308 from "../../images/Zasady-Wynajmu-Kserokopiarek.png"

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
const KseroContent = styled.section`
    padding: 0 15em;
    @media only screen and (max-width: 1440px){
        padding: 0px 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0px 2em;
    }
`
const KseroBox = styled.div`
    display: flex;
    background-color: #EFF8FF;
    border-radius: 30px;
    width: 100%;
    padding: 50px 20px;
    margin-bottom: 50px;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`
const IMGWrapper = styled.div`
    width: 30%;
    img{
        width: 100%;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const TextWrapper = styled.div`
    width: 70%;
    @media only screen and (max-width: 768px){
        width: 100%;
        margin-top: 30px;
    }
`
const Title = styled.p`
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 15px;
`
const Desc = styled.div`
    font-weight: 300;
    font-size: 18px;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`
const StyledUl = styled.ul`
    list-style-type: disc;
    padding-left: 30px;
`


const KolorowePage = () => (
  <Layout>
    <Nav/>
    <Hero>
        <H1>
            <SubHead>Kserokopiarki</SubHead>
            <Heading>Kolorowe</Heading>
        </H1>
    </Hero>
    <KseroContent>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc558} alt="Wynajem kserokopiarek Piotrków Bizhub c558"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c558</Title>
                <Desc>
                    <StyledUl>
                        <li>Prędkość: 55/55 str./min w kolorze oraz w czerni i bieli</li>
                        <li>Formaty papieru: A6-SRA3</li>
                        <li>Najwyższej klasy kolorowe wielofunkcyjne urządzenie drukujące A3</li>
                        <li>Przyjazne dla użytkownika: największy ekran dotykowy wśród urządzeń Konica Minolta</li>
                        <li>Idealna platforma dla wydajnych środowisk biurowych</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc308} alt="Wynajem kserokopiarek Piotrków Bizhub c558"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c308</Title>
                <Desc>
                    <StyledUl>
                        <li>Prędkość: 55/55 str./min w kolorze oraz w czerni i bieli</li>
                        <li>Formaty papieru: A6-SRA3</li>
                        <li>Najwyższej klasy kolorowe wielofunkcyjne urządzenie drukujące A3</li>
                        <li>Przyjazne dla użytkownika: największy ekran dotykowy wśród urządzeń Konica Minolta</li>
                        <li>Idealna platforma dla wydajnych środowisk biurowych</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
    </KseroContent>
    <Footer/>
  </Layout>
)

export default KolorowePage
