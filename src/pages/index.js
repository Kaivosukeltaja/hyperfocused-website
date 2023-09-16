import React, { useState } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import themes from "../styles/themes"
import { GlobalStyle, Logo, MainHeading, SubHeading, Paragraph, Button } from "../styles/common"
import { MainPage, BackgroundImage, Split, MainContent } from "../styles/landing"

import "../assets/fonts.css"
import Form from "../components/FormContainer"


const IndexPage = () => {
  const [ formVisible, setFormVisible ] = useState(false)
  const formSentHandler = (success) => {  }
  const showForm = (visible) => () => { setFormVisible(visible) }

  return (
    <ThemeProvider theme={themes.dark}>
      <MainPage>
        <GlobalStyle />
        <BackgroundImage />
        <Logo className="primary" />
        <MainHeading>
          Monimutkainen ohjelmistokehitys 
          tarvitsee aina ihmistä.
        </MainHeading>
        <Split>
          <StaticImage 
            src="../assets/niko-large.png" 
            alt="Niko Salminen"
            placeholder="blurred"
          />
          <MainContent>
            <SubHeading>
            Useat ohjelmistokehityksen 
            haasteista ovat ihmisten 
            välisessä kommunikaatiossa. 
            </SubHeading>

            <Paragraph>
            Hyperfocus tuo ohjaavan avun ilman alalle tuttua jargonia 
            sekä ohjaa tiimien kehittymistä ihmislähtöisesti. 
            </Paragraph>

            <Paragraph>
            Ole yhteydessä ja mietimme parhaan lähestymisen tiimin auttamiseen!
            </Paragraph>

            <Button onClick={showForm(true)}>Ota yhteyttä</Button>
            { formVisible && 
              <Form formSentHandler={formSentHandler} onClose={showForm(false)}/>
            }
          </MainContent>
        </Split>
      </MainPage>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Hyperfocus</title>
    <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/139625611.js"></script>
  </>
)