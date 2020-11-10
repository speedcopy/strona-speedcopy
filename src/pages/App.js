import React, { useEffect, useRef } from "react"
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Layout from "../components/layout"
import HomeHero from "../components/HomePage/hero"
import HomeWynajem from "../components/HomePage/wynajem"
import HomeFeatures from "../components/HomePage/features"
import HomeZasady from "../components/HomePage/zasady"
import HomeKsero from "../components/HomePage/ksero"
import HomeContact from "../components/HomePage/contact"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"



gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);



function App() {

  const sectionRef = useRef(null);

  const zasadyRefH4 = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });

  const fadeIn = element => {
    gsap.fromTo(element, 2, {
      x: '-100%',
      ease: 'Power4.easeInOut',
      opacity: 1,
    },{
      x: '100%',
      ease: 'Power4.easeInOut',
      opacity: 1,
    });
  };
  
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
    })
  };

  intersection && intersection.intersectionRatio < 0.3
  ? fadeOut('.wynajem-left-anim')
  : fadeIn('.wynajem-left-anim')

  useEffect(() => {
    
    gsap.from(zasadyRefH4.current, 2, {
      y: '-50%',
      opacity: 0,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        trigger: zasadyRefH4.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
        markers: true,
      }
    });
    
  }, [])
  
  return(
      <Layout>
        <Helmet>
          <title>Wynajem kserokopiarek - Piotrków Trybunalski | SpeedCopy</title>
        </Helmet>
        <Nav/>
        <HomeHero/>
        <HomeWynajem sectionRef={sectionRef}/>
        <HomeFeatures/>
        <HomeZasady zasadyRefH4={zasadyRefH4}/>
        <HomeKsero/>
        <HomeContact/>
        <Footer/>
      </Layout>
  )
}

export default App
