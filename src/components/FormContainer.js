import React from "react";
import Form from "./ContactForm";

const FormContainer = ({ formSentHandler, onClose }) => {
    const sendFormHandler = (data) => {
        const requestOptions = {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('https://api.hyperfocused.fi/contact', requestOptions)
            .then(response => response.json())
            .then(data => formSentHandler(data));
    }

    return <Form sendFormHandler={sendFormHandler} onClose={onClose} />
}

export default FormContainer
