import styled from "styled-components";
import LogoSvg from "../assets/logo.inline.svg"

export const MainPage = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const BackgroundImage = styled(LogoSvg)`
  pointer-events: none;
  fill: rgb(14, 36, 47);
  position: fixed;
  width: 300vw;
  left: -100%;
  z-index: -1;
  height: auto;
  transform: rotate(45deg);
`


export const Split = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;

  > * {
    flex: 0 1 50%;
  }
`

export const MainContent = styled.div`
`
