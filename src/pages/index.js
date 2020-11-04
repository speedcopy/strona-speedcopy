import React from "react"

import Layout from "../components/layout"
import HomeHero from "../components/HomePage/hero"
import HomeWynajem from "../components/HomePage/wynajem"
import HomeFeatures from "../components/HomePage/features"
import HomeZasady from "../components/HomePage/zasady"
import HomeKsero from "../components/HomePage/ksero"
import HomeContact from "../components/HomePage/contact"
import Nav from "../components/nav"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
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

export default IndexPage
