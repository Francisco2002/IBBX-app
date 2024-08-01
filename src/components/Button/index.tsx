import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Button } from "./styles";

const ButtonComponent: React.FC<PropsWithChildren<React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>> = ({ children, ...rest }) => {
    return (
        <Button { ...rest }>
            <span>{children}</span>
        </Button>
    );
}

export default ButtonComponent;