import React from "react";
import { InputContainer } from "./styles";

type TextInputProps = {
    error?: any;
}

const TextInputComponent: React.FC<TextInputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({error, ...props}) => {
    return (
        <InputContainer>
            <input {...props } />

            <span className="error-message">{error}</span>
        </InputContainer>
    );
}

export default TextInputComponent;