import React, { useRef, useState } from "react";
import { FormStyle, FormHeading, FormRow, FormField, FormOverlay, FormButton, FormArea, FormCloseButton } from "../styles/form"
import { Paragraph } from "../styles/common"

const ContactForm = ({ sendFormHandler, onClose }) => {
    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const sendForm = (e) => {
        e.preventDefault();

        const formData = {
            email: emailRef.current.value,
            message: messageRef.current.value
        }

        sendFormHandler(formData);
        setFormSubmitted(true);
    }

    
    return (
        <FormOverlay>
            <FormStyle onSubmit={sendForm}>
                <FormCloseButton onClick={onClose} />
                { formSubmitted ?
                    <>
                        <FormHeading>Kiitos yhteydenotostasi!</FormHeading>
                        <Paragraph>Palaamme asiaan pikimmiten!</Paragraph>
                        <FormButton onClick={onClose}>Sulje</FormButton>
                    </>
                :
                    <>
                        <FormHeading>Ollaan yhteyksissä!</FormHeading>
                        <Paragraph>
                            Oli tarpeesi millainen tahansa, Hyperfocus voi olla avuksi. Myös ja etenkin
                            silloin, kun tarpeesi ei ole vielä täysin kirkastunut itsellesikään. Ota rohkeasti yhteyttä
                            niin keskustellaan tarkemmin!                    
                        </Paragraph>
                        <Paragraph>
                            Yhteydenotto on maksuton eikä sido sinua tai edustamaasi yritystä tai yhteisöä mihinkään.
                        </Paragraph>
                        <FormArea name="message" ref={messageRef} placeholder="Viestisi" />
                        <FormRow>                    
                            <FormField name="email" ref={emailRef} placeholder="email@example.com"></FormField>
                            <FormButton>Lähetä</FormButton>
                        </FormRow>
                    </>
                }
            </FormStyle>

        </FormOverlay>
    )
}
export default ContactForm
