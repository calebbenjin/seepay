import { createGlobalStyle } from "styled-components"
import heroImg from '../assets/leftherobg.png'
import heroImg1 from '../assets/bgimg1.png'

export const theme = {
  colors: {
    black: "#000",
    brand: "#EB5757",
    white: "#FFFFFF",
    grey: "#757095"
  },
  fonts: {
    bold: "600",
    bolder: "800",
    xs: "9px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "60px",
  }
}


export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.black};
    font-feature-settings: "ss03","zero","cv08","cv11" 1;
    -webkit-font-smoothing: antialiased;
    transition: all 0.50s linear;
    font-family: 'Manrope', sans-serif;
  }

  *, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  .heroBg {
    background: url(${heroImg1});
    background-position: center;
    background-size: cover;
  }

`


