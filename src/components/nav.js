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
const LogoLink = styled(Link)`
    display: flex;
`
const DropdownContent = styled.ul`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #EFF8FF;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    min-width: 200%;
    padding: 30px 10px;
    li:first-child{
        margin-bottom: 30px;
    }
    li{
        width: 100%;
        height: 100%;
    }
    li a:hover{
        border-bottom: 1px solid #545454;
    }
`

const NavList = styled.ul`
    display: flex;
    li a:hover{
        color: #3E7094;
        border-bottom: 2px solid #3E7094;
    }

    li:nth-child(4){
        position: relative;
        &:hover ${DropdownContent}{
            display: block;
        }
    }
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
    li:nth-child(5), li:nth-child(6){
        margin-left: 30px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            top: 50%;
            left: -20px;
            display: block;
            width: 10px;
            height: 2px;
            background-color: white;
        }
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
const Arrow = styled.i`
    border: solid #545454;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform-origin: top right;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: -15px;
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
            <LogoLink to="/">LOGO</LogoLink>
            <NavList>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/o-nas">O nas</Link></li>
                <li><Link to="/dzierzawa-kserokopiarek">Dzierżawa</Link></li>
                <li>
                    <Link to="#">Kserokopiarki <Arrow className="arrow down"></Arrow></Link>
                    <DropdownContent className="dropdown-content">
                        <li><Link to="/kserokopiarki/kolorowe">Kolorowe</Link></li>
                        <li><Link to="/kserokopiarki/czarno-biale">Czarno-białe</Link></li>
                    </DropdownContent>
                </li>
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
                    <li><Link to="/kserokopiarki/kolorowe">Kolorowe</Link></li>
                    <li><Link to="/kserokopiarki/czarno-biale">Czarno-białe</Link></li>
                    <li><Link to="/serwis">Serwis</Link></li>
                </NavListMobile>
            </div>
        </NAV>
      </>
    )
  }
  
export default Nav;