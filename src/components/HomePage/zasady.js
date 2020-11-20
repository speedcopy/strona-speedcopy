import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ZasadyImg from "../../images/Zasady-Wynajmu-Kserokopiarek.png"
import ZasadyTriangles from "../../images/triangles.svg"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const Zasady = styled.div`
    padding: 0 15em;
    display: flex;
    background-color: #EFF8FF;
    position: relative;
    @media only screen and (max-width: 1440px){
      padding: 0 4em;
    }
    @media only screen and (max-width: 768px){
      flex-direction: column;
      padding: 0 2em;
    }
    
`
const ZasadyContainer = styled.div`
    display: flex;
    position: relative;
    max-width: 1905px;
    margin: 0 auto;
    @media only screen and (max-width: 768px){
      flex-direction: column;
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
const HoverSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #EFF8FF;
`
const TrianglesWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5vw;
    height: auto;
    z-index: 100;
    transition: transform 0.5s ease-out;
    @media only screen and (min-width: 1921px){
      width: 2vw;
    }
`
const IMGTriangles = styled.img`
    width: 100%;
    height: auto;
    z-index: 100;
`



function HomeZasady() {
  let ZasadySpan = useRef(null);
  const zasadyRefH4 = useRef(null);

  useEffect(() => {
    setTimeout(() =>{
      gsap.fromTo(ZasadySpan.current, 2,
        { x: '-50%', ease: 'Expo.easeInOut' },
        { x: '200%', ease: 'Expo.easeInOut', scrollTrigger: {
          trigger: '.zasady-right-trigger',
          start: 'top 75%',
        }}
      );
      
      gsap.from(zasadyRefH4.current, 0.7, {
        y: '-50%',
        opacity: 0,
        ease: 'Back.easeOut',
        scrollTrigger: {
          trigger: '.zasady-left-trigger',
          start: 'top 75%',
        }
      });

      gsap.to('.triangles-anim', 0.7, {
        y: '-30%',
        scrollTrigger: {
          trigger: '.zasady-right-trigger',
          start: 'top 75%',
          scrub: true,
        }
      });

    }, 1000);
      
}, []);
    return(
      <Zasady>
        <ZasadyContainer>
            <ZasadyLeft className="zasady-left-trigger">
                <ZasadyH3 ref={zasadyRefH4}>Jasne zasady wynajmu</ZasadyH3>
                <ZasadyText>Przez cały okres wynajmu urządzenie pozostaje własnością naszej firmy i jest objęte bezpłatną, pełną opieką serwisową, a użytkownik nie ponosi żadnych kosztów związanych z eksploatacją.
                  Dzięki temu wszelkie ewentualne problemy związane z jego użytkowaniem są naszymi problemami, a nie Wynajmującego.</ZasadyText>
            </ZasadyLeft>
            <ZasadyRight className="zasady-right-trigger">
                <StyledIMG src={ZasadyImg}/>
                <HoverSpan ref={ZasadySpan}></HoverSpan>
            </ZasadyRight>
            <TrianglesWrapper className="triangles-anim">
              <IMGTriangles src={ZasadyTriangles} alt=""/>
            </TrianglesWrapper>
        </ZasadyContainer>
      </Zasady>
    )
  }
  
  export default HomeZasady;