import React from "react"
import gatsby from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import KseroImg from "../../images/Zasady-Wynajmu-Kserokopiarek.png"
import KseroImg2 from "../../images/Wynajem-Ksero-Bizhubc558.png"
import KseroImg3 from "../../images/Wynajem-Ksero-Bizhubc654.png"
import IMGCzarnoBiale from "../../images/czarno-biale.svg"
import IMGKolorowe from "../../images/kolorowe.svg"

const Ksero = styled.div`
    padding: 0;
`
const KseroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
    padding: 100px 15em 0 15em;
    @media only screen and (max-width: 1440px){
      padding: 100px 4em 0 4em;
    }
    @media only screen and (max-width: 768px){
      flex-direction: column;
      padding: 100px 2em 0 2em;
    }
    
`
const KseroBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.333%;
    margin-right: 50px;

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
    height: auto;
    margin-bottom: 30px;
`
const KseroTitle = styled.p`
    font-size: 28px;
    font-weight: 800;
    color: #545454;
`
const KseroMore = styled.div`
    background-color: #EFF8FF;
    margin: 0 0 100px 15em;
    padding: 50px 15em 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px){
      margin: 0 0 100px 2em;
      padding: 50px 2em 50px 30px;
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
    }
    &:hover{
        background-color: #3E7094;
    }
`

const HomeKsero = () => {

    return(
        <Ksero>
            <KseroWrapper>
                <KseroBox>
                    <KseroIMG src={KseroImg}/>
                    <KseroTitle>Bizhub C308</KseroTitle>
                </KseroBox>
                <KseroBox>
                    <KseroIMG src={KseroImg2}/>
                    <KseroTitle>Bizhub C558</KseroTitle>
                </KseroBox>
                <KseroBox>
                    <KseroIMG src={KseroImg3}/>
                    <KseroTitle>Bizhub C654</KseroTitle>
                </KseroBox>
            </KseroWrapper>
            <KseroMore>
                <MoreTitle>Zobacz wszystkie dostępne modele</MoreTitle>
                <KseroMoreWrapper>
                    <KseroLeft>
                        <KseroMoreTitle>Czarno-białe</KseroMoreTitle>
                        <KseroMoreImg><img src={IMGCzarnoBiale}/></KseroMoreImg>
                        <Button><Link to="/kserokopiarki">Zobacz więcej</Link></Button>
                    </KseroLeft>
                    <KseroRight>
                        <KseroMoreTitle>Kolorowe</KseroMoreTitle>
                        <KseroMoreImg><img src={IMGKolorowe}/></KseroMoreImg>
                        <Button><Link to="/kserokopiarki">Zobacz więcej</Link></Button>
                    </KseroRight>
                </KseroMoreWrapper>
            </KseroMore>
        </Ksero>
    )
  }
  
  export default HomeKsero;