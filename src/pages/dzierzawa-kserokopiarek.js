import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"

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

const KolorowePage = () => (
  <Layout>
    <Nav/>
    <Hero>
        <H1>
            <SubHead>Dzierżawa</SubHead>
            <Heading>Kserokopiarek</Heading>
        </H1>
    </Hero>
    <Footer/>
  </Layout>
)

export default KolorowePage
