import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import WynajemImg from "../../images/Wynajem-ksero-piotrkow.jpg"



const Wynajem = styled.div`
    display: flex;
    background-color: #EFF8FF;
    @media only screen and (max-width: 768px){
      flex-direction: column;
    }
`
const WynajemContainer = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1905px;
    @media only screen and (max-width: 768px){
      flex-direction: column;
      width: auto;
    }
`


const WynajemLeft = styled.div`
    width: 50%;
    background-image: url(${WynajemImg});
    background-size: cover;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 768px){
      width: 100%;
      min-height: 300px;
    }
`
const WynajemRight = styled.div`
    width: 50%;
    background-color: #EFF8FF;
    padding: 100px 15em 100px 50px;
    @media only screen and (max-width: 1440px){
        padding: 100px 4em;
    }
    @media only screen and (max-width: 768px){
      width: 100%;
      padding: 100px 2em;
    }
    
`
const H2 = styled.h2`
  margin-bottom: 30px;
  @media only screen and (max-width: 1440px){
        font-size: 32px;
    }
  @media only screen and (max-width: 768px){
      font-size: 24px;
    }
    
`
const WynajemText = styled.p`
  color: #545454;
  margin-bottom: 30px;
  font-size: 24px;
  @media only screen and (max-width: 1440px){
        font-size: 22px;
    }
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
const WynajemLeftSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #EFF8FF;
`

const HomeWynajem = () => {
    return(
      <Wynajem>
        <WynajemContainer>
          <WynajemLeft className="wynajem-left-anim-trigger">
            <WynajemLeftSpan className="wynajem-left-anim"></WynajemLeftSpan>
          </WynajemLeft>
          <WynajemRight className="wynajem-right-trigger">
            <H2 className="wynajem-h2-anim">Jak działa wynajem kserokopiarek/ksero?</H2>
            <WynajemText className="wynajem-text-anim">Wynajem kserokopiarek to możliwość użytkowania sprzętu w ramach abonamentu miesięcznego: bez konieczności zakupu, bez ponoszenia kosztów części zamiennych, bez kosztów materiałów eksploatacyjnych oraz opłat związanych z okresowymi przeglądami i konserwacjami</WynajemText>
            <Button className="wynajem-button-anim"><Link to="/dzierzawa-kserokopiarek">Zobacz ofertę</Link></Button>
          </WynajemRight>
        </WynajemContainer>
      </Wynajem>
    )
  }
  
  export default HomeWynajem;