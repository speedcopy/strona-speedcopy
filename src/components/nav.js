import React, { useEffect } from "react"
import gatsby from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import "../layouts/menu.css"


const NAV = styled.nav`
    position: absolute;
    width: 100%;
    height: 120px;
    top: 50px;
    left: 0;
    padding: 0 15em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    

    li{
        margin-right: 30px;

        &:last-child{
            margin: 0;
        }
        a{
            color: #545454;
        }
    }
    @media only screen and (max-width: 1440px){
        padding: 0 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0 2em;
        
    }
    
`
const LogoLink = styled.a`
    display: flex;
`

const NavList = styled.ul`
    display: flex;
    @media only screen and (max-width: 768px){
    display: none;
    }
`
const NavListMobile = styled.ul`
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 10;
    li a{
        color: white;
        font-size: 22px;
    }
`
const TopBar = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15em;
    background-color: #3E7094; 
    position: relative;
    z-index: 10;

    a{
        color: white;
        margin-right: 15px;

        &:last-child{
            margin: 0;
        }
    }
    @media only screen and (max-width: 1440px){
        padding: 0 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0 2em;
        a{
        font-size: 14px;
    }
    }
    
`

//Hamburger menu
/*
const Hamburger = styled.button`
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
`

const HamburgerSpan = styled.span`
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
`
const HamburgerSpanInner = styled.span`
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 3px;
    background-color: black;
    position: absolute;
    transition: background-color 0.3s 0.1s ease-in-out;
        &::before{
            content: "";
            width: 100%;
            height: 3px;
            background-color: black;
            position: absolute;
            left: 0;
            top: -10px;
            transition: transform 0.3s 0.1s ease-in-out, background-color 1s ease-in-out;
        }
        &::after{
            content: "";
            width: 100%;
            height: 3px;
            background-color: black;
            position: absolute;
            left: 0;
            top: 10px;
            transition: background-color 1s ease-in-out;
        }
`
*/




const Nav = () => {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navMobile = document.querySelector(".nav-mobile");

        const handleClick = () => {
        hamburger.classList.toggle("hamburger--active");
        navMobile.classList.toggle("nav-mobile--active");
        };
        hamburger.addEventListener("click", handleClick);
    })

    return(
      <>
        <TopBar>
            <Link href="tel:533030647">Tel: 533030647</Link>
            <Link href="mailto:speed.copy@op.pl">speed.copy@op.pl</Link>
        </TopBar>
        <NAV>
            <LogoLink to="/index">LOGO</LogoLink>
            <NavList>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/o-nas">O nas</Link></li>
                <li><Link to="/dzierzawa-kserokopiarek">Dzierżawa</Link></li>
                <li><Link to="/kserokopiarki">Kserokopiarki</Link></li>
                <li><Link to="/serwis">Serwis</Link></li>
            </NavList>
            <button className="hamburger">
                <span className="hamburger__box">
                    <span className="hamburger__inner"></span>
                </span>
            </button>
            <div className="nav-mobile">
                <NavListMobile>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/o-nas">O nas</Link></li>
                    <li><Link to="/dzierzawa-kserokopiarek">Dzierżawa</Link></li>
                    <li><Link to="/kserokopiarki">Kserokopiarki</Link></li>
                    <li><Link to="/serwis">Serwis</Link></li>
                </NavListMobile>
            </div>
        </NAV>
      </>
    )
  }
  
export default Nav;