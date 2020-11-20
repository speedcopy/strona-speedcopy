import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"
import HomeContact from '../components/HomePage/contact'

import DzierzawaImg from '../images/dzierzawa-kserokopiarek.jpg'

gsap.registerPlugin(ScrollTrigger);

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
    
    @media only screen and (max-width: 1440px){
        font-size: 24px;
    }
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`
const Heading = styled.span`
    color: #3E7094;
    font-size: 64px;
    font-weight: 800;

    @media only screen and (max-width: 1440px){
        font-size: 64px;
    }
    @media only screen and (max-width: 768px){
        font-size: 32px;
    }
`
const PageContent = styled.div`
    margin: 0 15em;
    display: flex;

    @media only screen and (min-width: 1921px){
        margin: 100px auto;
        width: 1905px;
    }    
    @media only screen and (max-width: 1440px){
        margin: 0 4em;
    }
    @media only screen and (max-width: 768px){
        margin: 0 2em;
        flex-direction: column;
    }
`
const ContentLeft = styled.div`
    width: 50%;
        @media only screen and (max-width: 768px){
            width: 100%;
        }

    h1{
        font-size: 48px;
        color: #545454;
        margin-bottom: 50px;
        @media only screen and (max-width: 1440px){
            font-size: 32px;
        }
        @media only screen and (max-width: 768px){
            font-size: 24px;
            margin-bottom: 30px;
        }
    }
    p{
        font-size: 24px;
        color: #545454;
        
        @media only screen and (max-width: 1440px){
            font-size: 22px;
        }
        @media only screen and (max-width: 768px){
            font-size: 18px;
        }
    }
`
const ContentRight = styled.div`
    width: 50%;
    margin-left: 100px;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: 768px){
        width: 100%;
        margin-left: 0;
        margin-top: 50px;
    }

    img{
        width: 100%;
    }
    span{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: white;
    }
`
const UmowaContainer = styled.div`
    display: flex;
    margin: 100px 15em;
    @media only screen and (min-width: 1921px){
        margin: 100px auto;
        width: 1905px;
    } 

    @media only screen and (max-width: 1440px){
        margin: 100px 4em;
    }
    @media only screen and (max-width: 768px){
        margin: 100px 2em;
        flex-direction: column;
    }
`

const UmowaLeft = styled.div`
    width: 50%;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
    h1{
        font-size: 48px;
        color: #545454;
        margin-bottom: 50px;
        @media only screen and (max-width: 1440px){
            font-size: 32px;
        }
        @media only screen and (max-width: 768px){
            font-size: 24px;
            margin-bottom: 30px;
        }
    }
`
const UmowaRight = styled.div`
    width: 50%;
    margin-left: 100px;

    @media only screen and (max-width: 768px){
        width: 100%;
        margin-left: 0;
    }
    p{
        font-size: 24px;
        color: #545454;
        
        @media only screen and (max-width: 1440px){
            font-size: 22px;
        }
        @media only screen and (max-width: 768px){
            font-size: 18px;
        }
    }
`

const FtList = styled.div`
    margin: 0 15em 100px 15em;
    @media only screen and (min-width: 1921px){
        margin: 0 auto 100px auto;
        width: 1905px;
    } 
    @media only screen and (max-width: 1440px){
            margin: 0 4em 100px 4em;
        }
        @media only screen and (max-width: 768px){
            margin: 0 2em 100px 2em;
        }

    ol{
        list-style-type: decimal;
        list-style-position: inside;

        li{
            font-size: 24px;
            margin-bottom: 20px;
            border-bottom: 1px solid #3E7094;
            color: #545454;
            transition: all 0.3s ease-out;
            @media only screen and (max-width: 1440px){
                font-size: 22px;
            }
            @media only screen and (max-width: 768px){
                font-size: 18px;
            }

            &:hover{
                color: #36BEEC;
            }
        }
    }
`

function DzierzawaPage() {
    useEffect(() => {

        gsap.from('.page-content-title-anim', 0.8, {
            y: '-50%',
            opacity: 0,
            ease: 'Back.easeInOut',
            scrollTrigger: {
                trigger: '.page-content-title-trigger',
                start: 'top bottom',
            }
        });
        gsap.to('.page-content-span-anim', 1.5, {
            x: '100%',
            ease: 'Power4.easeInOut',
            scrollTrigger: {
                trigger: '.page-content-span-trigger',
                start: 'top bottom',
            }
        });

        setTimeout(() => {
            
            gsap.from('.umowa-title-anim', 0.8, {
                y: '-50%',
                opacity: 0,
                ease: 'Back.easeInOut',
                scrollTrigger: {
                    trigger: '.umowa-title-trigger',
                    start: 'top 75%',
                }
            });
            gsap.from('.ft-list-anim li', 0.8, {
                x: '-20%',
                opacity: 0,
                stagger: '0.2',
                ease: 'Power2.easeInOut',
                scrollTrigger: {
                    trigger: '.ft-list-trigger',
                    start: 'top 75%',
                }
            });
        }, 1000)
        
    })
  return(
    <Layout>
        <Helmet>
          <title>Dzierżawa i wynajem kserokopiarek - Piotrków Trybunalski | SpeedCopy</title>
          <meta name="description" content="Dzierżawa i wynajem kserokopiarek Piotrków Trybunalski, Łódź i okolice. Jasne zasady i darmowy serwis dla Twojej firmy." />
        </Helmet>
        <Nav/>
        <Hero>
            <H1>
                <SubHead>Dzierżawa</SubHead>
                <Heading>Kserokopiarek</Heading>
            </H1>
        </Hero>
        <PageContent>
            <ContentLeft className="page-content-title-trigger">
                <h1 className="page-content-title-anim">Wynajem i dzierżawa kserokopiarek</h1>
                <p>
                    Przez cały okres wynajmu urządzenie pozostaje własnością naszej firmy i jest objęte bezpłatną, pełną opieką serwisową, a użytkownik nie ponosi żadnych kosztów związanych z eksploatacją.
                    <br/>
                    Dzięki temu wszelkie ewentualne problemy związane z jego użytkowaniem są naszymi problemami, a nie Wynajmującego.
                </p>
            </ContentLeft>
            <ContentRight className="page-content-span-trigger">
                <img src={DzierzawaImg} alt="Dzierżawa kserokopiarek Piotrków Trybunalski" />
                <span className="page-content-span-anim"></span>
            </ContentRight>
        </PageContent>
        <UmowaContainer>
            <UmowaLeft className="umowa-title-trigger">
                <h1 className="umowa-title-anim">Zasady zawierania umowy</h1>
            </UmowaLeft>
            <UmowaRight>
                <p>Opłata za najem jest kosztem uzyskania przychodu, pomniejsza więc podatek dochodowy, dodatkowo można odliczyć VAT. (wystawiamy faktury VAT) 
                    Wysokość opłat zależy od ilości wykonywanych miesięcznie kopii.
                    <br/>
                    Brak niespodzianek w postaci nagłego znacznego kosztu naprawy w najmniej spodziewanym momencie. Bez konieczności długookresowej amortyzacji.
                </p>
            </UmowaRight>
        </UmowaContainer>
        <FtList className="ft-list-trigger">
            <ol className="ft-list-anim">
                <li>Regularne przeglądy i konserwacje</li>
                <li>Szybka likwidacja wszelkich usterek niezależnie od czasu trwania i stopnia skomplikowania naprawy</li>
                <li>Dostawa wszystkich materiałów eksploatacyjnych potrzebnych użytkownikowi części, podzespołów, tonerów wyłącznie oryginalnych!</li>
                <li>W wyjątkowych przypadkach zapewnienie urządzenia zastępczego.</li>
            </ol>
        </FtList>
        <HomeContact/>
        <Footer/>
    </Layout>
  )
}

export default DzierzawaPage
