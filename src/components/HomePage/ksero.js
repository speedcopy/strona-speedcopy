import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import gsap from "gsap"

import KseroImg from "../../images/Zasady-Wynajmu-Kserokopiarek.png"
import KseroImg2 from "../../images/Wynajem-Ksero-Bizhubc558.png"
import KseroImg3 from "../../images/Wynajem-Ksero-Bizhubc654.png"
import IMGCzarnoBiale from "../../images/czarno-biale.svg"
import IMGKolorowe from "../../images/kolorowe.svg"

const Ksero = styled.div`
    padding: 0;
    overflow: hidden;
`
const KseroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
    padding: 100px 15em 0 15em;
    @media only screen and (min-width: 1921px){
      padding: 0;
    }
    @media only screen and (max-width: 1440px){
      padding: 100px 4em 0 4em;
    }
    @media only screen and (max-width: 768px){
      flex-direction: column;
      padding: 100px 2em 0 2em;
    }
    
`
const KseroContainer = styled.div`

    @media only screen and (min-width: 1921px){
        max-width: 1905px;
        margin: 0 auto;
    }
    @media only screen and (max-width: 768px){
      flex-direction: column;
    }
    
`
const KseroBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.333%;
    min-height: 400px;
    margin-right: 50px;
    overflow: hidden;

    &:last-child{
        margin: 0;
    }
    @media only screen and (max-width: 768px){
      width: 100%;
      margin-right: 0;
      margin-bottom: 50px;
    }
`
const KseroIMG = styled.img`
    width: 100%;
    height: 100%;
    height: auto;
    margin-bottom: 30px;
`
const KseroTitle = styled.p`
    font-size: 28px;
    font-weight: 800;
    color: #545454;
`
const KseroMore = styled.div`
    min-height: 50vh;
    background-color: #EFF8FF;
    margin: 0 0 100px 15em;
    padding: 50px 15em 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 768px){
      margin: 0 0 100px 2em;
      padding: 50px 2em 50px 30px;
    }

    &::after{
        content: "";
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        background-color: #EFF8FF;
    }
`

const MoreTitle = styled.p`
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 50px;
    text-align: center;
    @media only screen and (max-width: 768px){
        font-size: 24px;
        
    }
`
const KseroMoreWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`
const KseroLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid rgba(84,84,84,0.2);
    padding-right: 50px;
    @media only screen and (max-width: 768px){
        padding-right: 0;
        border-right: none;
        border-bottom: 2px solid rgba(84,84,84,0.2);
        padding-bottom: 30px;
    }
`
const KseroRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    @media only screen and (max-width: 768px){
        padding-left: 0;
        padding-top: 30px;
    }
`

const KseroMoreImg = styled.div`
    text-align: center;
    margin-bottom: 30px;
    @media only screen and (max-width: 768px){
        width: 60px;
        img{
            width: 100%;
        }
    }
`
const KseroMoreTitle = styled.p`
    font-size: 24px;
    margin-bottom: 15px;
    @media only screen and (max-width: 768px){
        font-size: 18px;
    }
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
        font-size: 18px;
        text-transform: uppercase;
        @media only screen and (max-width: 768px){
            font-size: 12px;
            padding: 10px 15px;
        }
    }
    &:hover{
        background-color: #3E7094;
    }
`

function HomeKsero() {

    useEffect(() => {
        setTimeout(() => {
            gsap.from(".ksero-box-anim", 0.7, {
                y: '-100%',
                ease: 'Back.easeInOut',
                stagger: '0.1',
                scrollTrigger: {
                    trigger: '.ksero-box-anim-trigger',
                    start: 'top 75%',
                }
            })
        }, 1000);
        
    }, [])

    return(
        <Ksero>
            <KseroContainer>
                <KseroWrapper>
                    <KseroBox className="ksero-box-anim-trigger">
                        <KseroIMG src={KseroImg} alt="Bizhub c308 Wynajem kserokopiarek do biur" className="ksero-box-anim"/>
                        <KseroTitle>Bizhub C308</KseroTitle>
                    </KseroBox>
                    <KseroBox>
                        <KseroIMG src={KseroImg2} alt="Bizhub c558 Wynajem ksero" className="ksero-box-anim"/>
                        <KseroTitle>Bizhub C558</KseroTitle>
                    </KseroBox>
                    <KseroBox>
                        <KseroIMG src={KseroImg3} alt="Bizhub c654 Dzierżawa kserokopiarek Piotrków" className="ksero-box-anim"/>
                        <KseroTitle>Bizhub C654</KseroTitle>
                    </KseroBox>
                </KseroWrapper>
                <KseroMore>
                    <MoreTitle>Zobacz wszystkie dostępne modele</MoreTitle>
                    <KseroMoreWrapper>
                        <KseroLeft>
                            <KseroMoreTitle>Czarno-białe</KseroMoreTitle>
                            <KseroMoreImg><img src={IMGCzarnoBiale} alt=""/></KseroMoreImg>
                            <Button><Link to="/kserokopiarki/czarno-biale">Zobacz więcej</Link></Button>
                        </KseroLeft>
                        <KseroRight>
                            <KseroMoreTitle>Kolorowe</KseroMoreTitle>
                            <KseroMoreImg><img src={IMGKolorowe} alt=""/></KseroMoreImg>
                            <Button><Link to="/kserokopiarki/kolorowe">Zobacz więcej</Link></Button>
                        </KseroRight>
                    </KseroMoreWrapper>
                </KseroMore>
            </KseroContainer>
        </Ksero>
    )
  }
  
  export default HomeKsero;