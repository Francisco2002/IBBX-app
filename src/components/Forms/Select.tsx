import React from "react";
import { InputContainer } from "./styles";

type SelectProps = {
    options: { value: any, label: string }[];
    error?: any;
}

const SelectComponent: React.FC<SelectProps & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> = ({ options, error, ...rest }) => {

    return (
        <InputContainer>
            <select {...rest}>
                <option value={undefined} disabled selected={!rest.defaultValue}>Selecione um item</option>
                {
                    options.map(op => <option key={op.value.toString()} value={op.value} selected={rest.defaultValue == op.value}>{op.label}</option>)
                }
            </select>

            <span className="error-message">{error}</span>
        </InputContainer>
    );
}

export default SelectComponent;