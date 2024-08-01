import React from "react";
import { InputContainer } from "./styles";

type TextAreaProps = {
    error?: any;
}

const TextAreaComponent: React.FC<TextAreaProps & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({error, ...props}) => {

    return (
        <InputContainer>
            <textarea {...props} placeholder="Descrição..." rows={4} />

            <span className="error-message">{error}</span>
        </InputContainer>
    );
}

export default TextAreaComponent;