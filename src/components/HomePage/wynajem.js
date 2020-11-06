import React from "react"
import gatsby from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import WynajemImg from "../../images/Wynajem-ksero-piotrkow.jpg"

const Wynajem = styled.div`
    display: flex;
    @media only screen and (min-width: 1921px){
        margin: 0 auto;
        width: 1905px;
    }
    @media only screen and (max-width: 768px){
      flex-direction: column;
    }
`

const WynajemLeft = styled.div`
    width: 50%;
    background-image: url(${WynajemImg});
    background-size: cover;
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
    }
    &:hover{
        background-color: #3E7094;
    }
    @media only screen and (max-width: 768px){
      a{
        font-size: 16px;
      }
    }
`

const HomeWynajem = () => {

    return(
      <Wynajem>
        <WynajemLeft></WynajemLeft>
        <WynajemRight>
          <H2>Jak działa wynajem kserokopiarek/ksero?</H2>
          <WynajemText>Wynajem kserokopiarek to możliwość użytkowania sprzętu w ramach abonamentu miesięcznego: bez konieczności zakupu, bez ponoszenia kosztów części zamiennych, bez kosztów materiałów eksploatacyjnych oraz opłat związanych z okresowymi przeglądami i konserwacjami</WynajemText>
          <Button><Link to="/kserokopiarki">Zobacz ofertę</Link></Button>
        </WynajemRight>
      </Wynajem>
    )
  }
  
  export default HomeWynajem;