import React, { useState } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import themes from "../styles/themes"
import { GlobalStyle, Logo, MainHeading, SubHeading, Paragraph, Button } from "../styles/common"
import { MainPage, BackgroundImage, Split, MainContent, ImageHolder, SplitCell } from "../styles/landing"

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
          <SplitCell>
            <ImageHolder>
              <StaticImage 
                src="../assets/niko-large.png" 
                alt="Niko Salminen"
                placeholder="blurred"
              />
            </ImageHolder>
          </SplitCell>
          <SplitCell>
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
            </MainContent>
          </SplitCell>
        </Split>
        { formVisible && 
              <Form formSentHandler={formSentHandler} onClose={showForm(false)}/>
        }
      </MainPage>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Hyperfocus</title>
  </>
)