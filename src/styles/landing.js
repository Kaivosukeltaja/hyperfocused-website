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

export const ImageHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
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
  flex-grow: 1;
  width: 100%;
  justify-content: space-around;
  text-align: left;
`

export const SplitCell = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 0 1 50%;
  position: relative;
`

export const MainContent = styled.div`
  max-width: 38rem;
  align-self: center;
`
