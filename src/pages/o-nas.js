import React, { useEffect } from "react"
import styled from "styled-components"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

import OnasImg from "../images/o-nas-wynajem-ksero.svg"
import MoneySVG from "../images/money.svg"
import ServiceSVG from "../images/customer-support.svg"
import CleanSVG from "../images/clean.svg"

gsap.registerPlugin(ScrollTrigger);

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
        transition: transform 0.5s ease-out;
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

const AboutText2 = styled.div`
    padding: 0 15em 100px 15em;
    display: flex;
    overflow: hidden;
    @media only screen and (max-width: 1440px){
        padding: 0 4em 100px 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0 2em 100px 2em;
        flex-direction: column;
    }
`
const Text2Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const H3 = styled.h3`
    font-size: 36px;
    @media only screen and (max-width: 768px){
        font-size: 24px;
        margin-bottom: 50px;
    }
`
const Text2Right = styled.div`
    width: 50%;
    p{
        font-size: 24px;
        margin-bottom: 15px;
        @media only screen and (max-width: 1440px){
            font-size: 22px;
        }
        @media only screen and (max-width: 768px){
            font-size: 18px;
        }
    }
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const AboutText3 = styled.div`
    padding: 0 15em 100px 15em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media only screen and (max-width: 1440px){
        padding: 0 4em 100px 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0 2em 100px 2em;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`
const FtSVG = styled.img`
    position: absolute;
    width: 80%;
    height: auto;
    bottom: 0;
    left: 0;
    z-index: 1;
`
const H3Text3 = styled.h3`
    font-size: 36px;
    margin-bottom: 50px;
    @media only screen and (max-width: 768px){
        font-size: 24px;
    }
`
const Box = styled.div`
    position: relative;
    width: 30%;
    height: 250px;
    background-color: #EFF8FF;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 50px 30px;
    overflow: hidden;
    box-shadow: 0px 0px 18px 1px rgba(0,0,0,0.2);
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    p{
        font-size: 22px;
        z-index: 2;
    }
    &:hover{
        transform: translateY(-5%);
        box-shadow: 0px 10px 18px 1px rgba(0,0,0,0.2);
    }
    @media only screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 30px;
    }
`

function AboutPage() {
    useEffect(() => {
            gsap.to('.about-img-scrub', {
                y: '10%',
                scrollTrigger: {
                    trigger: '.about-hero-trigger',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });
            gsap.from('.about-title-anim', {
                x: '20%',
                duration: '0.8',
                opacity: 0,
                ease: 'Power2.easeOut',
            });
            gsap.from('.about-subtitle-anim', {
                y: '20%',
                duration: '0.8',
                delay: '0.4',
                opacity: 0,
                ease: 'Power2.easeOut',
            });
        setTimeout(() => {
            gsap.from('.TextRight-anim p', 0.8, {
                x: '10%',
                opacity: 0,
                ease: 'Back.easeInOut',
                stagger: '0.1',
                scrollTrigger: {
                    trigger: '.TextRight-trigger',
                    start: 'top 75%',
                }
            });
            gsap.from('.Text3-title-anim', 0.8, {
                y: '-50%',
                opacity: 0,
                ease: 'Back.easeInOut',
                scrollTrigger: {
                    trigger: '.AboutText3-trigger',
                    start: 'top 75%',
                }
            });
        }, 1000);
    }, [])

    return(
    <Layout>
        <Helmet>
        <title>O nas - wynajem kserokopiarek | SpeedCopy</title>
        </Helmet>
        <Nav/>
        <Hero className="about-hero-trigger">
            <HeroBg></HeroBg>
            <H1>
                <Heading className="about-title-anim">O nas</Heading>
                <SubHead className="about-subtitle-anim">SpeedCopy - <br/>
                Wynajem kserokopiarek Piotrków Trybunalski</SubHead>
            </H1>
            <ImgWrapper>
                <img src={OnasImg} alt="Wynajem kserokopiarek Piotrków, Łódź" className="about-img-scrub"/>
            </ImgWrapper>
        </Hero>
        <AboutText>
            <TextWrapper>
                <p>SpeedCopy to marka należąca do firmy rodzinnej, działającej na terenie Polski od 2001 roku, zajmującej się wynajmem, sprzedażą oraz serwisem kserokopiarek biurowych o wysokiej jakości firmy KONICA. Posiadamy rożne modele kopiarek: małe oraz wysokonakładowe - dla małych i dużych biur, z możliwością automatycznego segregowania dokumentów, kopiowania i drukowania dwustronnego, skanowania, faxowania, działające w sieci.</p>
            </TextWrapper>
        </AboutText>
        <AboutText2 className="TextRight-trigger">
            <Text2Left><H3>Zalety współpracy z nami</H3></Text2Left>
            <Text2Right className="TextRight-anim">
                <p>Instalacja maszyny oraz szkolenie z obsługi jest za darmo.</p>
                <p>Serwis wraz z częściami eksploatacyjnymi również są darmowe.</p>
                <p>Najem maszyny rozliczany jest według ilości skopiowanych stron w ciągu miesiąca kalendarzowego. (minimalna wymagana ilość miesięczna to „do negocjacji", 1 kopia to ,,do negocjacji” groszy, minimalny czynsz to ,,do negocjacji" zł miesięcznie).</p>
                <p>Przykładowa wysokość czynszu miesięcznego: czynsz minimalny 105 zł (sto zł) netto miesięcznie - wynika z iloczynu ilości kopii 1500 i ceny za kopie 7 groszy netto.</p>
                <p>Proponowany okres umowy: na czas nieokreślony z możliwością wypowiedzenia z 3 miesięcznym wyprzedzeniem dla każdej ze stron.</p>
                <p>Najem kserokopiarek szczegółowo opisujemy w zakładce DZIERŻAWA.</p>
                <p>Jeżeli macie Państwo już swoją kserokopiarkę lub kupiliście od nas możecie z nami podpisać UMOWĘ SERWISOWĄ. - szczegóły w zakladce.</p>
            </Text2Right>
        </AboutText2>
        <AboutText3 className="AboutText3-trigger">
            <H3Text3 className="Text3-title-anim">Nie interesuje Państwa:</H3Text3>
            <Container>
                <Box>
                    <p>Serwis</p>
                    <FtSVG src={ServiceSVG} alt=""></FtSVG>
                </Box>
                <Box>
                    <p>Zakup części i materiałów eksploatacyjnych</p>
                    <FtSVG src={MoneySVG} alt=""></FtSVG>
                </Box>
                <Box>
                    <p>Okresowe przeglądy i czyszczenie kopiarek</p>
                    <FtSVG src={CleanSVG} alt=""></FtSVG>
                </Box>
            </Container>
        </AboutText3>
        <Footer/>
    </Layout>
        )
    }

export default AboutPage
