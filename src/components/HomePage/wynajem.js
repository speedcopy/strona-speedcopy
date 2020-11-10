import React, { useRef } from "react"
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
const WynajemLeftSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #EFF8FF;
`
/*
const themeAnimation = (dataAnimation, el) => {
  switch(dataAnimation){
    case '1':
      gsap.from(el,
        {y: '-100%', opacity: 0, duration: '0.8', ease: 'Power2.easeInOut', scrollTrigger: {
          trigger: el,
          start: 'bottom center',
          markers: true,
        } }
      )
      break;
  }
}
*/


const HomeWynajem = ({sectionRef}) => {
    return(
      <Wynajem>
        <WynajemLeft ref={sectionRef} className="wynajem-left-anim-trigger"><WynajemLeftSpan className="wynajem-left-anim"></WynajemLeftSpan></WynajemLeft>
        <WynajemRight className="wynajem-right-trigger">
          <H2 className="wynajem-h2-anim">Jak działa wynajem kserokopiarek/ksero?</H2>
          <WynajemText className="wynajem-text-anim">Wynajem kserokopiarek to możliwość użytkowania sprzętu w ramach abonamentu miesięcznego: bez konieczności zakupu, bez ponoszenia kosztów części zamiennych, bez kosztów materiałów eksploatacyjnych oraz opłat związanych z okresowymi przeglądami i konserwacjami</WynajemText>
          <Button className="wynajem-button-anim"><Link to="/dzierzawa-kserokopiarek">Zobacz ofertę</Link></Button>
        </WynajemRight>
      </Wynajem>
    )
  }
  
  export default HomeWynajem;
/*
class HomeWynajem extends React.Component {
  constructor(props) {
    super(props);
    this.animatedSpan = null;
    this.spanTrigger = null;
    this.tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: this.spanTrigger,
        start: 'top center',
        end: 'bottom top',
        markers: true,
      }
    });
  }
  componentDidMount() {
    this.tl = gsap.fromTo(this.animatedSpan, {
      x: '-100%', duration: '1.5'
    },
    { x: '100%', delay: '1.5', duration: '1.5' });
  }

  render() {
    return(
      <Wynajem ref={div => (this.spanTrigger = div)}>
        <WynajemLeft><WynajemLeftSpan ref={span => (this.animatedSpan = span)}></WynajemLeftSpan></WynajemLeft>
        <WynajemRight>
          <H2>Jak działa wynajem kserokopiarek/ksero?</H2>
          <WynajemText>Wynajem kserokopiarek to możliwość użytkowania sprzętu w ramach abonamentu miesięcznego: bez konieczności zakupu, bez ponoszenia kosztów części zamiennych, bez kosztów materiałów eksploatacyjnych oraz opłat związanych z okresowymi przeglądami i konserwacjami</WynajemText>
          <Button><Link to="/dzierzawa-kserokopiarek">Zobacz ofertę</Link></Button>
        </WynajemRight>
      </Wynajem>
    );
  }
}
  
export default HomeWynajem;
*/