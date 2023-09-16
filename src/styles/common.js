import styled, { createGlobalStyle } from "styled-components";
import LogoSvg from "../assets/logo.inline.svg"

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.bodyFont};
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

export const MainHeading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.2;
  color: ${props => props.theme.primary};
`

export const Paragraph = styled.p`
  line-height: 1.5;
  max-width: 50rem;
`

export const SubHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
`

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.headingFont};
  border: 0;
  padding: 1rem 1.5rem;
  margin-top: 3.5rem;
  font-weight: 600;
  font-size: 1.25rem;
  clip-path: polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% calc(100% - 10px), 0% 10px);
`

export const Logo = styled(LogoSvg)`
  fill: ${props => props.theme.text};
  max-width: 9rem;

  &.dark {
    fill: ${props => props.theme.black};
  }

  &.text {
    fill: ${props => props.theme.text};
  }

  &.primary {
    fill: ${props => props.theme.primary};
  }
`
