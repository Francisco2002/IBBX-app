import React, { PropsWithChildren } from "react";
import { Text } from "./styles";

type TypographyProps = {
    variant?: "title" | "text"
};

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({ variant = "text", children }) => {

    const tv = {
        title: "txt-title",
        text: "txt-normal"
    }

    return (
        <Text className={tv[variant]}>{children}</Text>
    );
}

export default Typography