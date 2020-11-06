import React from "react"
import gatsby from "gatsby"
import styled from "styled-components"

import ZasadyImg from "../../images/Zasady-Wynajmu-Kserokopiarek.png"

const Zasady = styled.div`
    padding: 0 15em;
    display: flex;
    background-color: #EFF8FF;
    @media only screen and (min-width: 1921px){
        margin: 100px auto;
        width: 1905px;
    }
    @media only screen and (max-width: 1440px){
      padding: 0 4em;
    }
    @media only screen and (max-width: 768px){
      flex-direction: column;
      padding: 0 2em;
    }
    
`
const ZasadyLeft = styled.div`
    width: 50%;
    margin-right: 50px;
    padding: 100px 0;
    @media only screen and (max-width: 768px){
      width: 100%;
      margin-right: 0;
    }
`
const ZasadyH3 = styled.h3`
    color: #545454;
    margin-bottom: 30px;
    @media only screen and (max-width: 1440px){
      font-size: 32px;
    }
    @media only screen and (max-width: 768px){
      font-size: 24px;
    }
    
`
const ZasadyText = styled.p`
    color: #545454;
    font-size: 24px;
    @media only screen and (max-width: 1440px){
      font-size: 22px;
    }
    @media only screen and (max-width: 768px){
      font-size: 18px;
    }
    
`
const ZasadyRight = styled.div`
    width: 50%;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 768px){
      width: 100%;
      height: 60vw;
    }
`

const StyledIMG = styled.img`
    position: absolute;
    bottom: -20%;
    left: 0;
    width: 100%;
    height: auto;
`


const HomeZasady = () => {

    return(
      <Zasady>
          <ZasadyLeft>
              <ZasadyH3>Jasne zasady wynajmu</ZasadyH3>
              <ZasadyText>Przez cały okres wynajmu urządzenie pozostaje własnością naszej firmy i jest objęte bezpłatną, pełną opieką serwisową, a użytkownik nie ponosi żadnych kosztów związanych z eksploatacją.
                Dzięki temu wszelkie ewentualne problemy związane z jego użytkowaniem są naszymi problemami, a nie Wynajmującego.</ZasadyText>
          </ZasadyLeft>
          <ZasadyRight>
              <StyledIMG src={ZasadyImg}/>
          </ZasadyRight>
      </Zasady>
    )
  }
  
  export default HomeZasady;