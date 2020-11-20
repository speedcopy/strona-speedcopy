import React, { useEffect } from "react"
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



function IndexPage() {

  useEffect(() => {
    setTimeout(() =>{
      gsap.to("body", 0, { css: { visibility: "visible" } });
      gsap.from('.wynajem-h2-anim', 0.7, {
        y: '-10%',
        opacity: 0,
        ease: 'Back.easeInOut',
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
      gsap.fromTo('.wynajem-left-anim', 1.5, {
        x: '-100%',
        ease: 'Expo.easeInOut',
      },
      {
        x: '200%',
        ease: 'Expo.easeInOut',
        scrollTrigger: {
          trigger: '.wynajem-left-anim-trigger',
          start: 'top center',
        }
      }
      );

    }, 1000);
  }, [])
  
  return(
      <Layout>
        <Helmet>
          <title>Wynajem kserokopiarek - Piotrków Trybunalski | SpeedCopy</title>
          <meta name="description" content="Wynajem i dzierżawa kserokopiarek Piotrków Trybunalski, Łódź i okolice. Darmowe testowanie. Serwis i naprawy w cenie" />
          <meta name="google-site-verification" content="WINCG2EvHbByTqVqaD3e8qgcCiAA0TFEffveEomP-YI" />
        </Helmet>
        <Nav/>
        <HomeHero/>
        <HomeWynajem/>
        <HomeFeatures/>
        <HomeZasady/>
        <HomeKsero/>
        <HomeContact/>
        <Footer/>
      </Layout>
  )
}

export default IndexPage
