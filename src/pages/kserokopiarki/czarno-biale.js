import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import Nav from "../../components/nav"
import Footer from "../../components/footer"

const Hero = styled.div`
    margin: 120px 15em;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubHead = styled.span`
    color: #545454;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
`
const Heading = styled.span`
    color: #3E7094;
    font-size: 64px;
    font-weight: 800;
`

const CzarnoBialePage = () => (
  <Layout>
    <Helmet>
        <title>Kserokopiarki czarno-białe - Wynajem i dzierżawa Piotrków | SpeedCopy</title>
        <meta name="description" content="Kserokopiarki do druku czarno białego z możliwością wynajmu lub dzierżawy na terenie Piotrkowa Trybunalskiego, Łodzi i okolic. Niskie ceny i darmowy serwis." />
    </Helmet>
    <Nav/>
    <Hero>
        <H1>
            <SubHead>Kserokopiarki</SubHead>
            <Heading>Czarno-Białe</Heading>
        </H1>
    </Hero>
    <Footer/>
  </Layout>
)

export default CzarnoBialePage
