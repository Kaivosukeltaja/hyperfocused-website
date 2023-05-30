import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"
import LogoSvg from "../assets/logo.inline.svg"

import "../assets/fonts.css"

const MainPage = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BackgroundImage = styled(LogoSvg)`
  pointer-events: none;
  fill: rgb(14, 36, 47);
  position: fixed;
  width: 300vw;
  left: -100%;
  z-index: -1;
  height: auto;
  transform: rotate(45deg);
`

const Heading = styled.h1`
  font-weight: bold;
`

const Logo = styled(LogoSvg)`
  fill: #81D89A;
  max-width: 50vw;

  &.red {
    fill: #FA6F6C;
  }

  &.white {
    fill: #FFFFFF;
  }

  &.green {
    fill: #81D89A;
  }
`

const TeaserText = styled.p`
  font-family: "Space Grotesk", Helvetica, Arial, sans-serif;
  font-weight: 600;
`

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #0A1F30;
    color: #ffffff;
    font-family: Inter, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  body, html {
    margin: 0;
    box-sizing: border-box;
    height: 100%;
  }

  * {
    box-sizing: inherit;
  }

  #___gatsby,
  #___gatsby > * {
    height: 100%;
  }
`

const IndexPage = () => {
  return (
    <MainPage>
      <GlobalStyle />
      <BackgroundImage />
      <Logo className="green" />
      <TeaserText>Launching May 2023!</TeaserText>
    </MainPage>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Hyperfocus</title>
    <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/139625611.js"></script>
  </>
)