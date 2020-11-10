import React, { useEffect, useRef } from "react"
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

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



function IndexPage() {

  const sectionRef = useRef(null);

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
    const timeout = setTimeout(() =>{
      gsap.to("body", 0, { css: { visibility: "visible" } });
      gsap.from('.wynajem-h2-anim', 1, {
        y: '-10%',
        opacity: 0,
        ease: 'Power4.easeInOut',
        scrollTrigger: {
          trigger: '.wynajem-right-trigger',
          start: 'top 75%',
        }
      });
      gsap.from('.wynajem-text-anim', 1, {
        y: '20%',
        opacity: 0,
        ease: 'Power4.easeInOut',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.wynajem-right-trigger',
          start: 'top 75%',
        }
      });
      gsap.from('.wynajem-button-anim', 0.8, {
        y: '30%',
        opacity: 0,
        ease: 'Power4.easeInOut',
        delay: 0.4,
        scrollTrigger: {
          trigger: '.wynajem-right-trigger',
          start: 'top 75%',
        }
      });

    }, 1000);
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
        <HomeZasady/>
        <HomeKsero/>
        <HomeContact/>
        <Footer/>
      </Layout>
  )
}

export default IndexPage
