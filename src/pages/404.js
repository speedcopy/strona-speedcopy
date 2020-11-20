import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"

import SadCat from '../images/sad-cat.gif'

const NotFound = styled.section`
  min-height: 100vh;
  padding: 120px 15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1440px){
      padding: 120px 4em;
  }
  @media only screen and (max-width: 768px){
      padding: 120px 2em;
  }
`
const Container = styled.div`
  max-width: 1905px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h5{
    font-size: 46px;
    color: #545454;
  }
  p{
    font-size: 24px;
    color: #545454;
    margin-bottom: 30px;
  }
  img{
    margin-bottom: 50px;
    width: 50%;
    height: auto;
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
        font-size: 16px;
        text-transform: uppercase;
        @media only screen and (max-width: 768px){
            font-size: 12px;
            padding: 10px 15px;
        }
    }
    &:hover{
        background-color: #3E7094;
    }
`

const NotFoundPage = () => (
  <Layout>
    <Nav/>
    <NotFound>
      <Container>
        <img src={SadCat} width="280px" height="243px" alt=""/>
        <h5>Strony nie znaleziono</h5>
        <p>Strona mogła zostać usunięta lub nigdy nie istniała.</p>
        <Button><Link to="/">Strona główna</Link></Button>
      </Container>
    </NotFound>
    <Footer/>
  </Layout>
)

export default NotFoundPage
