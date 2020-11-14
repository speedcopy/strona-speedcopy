import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap/gsap-core"




const Features = styled.div`
    display: flex;
    margin: 100px 15em;
    @media only screen and (min-width: 1921px){
        margin: 100px auto;
        padding: 0 15em;
        width: 1905px;
    }
    @media only screen and (max-width: 1440px){
      margin: 100px 4em 100px 4em;
    }
    @media only screen and (max-width: 768px){
      flex-direction: column;
      margin: 100px 2em 100px 4em;
    }
    
`
const FtSpan = styled.span`
    color: #E3E3E3;
    font-size: 144px;
    position: absolute;
    top: -40%;
    left: -10%;
    z-index: -1;
    transition: color 0.3s ease-out;
    @media only screen and (max-width: 768px){
      font-size: 92px;
    }
`
const FtTitle = styled.p`
    color: black;
    font-size: 28px;
    margin-bottom: 15px;
    transition: transform 0.3s ease-out;
    @media only screen and (max-width: 768px){
      font-size: 18px;
    }
`

const FeaturesRow = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 33.333%;
    margin-right: 200px;
    &:last-child{
        margin: 0;
    }
    &:hover ${FtSpan}{
      color: #36BEEC; 
    }
    &:hover ${FtTitle}{
      transform: translateX(10%);
    }
    @media only screen and (max-width: 1440px){
      margin-right: 150px;
    }
    @media only screen and (max-width: 768px){
      width: 100%;
      margin-right: 0;
      margin-bottom: 50px;
    }
    
`

const FtText = styled.p`
    color: #545454;
    font-size: 18px;
    @media only screen and (max-width: 768px){
      font-size: 16px;
    }
`

function HomeFeatures() {
    useEffect(() => {
      setTimeout(() => {
        gsap.from('.animated-ft-box', 0.6, {
          y: '-30%',
          opacity: 0,
          stagger: '0.2',
          ease: 'Back.easeOut',
          scrollTrigger: {
            trigger: '.animated-ft-box-trigger',
            start: 'top 75%',
          }
        })
    }, 1000)
  }, [])
  

    return(
      <Features className="animated-ft-box-trigger">
          <FeaturesRow className="animated-ft-box">
              <FtSpan>1</FtSpan>
              <FtTitle>Darmowa instalacja maszyny</FtTitle>
              <FtText>Nie pobieramy żadnych opłat związanych z eksploatacją maszyny, jej instalacją, czy też szkoleniu pracowników w zakresie jej obsługi.</FtText>
          </FeaturesRow>
          <FeaturesRow className="animated-ft-box">
              <FtSpan>2</FtSpan>
              <FtTitle>Expresowa dostawa sprzętu</FtTitle>
              <FtText>Kserokopiarki które sprzedajemy, czy też dzierżawimy, wysyłamy tego samego lub następnego dnia roboczego na adres wskazany przez klienta.</FtText>
          </FeaturesRow>
          <FeaturesRow className="animated-ft-box">
              <FtSpan>3</FtSpan>
              <FtTitle>Kserokopiarki firmy Konica Minolta</FtTitle>
              <FtText>Konica Minolta jest jednym z liderów, jeżeli chodzi o produkcję kopiarek - sprzęt cechuje wytrzymałość i długi czas żywotności, a firma usługi świadczy od 1928 roku.</FtText>
          </FeaturesRow>
      </Features>
    )
  }
  
  export default HomeFeatures;