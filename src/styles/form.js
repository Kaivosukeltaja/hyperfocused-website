import styled from "styled-components";
import { Button, MainHeading } from "./common";
import CloseSvg from "../assets/close.inline.svg"

export const FormOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    @media(min-width:640px) {
        padding: 2rem;
    }
`

export const FormStyle = styled.form`
    position: relative;
    padding: 2rem;
    background-color: ${props => props.theme.modal.background};
    color: ${props => props.theme.modal.text};
    display: flex;
    flex-direction: column;
    clip-path: polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% calc(100% - 10px), 0% 10px);

    & > p {
        margin-top: 0;
    }
`

export const FormCloseButton = styled(CloseSvg)`
  fill: ${props => props.theme.modal.text};
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export const FormHeading = styled(MainHeading)`
    margin-top: 0;
    padding-right: 3rem;
    color: ${props => props.theme.modal.text};
`

export const FormRow = styled.label`
    display: flex;
    align-items: baseline;
`

export const FormFieldName = styled.div`
    flex-basis: 20%;
    flex-grow: 0;
`

export const FormField = styled.input`
    padding: 1rem;
    border: 1px solid currentColor;
    flex-grow: 1;
    margin-right: 2rem;
    margin-top: 2rem;
`

export const FormArea = styled.textarea`
    padding: 1rem;
    border: 1px solid currentColor;
`

export const FormButton = styled(Button)`
    margin: 0;
    background-color: ${props => props.theme.modal.buttonBackground};
    color: ${props => props.theme.modal.buttonText};
`


