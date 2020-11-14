import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    ::-moz-selection { /* Code for Firefox */
        color: #3E7094;
        background: #36BEEC;
    }
    ::selection {
        color: #3E7094;
        background: #36BEEC;
    }
    p{
        font-weight: 300;
        letter-spacing: -1px;
        color: #545454;
    }
    h1,h2,h3,h4,h5{
        font-weight: 800;
    }
    h2,h3,h4{
        font-size: 48px;
        color: #545454;
    }
    ul{
        list-style-type: none;
        text-decoration: none;
    }
    li{
        text-decoration: none;
    }
    a{
        color: black;
        text-decoration: none;
    }
    @media only screen and (max-width: 768px){
        h2,h3,h4{
            font-size: 28px;
            color: #545454;
        }
    }
`

const Layout = ({children}) => (
    <>
        <GlobalStyles/>
            {children}
    </>
);

export default Layout;
